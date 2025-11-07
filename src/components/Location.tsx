import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Location = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Visit Our Campus
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Chennai, Tamil Nadu
            </p>
          </div>

          <Card className="overflow-hidden border-gray-200">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5820267447845!2d80.2467!3d13.0115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzQxLjQiTiA4MMKwMTQnNDguMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madras Engineering College Location"
              />
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Madras Engineering College
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Chennai, Tamil Nadu - 600001
                  </p>
                  <p className="text-sm text-gray-500">
                    Contact: +91 94443 08959 | Counselling Code: 1203
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
