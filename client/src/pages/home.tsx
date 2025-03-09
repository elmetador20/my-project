import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import FaqSection from "@/components/home/faq-section";
import WaitlistSection from "@/components/home/waitlist-section";
import Footer from "@/components/home/footer";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // Fetch waitlist count
  const { data: waitlistData } = useQuery({
    queryKey: ['/api/waitlist/count'],
    refetchOnWindowFocus: false,
  });
  
  const waitlistCount = waitlistData?.count || 230;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <HeroSection waitlistCount={waitlistCount} />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
