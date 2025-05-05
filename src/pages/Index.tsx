
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Star, Shield, Gift, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="glitch-wrapper mb-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold text-white glitch-text" data-text="MIDNIGHT STATIC">
                  MIDNIGHT <span className="text-neon-purple">STATIC</span>
                </h1>
              </div>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                Where <span className="text-neon-blue font-semibold">Wishes</span> Meet <span className="text-neon-purple font-semibold">Reality</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg text-base md:text-lg">
                A mysterious platform where desires are fulfilled. Make your wishes or fulfill others' in this exclusive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/make-wish">
                  <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-6 py-6 font-semibold text-lg">
                    Make a Wish
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/fulfill-wish">
                  <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-6 py-6 font-semibold text-lg">
                    Fulfill Wishes
                    <Gift className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img 
                src="/lovable-uploads/5429acc4-06d1-4a6d-9259-512fa37a0a40.png" 
                alt="Midnight Static Logo" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain filter drop-shadow-[0_0_15px_rgba(189,0,255,0.5)]" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-midnight-100/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white text-center mb-12">
            THE <span className="text-neon-purple">EXPERIENCE</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-shadow duration-300">
              <div className="bg-neon-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Make Your Wish</h3>
              <p className="text-gray-400">
                Create your wish with detailed descriptions. Set it as public or private, add goals and photos.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-shadow duration-300">
              <div className="bg-neon-blue/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Gift className="h-8 w-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fulfill Wishes</h3>
              <p className="text-gray-400">
                Browse wishes from others, donate funds or gift items to help make dreams come true.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-shadow duration-300">
              <div className="bg-neon-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Safe & Secure</h3>
              <p className="text-gray-400">
                Verified users, encrypted payments, and anonymous mode for complete privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-6">
              JOIN THE <span className="text-neon-blue">COMMUNITY</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Register now to make wishes, fulfill dreams, and become part of this exclusive platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-6 text-lg">
                  Register Now
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-midnight-200/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white text-center mb-12">
            SUCCESS <span className="text-neon-purple">STORIES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-neon-purple/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <Heart className="h-5 w-5 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Anonymous</h4>
                  <p className="text-gray-500 text-sm">Wish Fulfilled</p>
                </div>
              </div>
              <p className="text-gray-400">
                "I never thought my dream would come true. Someone fulfilled my wish for a rare collector's item. This platform is incredible."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-neon-blue/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <Gift className="h-5 w-5 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-white font-medium">User #42819</h4>
                  <p className="text-gray-500 text-sm">Wish Creator</p>
                </div>
              </div>
              <p className="text-gray-400">
                "The anonymous nature of the platform made it comfortable to share my wish. Within days, it was completely funded."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-neon-purple/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <Shield className="h-5 w-5 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Verified Member</h4>
                  <p className="text-gray-500 text-sm">Wish Fulfiller</p>
                </div>
              </div>
              <p className="text-gray-400">
                "Fulfilling others' wishes gives me purpose. This platform has created a community where giving is as rewarding as receiving."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
