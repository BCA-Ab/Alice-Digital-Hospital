import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Emergency Banner */}
      <div className="bg-accent py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-accent-foreground">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Phone className="h-6 w-6" />
              <span className="text-lg font-semibold">24/7 Emergency Hotline: +234-XXX-XXXX-XXX</span>
            </div>
            <Button variant="outline" size="default" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              Call Emergency
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Foundation Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-foreground p-3 rounded-xl">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif">
                    Alice Chikezie Memorial
                  </h3>
                  <p className="text-sm opacity-90">Medical Center Foundation</p>
                </div>
              </div>
              
              <p className="text-sm opacity-90 leading-relaxed">
                "Care with Compassion, Heal with Excellence" - Serving our community 
                with dedication, innovation, and unwavering commitment to your health and well-being.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-3">
                <a href="#home" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Home
                </a>
                <a href="#about" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  About Us
                </a>
                <a href="#services" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Medical Services
                </a>
                <a href="#doctors" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Our Doctors
                </a>
                <a href="#contact" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Medical Services</h4>
              <nav className="space-y-3">
                <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Emergency Care
                </a>
                <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  General Medicine
                </a>
                <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Pediatrics
                </a>
                <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Surgery
                </a>
                <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Laboratory Services
                </a>
                <a href="#" className="block text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors">
                  Pharmacy
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 opacity-75" />
                  <div className="text-sm opacity-90">
                    <p>Umuogele Ntigha</p>
                    <p>Isiala Ngwa North LGA</p>
                    <p>Abia State, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 opacity-75" />
                  <div className="text-sm opacity-90">
                    <p>+234-XXX-XXXX-XXX</p>
                    <p className="text-xs opacity-75">24/7 Emergency Line</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 opacity-75" />
                  <p className="text-sm opacity-90">info@alicechikeziememorial.org</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 mt-1 opacity-75" />
                  <div className="text-sm opacity-90">
                    <p>Mon - Fri: 24/7</p>
                    <p>Emergency: Always Open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm opacity-75 mb-4 md:mb-0">
              © 2024 Alice Chikezie Memorial Medical Center Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm opacity-75">
              <a href="#" className="hover:opacity-100 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:opacity-100 hover:text-secondary transition-colors">
                Patient Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;