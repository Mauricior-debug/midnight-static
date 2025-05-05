
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Home, UserCheck, Gift, LogIn, Users, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-midnight/90 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/9d817247-fe7d-4fdc-a0c1-111aa0895334.png" 
              alt="Midnight Static" 
              className="h-10 w-10 rounded-full" 
            />
            <span className="font-cyber text-lg font-semibold text-white glitch-text" data-text="MIDNIGHT STATIC">
              MIDNIGHT STATIC
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-neon-purple transition-colors px-3 py-2 text-sm font-medium">
              <span className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </span>
            </Link>
            
            <Link to="/about-us" className="text-gray-300 hover:text-neon-purple transition-colors px-3 py-2 text-sm font-medium">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                About Us
              </span>
            </Link>
            
            <Link to="/fulfill-wish" className="text-gray-300 hover:text-neon-purple transition-colors px-3 py-2 text-sm font-medium">
              <span className="flex items-center gap-1">
                <Gift className="h-4 w-4" />
                Fulfill Wishes
              </span>
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-300 hover:text-neon-purple transition-colors px-3 py-2 text-sm font-medium">
                  <span className="flex items-center gap-1">
                    <UserCheck className="h-4 w-4" />
                    Dashboard
                  </span>
                </Link>
                <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-300 hover:text-neon-purple hover:bg-neon-purple/10">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
                    <LogIn className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-300 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-midnight/95 backdrop-blur-md border-neon-purple/50 mt-2 mr-2" align="end">
                <DropdownMenuItem asChild className="focus:bg-neon-purple/20 focus:text-neon-purple">
                  <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-neon-purple w-full py-2">
                    <Home className="h-4 w-4" /> Home
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="focus:bg-neon-purple/20 focus:text-neon-purple">
                  <Link to="/about-us" className="flex items-center gap-2 text-gray-300 hover:text-neon-purple w-full py-2">
                    <Users className="h-4 w-4" /> About Us
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="focus:bg-neon-purple/20 focus:text-neon-purple">
                  <Link to="/fulfill-wish" className="flex items-center gap-2 text-gray-300 hover:text-neon-purple w-full py-2">
                    <Gift className="h-4 w-4" /> Fulfill Wishes
                  </Link>
                </DropdownMenuItem>
                
                {isAuthenticated ? (
                  <>
                    <DropdownMenuItem asChild className="focus:bg-neon-purple/20 focus:text-neon-purple">
                      <Link to="/dashboard" className="flex items-center gap-2 text-gray-300 hover:text-neon-purple w-full py-2">
                        <UserCheck className="h-4 w-4" /> Dashboard
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild className="focus:bg-neon-purple/20 focus:text-neon-purple">
                      <button className="flex items-center gap-2 text-neon-purple hover:text-neon-purple/80 w-full py-2">
                        Logout
                      </button>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="focus:bg-neon-purple/20 focus:text-neon-purple">
                      <Link to="/login" className="flex items-center gap-2 text-gray-300 hover:text-neon-purple w-full py-2">
                        Login
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild className="focus:bg-neon-purple/20 focus:text-neon-purple">
                      <Link to="/register" className="flex items-center gap-2 text-neon-purple hover:text-neon-purple/80 w-full py-2">
                        <LogIn className="h-4 w-4" /> Register
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
