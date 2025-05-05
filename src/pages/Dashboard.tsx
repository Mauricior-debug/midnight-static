import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Gift, 
  Heart, 
  Clock, 
  CreditCard, 
  UserCheck, 
  Settings, 
  Bell, 
  LogOut, 
  Plus,
  Check
} from "lucide-react";

// Mock wishes data
const mockWishes = [
  { 
    id: "w1", 
    title: "Gaming PC for Game Development", 
    type: "Material", 
    status: "Pending", 
    createdAt: "2024-02-15", 
    progress: 0, 
    isPrivate: false
  },
  { 
    id: "w2", 
    title: "Funds for Music Studio Equipment", 
    type: "Financial", 
    status: "Active", 
    createdAt: "2024-01-20", 
    progress: 65, 
    isPrivate: true 
  },
];

// Mock fulfilled wishes data
const mockFulfilledWishes = [
  { 
    id: "f1", 
    title: "Help with College Tuition", 
    username: "anonymous", 
    amount: "$500", 
    date: "2024-02-10" 
  },
  { 
    id: "f2", 
    title: "Birthday Gift for Brother", 
    username: "anonymous", 
    amount: "Item", 
    date: "2024-01-05" 
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("wishes");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-lg p-6 sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center mr-4">
                    <UserCheck className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">NeonDreamer</h3>
                    <p className="text-gray-400 text-sm">User #42819</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Wallet Balance</span>
                    <span className="text-white font-semibold">$350.00</span>
                  </div>
                  <Link to="/wallet">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Manage Wallet
                    </Button>
                  </Link>
                </div>
                
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab("wishes")}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                      activeTab === "wishes" 
                        ? "bg-neon-purple/20 text-neon-purple" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Heart className="w-4 h-4 mr-3" />
                    My Wishes
                  </button>
                  
                  <button
                    onClick={() => setActiveTab("fulfilled")}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                      activeTab === "fulfilled" 
                        ? "bg-neon-purple/20 text-neon-purple" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Gift className="w-4 h-4 mr-3" />
                    Fulfilled Wishes
                  </button>
                  
                  <button
                    onClick={() => setActiveTab("history")}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                      activeTab === "history" 
                        ? "bg-neon-purple/20 text-neon-purple" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Clock className="w-4 h-4 mr-3" />
                    History
                  </button>
                  
                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                      activeTab === "notifications" 
                        ? "bg-neon-purple/20 text-neon-purple" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Bell className="w-4 h-4 mr-3" />
                    Notifications
                    <span className="ml-auto bg-neon-purple text-white text-xs px-1.5 py-0.5 rounded-full">3</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                      activeTab === "settings" 
                        ? "bg-neon-purple/20 text-neon-purple" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </button>
                  
                  <hr className="border-white/10 my-2" />
                  
                  <button
                    className="w-full flex items-center px-3 py-2 text-sm rounded-md text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Wishes Tab */}
              {activeTab === "wishes" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-cyber text-white">MY <span className="text-neon-purple">WISHES</span></h2>
                    <Link to="/make-wish">
                      <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        New Wish
                      </Button>
                    </Link>
                  </div>
                  
                  {mockWishes.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {mockWishes.map((wish) => (
                        <div key={wish.id} className="glass-card rounded-lg p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center mb-1">
                                {wish.isPrivate && (
                                  <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full mr-2">
                                    Private
                                  </span>
                                )}
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  wish.status === "Pending" 
                                    ? "bg-yellow-400/20 text-yellow-400" 
                                    : "bg-green-400/20 text-green-400"
                                }`}>
                                  {wish.status}
                                </span>
                              </div>
                              <h3 className="text-white font-semibold text-lg mb-1">{wish.title}</h3>
                              <div className="flex items-center text-sm text-gray-400 mb-4">
                                <span className="mr-3">{wish.type}</span>
                                <span>Created {wish.createdAt}</span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-white/5">
                                Edit
                              </Button>
                              <Button size="sm" variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                                Delete
                              </Button>
                            </div>
                          </div>
                          
                          {wish.progress > 0 && (
                            <div className="mt-4">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-400">Progress</span>
                                <span className="text-neon-blue">{wish.progress}%</span>
                              </div>
                              <div className="h-2 bg-midnight-300 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" 
                                  style={{ width: `${wish.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="glass-card rounded-lg p-8 text-center">
                      <div className="w-16 h-16 mx-auto bg-neon-purple/20 rounded-full flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 text-neon-purple" />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-2">No Wishes Yet</h3>
                      <p className="text-gray-400 mb-6">You haven't created any wishes yet. Make your first wish now.</p>
                      <Link to="/make-wish">
                        <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
                          <Plus className="w-4 h-4 mr-2" />
                          Create Your First Wish
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Fulfilled Wishes Tab */}
              {activeTab === "fulfilled" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-cyber text-white">FULFILLED <span className="text-neon-purple">WISHES</span></h2>
                    <Link to="/fulfill-wish">
                      <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
                        <Gift className="w-4 h-4 mr-2" />
                        Fulfill More
                      </Button>
                    </Link>
                  </div>
                  
                  {mockFulfilledWishes.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {mockFulfilledWishes.map((wish) => (
                        <div key={wish.id} className="glass-card rounded-lg p-6">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-white font-semibold mb-1">{wish.title}</h3>
                              <div className="text-sm text-gray-400">
                                By: {wish.username} • Fulfilled: {wish.date}
                              </div>
                            </div>
                            <div className="bg-green-400/20 text-green-400 px-3 py-1 h-fit rounded-full text-sm flex items-center">
                              <Check className="w-4 h-4 mr-1" />
                              {wish.amount}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="glass-card rounded-lg p-8 text-center">
                      <div className="w-16 h-16 mx-auto bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
                        <Gift className="w-8 h-8 text-neon-blue" />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-2">No Fulfilled Wishes</h3>
                      <p className="text-gray-400 mb-6">You haven't fulfilled any wishes yet. Browse wishes to help others.</p>
                      <Link to="/fulfill-wish">
                        <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
                          <Gift className="w-4 h-4 mr-2" />
                          Browse Wishes
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Other tabs would be implemented similarly */}
              {activeTab === "history" && (
                <div className="glass-card rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-cyber text-white mb-6">ACTIVITY <span className="text-neon-purple">HISTORY</span></h2>
                  <div className="w-16 h-16 mx-auto bg-neon-purple/20 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-neon-purple" />
                  </div>
                  <p className="text-gray-400">History feature coming soon.</p>
                </div>
              )}
              
              {activeTab === "notifications" && (
                <div className="glass-card rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-cyber text-white mb-6">YOUR <span className="text-neon-purple">NOTIFICATIONS</span></h2>
                  <div className="w-16 h-16 mx-auto bg-neon-purple/20 rounded-full flex items-center justify-center mb-4">
                    <Bell className="w-8 h-8 text-neon-purple" />
                  </div>
                  <p className="text-gray-400">Notifications feature coming soon.</p>
                </div>
              )}
              
              {activeTab === "settings" && (
                <div className="glass-card rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-cyber text-white mb-6">ACCOUNT <span className="text-neon-purple">SETTINGS</span></h2>
                  <div className="w-16 h-16 mx-auto bg-neon-purple/20 rounded-full flex items-center justify-center mb-4">
                    <Settings className="w-8 h-8 text-neon-purple" />
                  </div>
                  <p className="text-gray-400">Settings feature coming soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
