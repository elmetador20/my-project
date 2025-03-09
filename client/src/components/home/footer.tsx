import TelescopeIcon from "@/components/ui/telescope-icon";
import { Twitter, Instagram, Github } from "lucide-react";

const footerLinks = {
  features: [
    { name: "Sky Mapping", href: "#" },
    { name: "Event Forecasting", href: "#" },
    { name: "AI Photography", href: "#" },
    { name: "Community", href: "#" },
    { name: "Learning", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API", href: "#" },
    { name: "Community Forums", href: "#" },
    { name: "Support", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "GitHub", href: "#", icon: Github },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="size-10 rounded-md bg-primary/20 flex items-center justify-center">
                <TelescopeIcon className="size-6" />
              </div>
              <span className="text-xl font-bold">StarGaze</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Bringing the cosmos closer to you.
              Explore the night sky like never before.
            </p>
            <div className="flex space-x-4 mt-6">
              {footerLinks.social.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {footerLinks.features.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} StarGaze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
