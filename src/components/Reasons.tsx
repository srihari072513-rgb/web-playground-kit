import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    title: "Industry-Expert Faculty",
    description: "Learn from professors with real-world industry experience and cutting-edge research."
  },
  {
    title: "100% Placement Support",
    description: "Dedicated placement cell with strong ties to top tech companies and startups."
  },
  {
    title: "State-of-the-Art Labs",
    description: "Access to modern computing labs, AI/ML workstations, and innovation centers."
  },
  {
    title: "Paid Internships",
    description: "Guaranteed internship opportunities with leading tech companies during your studies."
  },
  {
    title: "Industry Collaborations",
    description: "Partnerships with Google, Microsoft, AWS, and other tech giants for workshops."
  },
  {
    title: "Innovation & Research",
    description: "Dedicated research centers for AI, IoT, Blockchain, and emerging technologies."
  },
  {
    title: "Entrepreneurship Support",
    description: "Incubation center and mentorship programs to launch your own tech startup."
  },
  {
    title: "Global Exposure",
    description: "International collaborations, exchange programs, and global certification opportunities."
  }
];

const Reasons = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Choose Madras Engineering College?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the premier choice for tech education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow bg-white border-gray-200"
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
