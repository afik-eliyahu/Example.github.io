
import { useState, useEffect } from "react";
import { Heart, Menu, X, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contractAddress = "0xVCRY8uWd7EBqsmpSWaRdf_l-8R8-XHwh3gsNKhy";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied to clipboard!");
  };

  const handleGetStarted = () => {
    toast.custom((t) => (
      <div className="bg-primary-foreground/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-accent/30 transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Get Started with Valencry</h3>
            <button onClick={() => toast.dismiss(t)} className="text-white/60 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-2">
            <p className="text-white/80">Send VCRY to this address:</p>
            <div className="flex items-center space-x-2 bg-black/20 p-3 rounded-lg">
              <code className="text-sm text-white/90 flex-1 font-mono">{contractAddress}</code>
              <button 
                onClick={copyToClipboard}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Copy className="h-4 w-4 text-accent" />
              </button>
            </div>
          </div>
          
          <a 
            href="https://phantom.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-accent text-white p-3 rounded-lg hover:bg-accent/90 transition-all duration-200"
          >
            <img 
              src="/lovable-uploads/5c167882-4716-4e51-9a7d-45315a06e668.png"
              alt="Phantom"
              className="w-6 h-6"
            />
            <span>Connect with Phantom Wallet</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    ), {
      duration: 10000,
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Valencry</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-foreground hover:text-accent transition-colors"
            >
              Whitepaper
            </Link>
            <button 
              onClick={handleGetStarted}
              className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/about"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Whitepaper
              </Link>
              <button 
                onClick={() => {
                  handleGetStarted();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

