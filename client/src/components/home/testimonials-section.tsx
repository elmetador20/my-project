import { motion } from "framer-motion";
import { Stars } from "@/components/ui/stars";

const testimonials = [
  {
    quote: "StarGaze completely changed my astronomy hobby. The personalized alerts for viewing conditions saved me countless nights of disappointment, and the community features connected me with fellow enthusiasts in my area.",
    author: "Alex Morgan",
    title: "Amateur Astronomer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80"
  },
  {
    quote: "As an educator, I've been using StarGaze in my classroom. The learning pathways are perfect for students of different levels, and the visualization tools make complex concepts easy to understand.",
    author: "Sarah Jensen",
    title: "Science Teacher",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80"
  },
  {
    quote: "The equipment integration features are game-changing. Being able to control my telescope directly from the app while having real-time sky data has made my imaging sessions much more productive.",
    author: "Michael Chen",
    title: "Astrophotographer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Beta Users Say</h2>
          <p className="text-lg text-foreground/80">
            Hear from our early access users who've already experienced StarGaze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-secondary/50 border border-border rounded-lg p-6 transition-all hover:border-primary/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Stars />
              </div>

              <blockquote className="mb-4 text-foreground/90 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center mt-4">
                <div className="size-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.author} avatar`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
