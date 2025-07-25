import { Heart, Target, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import medicalTeam from "@/assets/medical-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-primary-light/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4 mr-2" />
                About Our Foundation
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground">
                Dedicated to
                <span className="block text-primary">Healthcare Excellence</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Alice Chikezie Memorial Medical Center Foundation stands as a beacon of hope and healing 
                in Umuogele Ntigha, Isiala Ngwa North LGA, Abia State. We are committed to providing 
                world-class healthcare services with compassion, innovation, and unwavering dedication to 
                our community's well-being.
              </p>
            </div>

            {/* Mission, Vision, Values Grid */}
            <div className="grid gap-6">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-xl shrink-0">
                      <Heart className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To deliver compassionate, high-quality healthcare services to our community, 
                        fostering wellness and hope through exceptional medical care and dedicated professionals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary p-3 rounded-xl shrink-0">
                      <Target className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To become a leading healthcare institution in Nigeria, renowned for innovative care, 
                        cutting-edge technology, and unwavering commitment to patient well-being.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent p-3 rounded-xl shrink-0">
                      <Award className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Our Motto</h3>
                      <p className="text-muted-foreground font-medium">
                        "Care with Compassion, Heal with Excellence"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={medicalTeam}
                  alt="Our Medical Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <Card className="absolute -top-6 -right-6 bg-background p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">Excellence</div>
                  <div className="text-sm text-muted-foreground">in Healthcare</div>
                </div>
              </Card>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Community Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Serving our local community with dedication
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-secondary/10 p-4 rounded-xl w-fit mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Compassionate Care</h4>
                <p className="text-sm text-muted-foreground">
                  Every patient treated with love and respect
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;