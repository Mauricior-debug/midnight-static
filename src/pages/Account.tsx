import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Mail, Shield, Eye, EyeOff, Bell, Lock, CreditCard, Plus, Trash } from "lucide-react";

const Account = () => {
  const [username, setUsername] = useState("NeonDreamer");
  const [email, setEmail] = useState("user@example.com");
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");
  const { toast } = useToast();
  
  // Mock payment methods data
  const [paymentMethods, setPaymentMethods] = useState([
    { id: "pm_1", type: "card", last4: "4242", brand: "visa", expiryMonth: "12", expiryYear: "2025", isDefault: true },
    { id: "pm_2", type: "card", last4: "1234", brand: "mastercard", expiryMonth: "08", expiryYear: "2026", isDefault: false },
  ]);

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved.",
    });
  };
  
  const handleSavePrivacy = () => {
    toast({
      title: "Privacy Settings Updated",
      description: anonymousMode 
        ? "Anonymous mode is now enabled." 
        : "Anonymous mode is now disabled.",
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handleSetDefaultPayment = (id: string) => {
    const updatedMethods = paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    }));
    setPaymentMethods(updatedMethods);
    toast({
      title: "Default Payment Updated",
      description: "Your default payment method has been updated.",
    });
  };
  
  const handleRemovePayment = (id: string) => {
    const updatedMethods = paymentMethods.filter(method => method.id !== id);
    setPaymentMethods(updatedMethods);
    toast({
      title: "Payment Method Removed",
      description: "The payment method has been removed.",
    });
  };

  const getBrandIcon = (brand: string) => {
    // Simple function to return appropriate credit card brand display
    switch(brand.toLowerCase()) {
      case 'visa':
        return <span className="font-bold text-blue-500">VISA</span>;
      case 'mastercard':
        return <span className="font-bold text-orange-500">MC</span>;
      case 'amex':
        return <span className="font-bold text-blue-400">AMEX</span>;
      default:
        return <span className="font-bold text-gray-400">{brand.toUpperCase()}</span>;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <h1 className="text-2xl font-cyber font-bold text-white mb-2">
              ACCOUNT <span className="text-neon-purple">SETTINGS</span>
            </h1>
            <p className="text-gray-400">
              Manage your account preferences and settings
            </p>
          </div>
          
          <div className="glass-card rounded-lg p-1">
            <div className="flex flex-wrap border-b border-white/10">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "profile" 
                    ? "text-neon-purple border-b-2 border-neon-purple" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab("privacy")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "privacy" 
                    ? "text-neon-purple border-b-2 border-neon-purple" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Privacy & Security
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab("notifications")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "notifications" 
                    ? "text-neon-purple border-b-2 border-neon-purple" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab("payment")}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "payment" 
                    ? "text-neon-purple border-b-2 border-neon-purple" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Payment Methods
                </span>
              </button>
            </div>
            
            <div className="p-6">
              {/* Profile Settings */}
              {activeTab === "profile" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Profile Information</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="username" className="text-sm text-gray-300 block">Username</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <Input
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-10 bg-midnight-300 border-white/10 focus:border-neon-purple focus:ring-neon-purple text-white"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-gray-300 block">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-500" />
                          </div>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-midnight-300 border-white/10 focus:border-neon-purple focus:ring-neon-purple text-white"
                          />
                        </div>
                        <p className="text-xs text-gray-500">Your email is used for important notifications and is not visible to other users.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <Button 
                      onClick={handleSaveProfile}
                      className="bg-neon-purple hover:bg-neon-purple/80 text-white"
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Privacy Settings */}
              {activeTab === "privacy" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Privacy Settings</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-medium">Anonymous Mode</h3>
                          <p className="text-sm text-gray-400">Hide your identity when making or fulfilling wishes.</p>
                        </div>
                        <Switch
                          checked={anonymousMode}
                          onCheckedChange={setAnonymousMode}
                          className="data-[state=checked]:bg-neon-purple"
                        />
                      </div>
                      
                      <div className="pt-2 pb-2 border-t border-b border-white/10">
                        <h3 className="text-white font-medium mb-3 mt-3">Action Methods</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="glass-card p-4 rounded-md">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <Eye className="h-5 w-5 text-neon-blue mr-2" />
                                <span className="text-white text-sm">Public Activity</span>
                              </div>
                              <Switch
                                checked={!anonymousMode}
                                onCheckedChange={(checked) => setAnonymousMode(!checked)}
                                className="data-[state=checked]:bg-neon-blue"
                              />
                            </div>
                          </div>
                          
                          <div className="glass-card p-4 rounded-md">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <EyeOff className="h-5 w-5 text-neon-purple mr-2" />
                                <span className="text-white text-sm">Anonymous Activity</span>
                              </div>
                              <Switch
                                checked={anonymousMode}
                                onCheckedChange={setAnonymousMode}
                                className="data-[state=checked]:bg-neon-purple"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <h3 className="text-white font-medium mb-3">Security Options</h3>
                        <div className="glass-card p-4 rounded-md">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <Lock className="h-5 w-5 text-neon-purple mr-2" />
                              <span className="text-white text-sm">Require verification for major actions</span>
                            </div>
                            <Switch
                              checked={true}
                              className="data-[state=checked]:bg-neon-purple"
                            />
                          </div>
                          <p className="text-xs text-gray-500">For additional security, you'll be asked to verify your identity for significant actions like donations over $100 or account changes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <Button 
                      onClick={handleSavePrivacy}
                      className="bg-neon-purple hover:bg-neon-purple/80 text-white"
                    >
                      Save Privacy Settings
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Notification Settings */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Notification Preferences</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-medium">Email Notifications</h3>
                          <p className="text-sm text-gray-400">Receive updates about your wishes and activity via email.</p>
                        </div>
                        <Switch
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                          className="data-[state=checked]:bg-neon-purple"
                        />
                      </div>
                      
                      <div className="pt-4 pb-4 border-t border-b border-white/10">
                        <h3 className="text-white font-medium mb-3 mt-2">Notification Types</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Wish updates</span>
                            <Switch
                              checked={true}
                              className="data-[state=checked]:bg-neon-blue"
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Wish fulfillments</span>
                            <Switch
                              checked={true}
                              className="data-[state=checked]:bg-neon-blue"
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Messages</span>
                            <Switch
                              checked={true}
                              className="data-[state=checked]:bg-neon-blue"
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Platform announcements</span>
                            <Switch
                              checked={false}
                              className="data-[state=checked]:bg-neon-blue"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handleSaveNotifications}
                      className="bg-neon-purple hover:bg-neon-purple/80 text-white"
                    >
                      Save Notification Settings
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Payment Methods Settings */}
              {activeTab === "payment" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Payment Methods</h2>
                    <div className="space-y-4">
                      {paymentMethods.length > 0 ? (
                        <>
                          <div className="grid gap-4">
                            {paymentMethods.map((method) => (
                              <div 
                                key={method.id} 
                                className={`glass-card p-4 rounded-lg border ${
                                  method.isDefault ? 'border-neon-purple shadow-neon' : 'border-white/10'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    <div className="bg-midnight-300 p-2 rounded-md">
                                      {getBrandIcon(method.brand)}
                                    </div>
                                    <div>
                                      <p className="text-white">•••• •••• •••• {method.last4}</p>
                                      <p className="text-xs text-gray-400">Expires {method.expiryMonth}/{method.expiryYear}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {!method.isDefault && (
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        onClick={() => handleSetDefaultPayment(method.id)}
                                        className="text-gray-400 hover:text-neon-purple"
                                      >
                                        Set Default
                                      </Button>
                                    )}
                                    {method.isDefault && (
                                      <span className="text-neon-purple text-xs px-2 py-1 rounded-full bg-neon-purple/10">
                                        Default
                                      </span>
                                    )}
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      onClick={() => handleRemovePayment(method.id)}
                                      className="text-gray-400 hover:text-red-500"
                                    >
                                      <Trash className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="pt-4">
                            <Button 
                              className="bg-midnight-300 hover:bg-midnight-400 border border-white/10 text-white w-full group"
                            >
                              <Plus className="h-4 w-4 mr-2 group-hover:text-neon-purple" />
                              <span className="group-hover:text-neon-purple">Add New Payment Method</span>
                            </Button>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <CreditCard className="h-12 w-12 mx-auto text-gray-500 mb-3" />
                          <h3 className="text-white mb-2">No Payment Methods</h3>
                          <p className="text-gray-400 mb-4">You haven't added any payment methods yet.</p>
                          <Button 
                            className="bg-neon-purple hover:bg-neon-purple/80 text-white"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Payment Method
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="glass-card p-4 rounded-md">
                      <div className="flex items-center">
                        <Lock className="h-5 w-5 text-neon-purple mr-3" />
                        <div>
                          <h3 className="text-white text-sm font-medium">Payment Security</h3>
                          <p className="text-xs text-gray-400">All payment information is securely stored by our payment processor and encrypted to the highest standards.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Account;
