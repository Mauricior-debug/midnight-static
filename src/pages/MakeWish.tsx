
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Upload, ArrowLeft } from "lucide-react";

const MakeWish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [goal, setGoal] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!title || !description || !type) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Wish Creation Failed",
        description: "This is a demo. Implementation pending.",
        variant: "destructive",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/dashboard" className="inline-flex items-center text-gray-400 hover:text-neon-purple mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <div className="glass-card rounded-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-neon-purple/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-neon-purple" />
                </div>
                <h1 className="text-2xl font-cyber font-bold text-white mb-2">
                  MAKE A <span className="text-neon-purple">WISH</span>
                </h1>
                <p className="text-gray-400">
                  Create your wish and let the community help make it come true.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm text-gray-300 block">Wish Title <span className="text-neon-purple">*</span></label>
                  <Input
                    id="title"
                    placeholder="Enter a title for your wish"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-midnight-300 border-white/10 focus:border-neon-purple focus:ring-neon-purple text-white"
                    maxLength={100}
                  />
                  <p className="text-xs text-gray-500 text-right">{title.length}/100</p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm text-gray-300 block">Wish Type <span className="text-neon-purple">*</span></label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger className="bg-midnight-300 border-white/10 focus:border-neon-purple focus:ring-neon-purple text-white">
                      <SelectValue placeholder="Select wish type" />
                    </SelectTrigger>
                    <SelectContent className="bg-midnight-200 border-white/10">
                      <SelectItem value="material">Material Item</SelectItem>
                      <SelectItem value="financial">Financial Support</SelectItem>
                      <SelectItem value="service">Service or Help</SelectItem>
                      <SelectItem value="experience">Experience or Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm text-gray-300 block">Description <span className="text-neon-purple">*</span></label>
                  <Textarea
                    id="description"
                    placeholder="Describe your wish in detail..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-midnight-300 border-white/10 focus:border-neon-purple focus:ring-neon-purple text-white min-h-[120px]"
                    maxLength={1000}
                  />
                  <p className="text-xs text-gray-500 text-right">{description.length}/1000</p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="goal" className="text-sm text-gray-300 block">Goal Amount (Optional)</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                    <Input
                      id="goal"
                      type="number"
                      placeholder="0.00"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="pl-7 bg-midnight-300 border-white/10 focus:border-neon-purple focus:ring-neon-purple text-white"
                    />
                  </div>
                  <p className="text-xs text-gray-500">Leave blank if not applicable or you prefer not to specify.</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 block">Upload Image (Optional)</label>
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-6 text-center hover:border-neon-purple/50 transition-colors">
                    <Upload className="w-10 h-10 text-gray-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-400 mb-1">Drag and drop an image or click to browse</p>
                    <p className="text-xs text-gray-500">Max file size: 5MB - PNG, JPG, GIF</p>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*" 
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="mt-4 border-gray-700 text-gray-400 hover:bg-gray-800"
                    >
                      Select File
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="private-mode"
                      checked={isPrivate}
                      onCheckedChange={setIsPrivate}
                      className="data-[state=checked]:bg-neon-purple"
                    />
                    <label htmlFor="private-mode" className="text-sm text-gray-300">
                      Private Wish
                    </label>
                  </div>
                  <div className="text-xs text-gray-500">
                    Private wishes are only visible to you and administrators.
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Submit Your Wish
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MakeWish;
