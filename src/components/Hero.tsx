import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-background min-h-screen">
      {/* Top Bar with College Name and Contact */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* College Name - Left */}
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Madras Engineering College
          </h1>
          
          {/* Contact Details - Right */}
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a 
              href="tel:+917002080020" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 70020 80020</span>
            </a>
            <a 
              href="mailto:info@madrascollege.ac.in" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@madrascollege.ac.in</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Tagline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Your Tech Journey Begins{" "}
            <span className="text-primary">@ Madras Engineering College</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            India's 1st Engineering College Specialising in IT, Computer Science, 
            Data Science, Artificial Intelligence, Machine Learning, Cybersecurity 
            & Business Systems.
          </p>
          
          {/* CTA Buttons and Features */}
          <div className="flex flex-col items-center gap-6 pt-8">
            {/* Primary CTA */}
            <Button size="lg" className="text-base px-8 py-6 h-auto">
              Get in Touch
            </Button>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl pt-4">
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-card text-card-foreground">
                <span className="text-sm font-medium">💼 Paid Internship Opportunities</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-card text-card-foreground">
                <span className="text-sm font-medium">🔬 Modern Lab Facilities</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-card text-card-foreground">
                <span className="text-sm font-medium">🎓 Industry-Ready Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
