import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';
import { motion } from 'framer-motion';

export function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // Get the current theme from localStorage or use system preference
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Set the initial state based on saved preference or system preference
      setIsDarkMode(savedTheme === 'dark' || (savedTheme === null && prefersDark));
      
      // Apply the theme to the HTML element
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    
    // Save user preference
    localStorage.setItem('theme', newTheme);
    
    // Apply the theme change
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {isDarkMode ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-5 w-5 text-amber-300" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: 30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: -30 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-5 w-5 text-indigo-300" />
          </motion.div>
        )}
      </div>
    </Button>
  );
}