import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Vision = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-700">
              Shaping the future of technology education in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border-gray-200">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Vision</h3>
                <p className="text-gray-600 text-sm">
                  To be a globally recognized institution fostering innovation, 
                  excellence, and leadership in engineering and technology education.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Mission</h3>
                <p className="text-gray-600 text-sm">
                  To provide quality education with state-of-the-art infrastructure, 
                  industry collaboration, and holistic development of students.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black">Values</h3>
                <p className="text-gray-600 text-sm">
                  Innovation, Integrity, Excellence, and Student-Centric Learning 
                  are the core values that drive our institution forward.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
