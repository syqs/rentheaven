
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ConnectWallet } from "@/components/ConnectWallet";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-display text-2xl font-bold gradient-text">RentHaven</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/70 hover:text-foreground transition">
            Home
          </Link>
          <Link to="/listings" className="text-foreground/70 hover:text-foreground transition">
            Properties
          </Link>
          <Link to="/how-it-works" className="text-foreground/70 hover:text-foreground transition">
            How it Works
          </Link>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <ConnectWallet />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-2 py-1 rounded hover:bg-accent/10 transition" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/listings" 
              className="px-2 py-1 rounded hover:bg-accent/10 transition" 
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/how-it-works" 
              className="px-2 py-1 rounded hover:bg-accent/10 transition" 
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <div className="pt-2">
              <ConnectWallet />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
