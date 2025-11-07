import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import mecLogo from "@/assets/mec-logo-purple.png";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen">
      {/* Top Bar with Logo and Contact */}
      <div className="container mx-auto px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and College Name - Left */}
          <div className="flex items-center gap-3">
            <img 
              src={mecLogo} 
              alt="MEC Logo" 
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
            />
            <h1 className="text-lg md:text-xl font-bold text-black">
              Madras Engineering College
            </h1>
          </div>
          
          {/* Contact Details - Right */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
            <a 
              href="tel:+919444308959" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 94443 08959</span>
            </a>
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-md">
              <span className="font-semibold text-primary">Counselling Code: 1203</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Tagline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Your Tech Journey Begins{" "}
            <span className="text-primary">@ Madras Engineering College</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            India's 1st Engineering College Specialising in IT, Computer Science, 
            Data Science, Artificial Intelligence, Machine Learning, Cybersecurity 
            & Business Systems.
          </p>
          
          {/* CTA Buttons and Features */}
          <div className="flex flex-col items-center gap-6 pt-8">
            {/* Primary CTA */}
            <Button size="lg" className="text-base px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-white">
              Get in Touch
            </Button>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl pt-4">
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm">
                <span className="text-sm font-medium text-gray-800">💼 Paid Internship Opportunities</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm">
                <span className="text-sm font-medium text-gray-800">🔬 Modern Lab Facilities</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm">
                <span className="text-sm font-medium text-gray-800">🎓 Industry-Ready Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
