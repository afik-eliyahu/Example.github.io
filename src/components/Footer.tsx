
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold">Valencry</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-foreground hover:text-accent transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-foreground hover:text-accent transition-colors"
            >
              Discord
            </a>
            <a
              href="#"
              className="text-foreground hover:text-accent transition-colors"
            >
              Medium
            </a>
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © 2024 Valencry. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
