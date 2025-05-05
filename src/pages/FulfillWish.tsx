
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gift, Search, Heart, User, CreditCard, Filter } from "lucide-react";

// Mock wishes data
const mockWishes = [
  {
    id: "w1",
    title: "Help with Medical Expenses",
    type: "Financial",
    username: "hopeful2024",
    description: "I need assistance with unexpected medical bills after an emergency surgery.",
    goalAmount: "$2,500",
    progress: 62,
    daysLeft: 12
  },
  {
    id: "w2",
    title: "Laptop for College Classes",
    type: "Material",
    username: "student_dreams",
    description: "I'm starting college this fall and need a laptop for classes. Any help would be appreciated.",
    goalAmount: "$800",
    progress: 35,
    daysLeft: 24
  },
  {
    id: "w3",
    title: "Birthday Present for My Sister",
    type: "Material",
    username: "caring_brother",
    description: "My sister has been going through a tough time and I want to get her something special for her birthday.",
    goalAmount: "$150",
    progress: 0,
    daysLeft: 5
  },
  {
    id: "w4",
    title: "Moving Expenses for New Job",
    type: "Financial",
    username: "new_beginnings",
    description: "I got a job offer in another city but need help with moving expenses.",
    goalAmount: "$1,200",
    progress: 75,
    daysLeft: 8
  }
];

const FulfillWish = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedWish, setSelectedWish] = useState<string | null>(null);
  const [donationAmount, setDonationAmount] = useState("");

  const filteredWishes = mockWishes.filter((wish) => {
    const matchesQuery = wish.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          wish.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" ? true : wish.type === selectedType;
    return matchesQuery && matchesType;
  });

  const sortedWishes = [...filteredWishes].sort((a, b) => {
    if (sortBy === "progress") return a.progress - b.progress;
    if (sortBy === "daysLeft") return a.daysLeft - b.daysLeft;
    // Default is "newest"
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold text-white mb-4">
              FULFILL <span className="text-neon-blue">WISHES</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse wishes from users in our community and help make dreams come true.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="glass-card rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  placeholder="Search wishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-midnight-300 border-white/10 focus:border-neon-blue focus:ring-neon-blue text-white"
                />
              </div>
              
              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-midnight-300 border-white/10 focus:border-neon-blue focus:ring-neon-blue text-white flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-gray-500" />
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent className="bg-midnight-200 border-white/10">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Material">Material Items</SelectItem>
                  <SelectItem value="Financial">Financial Support</SelectItem>
                  <SelectItem value="Service">Services & Help</SelectItem>
                  <SelectItem value="Experience">Experiences</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-midnight-300 border-white/10 focus:border-neon-blue focus:ring-neon-blue text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-midnight-200 border-white/10">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="progress">Lowest Progress First</SelectItem>
                  <SelectItem value="daysLeft">Ending Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Wishes Grid */}
          {sortedWishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedWishes.map((wish) => (
                <div 
                  key={wish.id} 
                  className={`glass-card rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedWish === wish.id ? "ring-2 ring-neon-blue shadow-neon" : "hover:shadow-neon-strong"
                  }`}
                  onClick={() => setSelectedWish(selectedWish === wish.id ? null : wish.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        {wish.type === "Financial" ? (
                          <CreditCard className="h-5 w-5 text-neon-blue" />
                        ) : (
                          <Gift className="h-5 w-5 text-neon-blue" />
                        )}
                      </div>
                      <div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          wish.type === "Financial" 
                            ? "bg-green-400/20 text-green-400" 
                            : "bg-neon-blue/20 text-neon-blue"
                        }`}>
                          {wish.type}
                        </span>
                        <div className="flex items-center text-gray-400 text-xs">
                          <User className="h-3 w-3 mr-1" />
                          {wish.username}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-white font-semibold text-lg mb-2">{wish.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {wish.description}
                    </p>
                    
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-neon-blue">{wish.progress}%</span>
                    </div>
                    <div className="h-2 bg-midnight-300 rounded-full overflow-hidden mb-4">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" 
                        style={{ width: `${wish.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{wish.daysLeft} days left</span>
                      <span className="text-white font-semibold">{wish.goalAmount}</span>
                    </div>
                  </div>
                  
                  {/* Expanded donation area when selected */}
                  {selectedWish === wish.id && (
                    <div className="bg-midnight-300/50 p-6 border-t border-white/5">
                      <p className="text-gray-300 text-sm mb-4">
                        How much would you like to donate?
                      </p>
                      <div className="flex space-x-2 mb-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className={`border-white/20 ${donationAmount === "10" ? "bg-neon-blue/20 text-neon-blue" : "text-white hover:bg-white/5"}`}
                          onClick={() => setDonationAmount("10")}
                        >
                          $10
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className={`border-white/20 ${donationAmount === "25" ? "bg-neon-blue/20 text-neon-blue" : "text-white hover:bg-white/5"}`}
                          onClick={() => setDonationAmount("25")}
                        >
                          $25
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className={`border-white/20 ${donationAmount === "50" ? "bg-neon-blue/20 text-neon-blue" : "text-white hover:bg-white/5"}`}
                          onClick={() => setDonationAmount("50")}
                        >
                          $50
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className={`border-white/20 ${donationAmount === "100" ? "bg-neon-blue/20 text-neon-blue" : "text-white hover:bg-white/5"}`}
                          onClick={() => setDonationAmount("100")}
                        >
                          $100
                        </Button>
                      </div>
                      
                      <div className="relative mb-4">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <Input
                          placeholder="Custom amount"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          className="pl-7 bg-midnight-400 border-white/10 focus:border-neon-blue focus:ring-neon-blue text-white"
                        />
                      </div>
                      
                      <Button className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white">
                        <Heart className="h-4 w-4 mr-2" />
                        Fulfill This Wish
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">No Wishes Found</h3>
              <p className="text-gray-400 mb-6">No wishes match your current search and filter criteria. Try adjusting your search.</p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("");
                  setSortBy("newest");
                }} 
                className="bg-neon-blue hover:bg-neon-blue/80 text-white"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FulfillWish;
