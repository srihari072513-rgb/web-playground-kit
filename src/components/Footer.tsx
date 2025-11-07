import { Phone, Mail, MapPin } from "lucide-react";
import mecLogo from "@/assets/mec-logo-purple.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={mecLogo} alt="MEC Logo" className="h-12 w-12" />
              <h3 className="text-xl font-bold">Madras Engineering College</h3>
            </div>
            <p className="text-gray-400 text-sm">
              India's premier institution for technology education, shaping future engineers and innovators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#admissions" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#placements" className="hover:text-white transition-colors">Placements</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <a href="tel:+919444308959" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 94443 08959</span>
              </a>
              <a href="mailto:info@madrascollege.ac.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@madrascollege.ac.in</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Chennai, Tamil Nadu - 600001</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs">
                  <span className="font-semibold text-primary">Counselling Code:</span> 1203
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Madras Engineering College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
