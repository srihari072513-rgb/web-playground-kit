import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const additionalCourses = [
  "Full Stack Web Development",
  "Mobile App Development (iOS & Android)",
  "Cloud Computing (AWS, Azure, GCP)",
  "Cybersecurity & Ethical Hacking",
  "DevOps & CI/CD",
  "Blockchain Technology",
  "Internet of Things (IoT)",
  "Digital Marketing & SEO",
  "UI/UX Design & Figma",
  "Python for Data Analytics",
];

const AdditionalCourses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Additional Learning Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your skills with our industry-relevant certification courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {additionalCourses.map((course, index) => (
            <Card 
              key={index} 
              className="p-4 hover:shadow-md transition-shadow bg-gradient-to-br from-gray-50 to-white border-gray-200"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  {course}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalCourses;
