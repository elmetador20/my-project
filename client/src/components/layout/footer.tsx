import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">LeapSkill</h3>
          <p className="text-gray-600 max-w-md">
            Bridging the gap between education and industry with AI-powered career guidance and skill analysis.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/features" className="text-gray-600 hover:text-primary">Features</Link>
            </li>
            <li>
              <Link href="/pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
            </li>
            <li>
              <Link href="/partnerships" className="text-gray-600 hover:text-primary">Partnerships</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-primary">Contact Us</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-primary">FAQ</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-primary">Help Center</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-gray-600 text-sm">
          © 2025 LeapSkill. All rights reserved.
        </p>
      </div>
    </footer>
  );
}