import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import cseIcon from "@/assets/courses/cse-icon.png";
import itIcon from "@/assets/courses/it-icon.png";
import aidsIcon from "@/assets/courses/aids-icon.png";
import aimlIcon from "@/assets/courses/aiml-icon.png";
import csbsIcon from "@/assets/courses/csbs-icon.png";

const courses = [
  {
    name: "BE - Computer Science & Engineering",
    code: "BE-CSE",
    icon: cseIcon,
    description: "Master the fundamentals of computing, programming, and software development.",
  },
  {
    name: "BTech - Information Technology",
    code: "BTech-IT",
    icon: itIcon,
    description: "Explore networks, databases, and enterprise technology solutions.",
  },
  {
    name: "BTech - Artificial Intelligence & Data Science",
    code: "BTech-AIDS",
    icon: aidsIcon,
    description: "Learn AI algorithms, machine learning, and big data analytics.",
  },
  {
    name: "BTech - Artificial Intelligence & Machine Learning",
    code: "BTech-AIML",
    icon: aimlIcon,
    description: "Deep dive into ML models, neural networks, and intelligent systems.",
  },
  {
    name: "BTech - Computer Science & Business Systems",
    code: "BTech-CSBS",
    icon: csbsIcon,
    description: "Combine technical skills with business acumen and management.",
  },
];

const Courses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our cutting-edge technology programs designed for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.code} className="p-6 hover:shadow-lg transition-shadow bg-white border-gray-200">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-4">
                  <img 
                    src={course.icon} 
                    alt={course.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {course.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    {course.code}
                  </span>
                  <p className="text-gray-600 text-sm">
                    {course.description}
                  </p>
                </div>
                <Button 
                  className="w-full gap-2 bg-primary hover:bg-primary/90 text-white"
                  size="sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  Let's Chat
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
