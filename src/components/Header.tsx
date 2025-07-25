import { useState } from "react";
import { Menu, X, Heart, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Emergency: +234-XXX-XXXX-XXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Umuogele Ntigha, Isiala Ngwa North LGA, Abia State</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>24/7 Emergency Services Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Name */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-serif text-primary leading-tight">
                  Alice Chikezie Memorial
                </h1>
                <p className="text-sm text-secondary font-medium">
                  Medical Center Foundation
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#doctors" className="text-foreground hover:text-primary transition-colors font-medium">
                Our Doctors
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <Button variant="medical" size="default" className="ml-4">
                Book Appointment
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-3">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={toggleMenu}
                >
                  Services
                </a>
                <a
                  href="#doctors"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={toggleMenu}
                >
                  Our Doctors
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
                <Button variant="medical" size="default" className="mt-4 w-full">
                  Book Appointment
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;