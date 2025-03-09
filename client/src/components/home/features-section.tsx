import { motion } from "framer-motion";
import { Telescope, CalendarDays, Camera, Users, GraduationCap, Sparkles } from "lucide-react";

const features = [
  {
    title: "Real-time Sky Mapping",
    description: "Personalized star charts based on your location and time, with detailed information on celestial objects.",
    icon: Telescope
  },
  {
    title: "Event Forecasting",
    description: "Never miss a meteor shower, eclipse, or planet conjunction with personalized alerts and viewing guides.",
    icon: CalendarDays
  },
  {
    title: "AI Photography Assistant",
    description: "Optimize your astrophotography with settings suggestions, object identification, and post-processing tips.",
    icon: Camera
  },
  {
    title: "Community Observatory",
    description: "Share discoveries, connect with fellow astronomers, and join virtual star-gazing sessions globally.",
    icon: Users
  },
  {
    title: "Learning Pathways",
    description: "Personalized educational content for all skill levels, from beginner stargazers to advanced astronomers.",
    icon: GraduationCap
  },
  {
    title: "Equipment Integration",
    description: "Seamlessly connect with your telescope, binoculars, and cameras for enhanced viewing and control.",
    icon: Sparkles
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features</h2>
          <p className="text-lg text-foreground/80">
            Everything you need to explore and understand the cosmos, all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-secondary/50 border border-border rounded-lg p-6 transition-all hover:border-primary/50 hover:bg-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="size-12 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
