
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, KeyRound, LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [step, setStep] = useState(1); // 1: Email entry, 2: Code verification
  const { toast } = useToast();

  const handleSendCode = () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSendingCode(true);
    
    // Simulate API call to send verification code
    setTimeout(() => {
      setIsSendingCode(false);
      setStep(2);
      toast({
        title: "Code Sent",
        description: "A verification code has been sent to your email",
      });
    }, 1500);
  };

  const handleVerifyCode = () => {
    if (!code) {
      toast({
        title: "Error",
        description: "Please enter the verification code",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate API call to verify code
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "Verification Failed",
        description: "This is a demo. Implementation pending.",
        variant: "destructive",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="glass-card max-w-md w-full p-8 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-cyber font-bold text-white mb-2">
                <span className="text-neon-purple">LOGIN</span> TO MIDNIGHT STATIC
              </h1>
              <p className="text-gray-400">
                {step === 1 ? "Enter your email to receive a login code" : "Enter the verification code sent to your email"}
              </p>
            </div>
            
            {step === 1 ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-300 block">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-midnight-300 border-white/10 focus:border-neon-purple focus:ring-neon-purple text-white"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleSendCode} 
                  disabled={isSendingCode} 
                  className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white font-medium py-2"
                >
                  {isSendingCode ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Code
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Send Login Code
                    </div>
                  )}
                </Button>
                
                <div className="text-center text-sm text-gray-500">
                  <p>Don't have an account? <Link to="/register" className="text-neon-purple hover:underline">Register</Link></p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="code" className="text-sm text-gray-300 block">Verification Code</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <KeyRound className="h-5 w-5 text-gray-500" />
                    </div>
                    <Input
                      id="code"
                      type="text"
                      placeholder="Enter code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="pl-10 bg-midnight-300 border-white/10 focus:border-neon-purple focus:ring-neon-purple text-white"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleVerifyCode} 
                  disabled={isVerifying} 
                  className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white font-medium py-2"
                >
                  {isVerifying ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <LogIn className="h-5 w-5" />
                      Verify & Login
                    </div>
                  )}
                </Button>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <button 
                    onClick={() => setStep(1)} 
                    className="text-neon-purple hover:underline"
                  >
                    Change Email
                  </button>
                  <button 
                    onClick={handleSendCode} 
                    className="text-neon-purple hover:underline"
                  >
                    Resend Code
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
