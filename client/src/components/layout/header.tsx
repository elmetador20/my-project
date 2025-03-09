import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Partnerships", href: "/partnerships" },
  ];
  
  // Added a separate Try Now button that links to the resume upload page

  return (
    <header className="bg-background backdrop-blur-lg bg-opacity-80 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex items-center"
            >
              <Zap className="h-6 w-6 text-primary mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                LeapSkill
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link, i) => (
              <motion.div 
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary font-semibold" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            <Link href="/resume-upload">
              <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white shadow-md">
                Upload Resume
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-800">
              Log In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md rounded-lg border border-gray-800 mt-2 shadow-xl">
            <div className="p-4">
              <nav className="flex flex-col space-y-4">
                {navigationLinks.map((link, i) => (
                  <div 
                    key={link.name}
                    className="transition-all duration-300 ease-in-out"
                    style={{ opacity: 1, transform: `translateY(${i * 5}px)` }}
                  >
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-md flex items-center ${
                        location === link.href 
                          ? "text-primary bg-primary/10 font-semibold" 
                          : "text-foreground/80 hover:bg-gray-800/50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
                <div className="pt-4 flex flex-col space-y-3 border-t border-gray-800 mt-2">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-sm text-gray-400">Theme</span>
                    <ThemeSwitcher />
                  </div>
                  <Link href="/resume-upload" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white shadow-md">
                      Upload Resume
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-800">
                    Log In
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md">
                    Sign Up
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}