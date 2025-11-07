import { Mail, MapPin, Phone } from "lucide-react";
import mecLogo from "@/assets/mec-logo.png";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Contact Details - Left Side */}
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <a 
              href="tel:+917002080020" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 70020 80020</span>
            </a>
            <a 
              href="mailto:info@madrascollege.ac.in" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@madrascollege.ac.in</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>

          {/* Logo and Title - Right Side */}
          <div className="flex items-center gap-4">
            <img 
              src={mecLogo} 
              alt="MEC Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Madras Engineering College
              </h1>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                Innovation & Excellence in Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
