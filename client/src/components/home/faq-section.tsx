import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will StarGaze launch?",
    answer: "We're planning to launch the beta version in Q3 2023. Users on our waitlist will receive early access invitations in order of registration. The full public release is scheduled for Q4 2023."
  },
  {
    question: "Will StarGaze be available on mobile devices?",
    answer: "Yes, StarGaze will be available as both a progressive web app and native applications for iOS and Android devices. Our mobile versions will include all desktop features plus some mobile-specific capabilities like AR sky viewing."
  },
  {
    question: "What equipment does StarGaze work with?",
    answer: "StarGaze is compatible with most modern telescopes from major manufacturers including Celestron, Meade, Orion, Sky-Watcher, and more. We also support a wide range of DSLR cameras, dedicated astronomy cameras, and even smartphone setups for beginners."
  },
  {
    question: "Is StarGaze suitable for beginners?",
    answer: "Absolutely! StarGaze is designed for users at all levels. Our beginner-friendly interface and guided learning pathways make it easy to start your astronomy journey. You don't need any equipment to begin using our sky mapping and educational features."
  },
  {
    question: "What is the pricing model for StarGaze?",
    answer: "StarGaze will offer a free tier with access to basic features and a premium subscription for advanced capabilities. Early waitlist members will receive special discounts and extended free trials. Full pricing details will be announced closer to launch."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/80">
            Have questions about StarGaze? Find answers to common inquiries below.
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-2">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
