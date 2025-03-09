import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type HeroSectionProps = {
  waitlistCount: number;
};

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Coming Soon — Join Our Exclusive Waitlist
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight">
              Discover the cosmos with <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">StarGaze</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed">
              The next generation astronomy platform bringing the wonders of the universe to your fingertips. Personalized sky observations, expert guidance, and community insights.
            </p>
            
            {/* CTA Button and Early Access */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <Button size="lg" asChild>
                <a href="#waitlist" className="inline-flex items-center">
                  Join the Waitlist
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <span className="text-sm text-foreground/60">
                <span className="font-medium text-primary">{waitlistCount}+</span> early adopters already signed up
              </span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-4xl">
              <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 shadow-[0_0_20px_5px_rgba(124,58,237,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="StarGaze app interface showing night sky observation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-6 md:-left-12 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute bottom-1/4 -right-6 md:-right-12 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
