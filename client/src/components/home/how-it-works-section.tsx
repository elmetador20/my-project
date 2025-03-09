import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Create Your Profile",
    description: "Set up your location, equipment, and interests to get personalized sky observations and recommendations."
  },
  {
    number: 2,
    title: "Explore the Sky",
    description: "Use our interactive star map to discover celestial objects visible from your location at any time."
  },
  {
    number: 3,
    title: "Connect & Learn",
    description: "Join the community, share your observations, and enhance your knowledge with guided learning paths."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How StarGaze Works</h2>
          <p className="text-lg text-foreground/80">
            A simple yet powerful experience designed for astronomers of all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
