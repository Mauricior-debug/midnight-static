
import { Shield, Users, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-midnight">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold text-white glitch-text mb-6" data-text="ABOUT US">
              ABOUT <span className="text-neon-blue">US</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8">
              The story behind Midnight Static, where wishes are fulfilled in the shadows.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/dde933ce-dae9-46c6-a5f1-6d1412500ee1.png" 
                alt="Midnight Static Logo" 
                className="w-full max-w-md mx-auto rounded-lg shadow-[0_0_25px_rgba(0,156,255,0.3)]" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-cyber font-bold text-white mb-6">
                OUR <span className="text-neon-purple">VISION</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Midnight Static emerged from a simple yet powerful idea: create a space where dreams and desires could be fulfilled with privacy, security, and elegance. In the shadows of the digital realm, we built a platform that connects wish-makers with anonymous benefactors.
              </p>
              <p className="text-gray-400 mb-6">
                Our mission is to facilitate the fulfillment of wishes while maintaining the highest standards of discretion and security. Whether it's material items, financial support, or services, Midnight Static enables dreams to become reality.
              </p>
              <div className="flex items-center text-neon-blue font-cyber text-xl">
                <span>Make a Wish</span>
                <span className="px-3">|</span>
                <span>Fulfill One</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-midnight-100/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white text-center mb-12">
            OUR <span className="text-neon-purple">VALUES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-shadow duration-300">
              <div className="bg-neon-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy & Security</h3>
              <p className="text-gray-400">
                We prioritize the privacy and security of our users above all else. With advanced encryption and anonymity features, your information remains protected.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-shadow duration-300">
              <div className="bg-neon-blue/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-gray-400">
                While maintaining anonymity, we foster a community of like-minded individuals who believe in the power of granting wishes and making dreams come true.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-shadow duration-300">
              <div className="bg-neon-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fulfillment</h3>
              <p className="text-gray-400">
                We believe in the transformative power of fulfilled wishes. Our platform exists to turn dreams into reality, one wish at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white text-center mb-12">
            THE <span className="text-neon-blue">TEAM</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-purple to-neon-blue rounded-full mb-4 flex items-center justify-center">
                <span className="text-3xl font-cyber text-white">MS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Founder</h3>
              <p className="text-gray-500">Anonymous</p>
              <p className="text-gray-400 mt-4 max-w-xs mx-auto">
                The mysterious creator behind Midnight Static, with a passion for privacy and making wishes come true.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-purple to-neon-blue rounded-full mb-4 flex items-center justify-center">
                <span className="text-3xl font-cyber text-white">NT</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Chief Security Officer</h3>
              <p className="text-gray-500">Anonymous</p>
              <p className="text-gray-400 mt-4 max-w-xs mx-auto">
                A cybersecurity expert ensuring that all wishes and transactions remain private and secure.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-purple to-neon-blue rounded-full mb-4 flex items-center justify-center">
                <span className="text-3xl font-cyber text-white">DF</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Head of Fulfillment</h3>
              <p className="text-gray-500">Anonymous</p>
              <p className="text-gray-400 mt-4 max-w-xs mx-auto">
                Dedicated to ensuring every wish is properly matched with the right fulfiller.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-midnight-200/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white text-center mb-12">
            COMMON <span className="text-neon-purple">QUESTIONS</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">How does Midnight Static work?</h3>
              <p className="text-gray-400">
                Users can create wishes specifying what they desire. Others can browse these wishes and choose to fulfill them, either by donating funds or providing the requested items or services.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Is my privacy protected?</h3>
              <p className="text-gray-400">
                Absolutely. We employ advanced encryption and offer anonymous mode for those who wish to keep their identity private. All transactions are secured and your data is never shared.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods are accepted?</h3>
              <p className="text-gray-400">
                We accept both traditional payment methods (credit/debit cards) and various cryptocurrencies to ensure flexibility and privacy for our users.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">How do I know my wish will be fulfilled?</h3>
              <p className="text-gray-400">
                While we can't guarantee every wish will be fulfilled, our platform connects you with a community of generous individuals. Our escrow system ensures that funds are only released when wishes are properly fulfilled.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-6">
              CONTACT <span className="text-neon-blue">US</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions or need assistance? Our team is here to help.
            </p>
            <p className="text-neon-blue text-xl font-cyber mb-4">midnightstatic.app</p>
            <p className="text-gray-400">
              For security reasons, all communications are handled through our encrypted messaging system.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
