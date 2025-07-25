import { ArrowRight, Heart, Users, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-medical-center.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-light via-background to-secondary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-accent-light text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4 mr-2" />
                Your Health, Our Priority
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight">
                Alice Chikezie
                <span className="block text-primary">Memorial</span>
                <span className="block text-secondary text-4xl lg:text-5xl">
                  Medical Center Foundation
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <strong className="text-primary font-semibold">Care with Compassion, Heal with Excellence</strong>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Delivering compassionate, high-quality healthcare services to our community in 
                  Umuogele Ntigha, Isiala Ngwa North LGA, Abia State, Nigeria.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="hero" className="group">
                Book Appointment
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="hero" className="group">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Call
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">100+</div>
                <div className="text-sm text-muted-foreground">Patients Daily</div>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Years Service</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroImage}
                alt="Alice Chikezie Memorial Medical Center"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-background p-6 shadow-xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-xl">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">Excellence in Care</div>
                  <div className="text-sm text-muted-foreground">Certified Medical Professionals</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;