import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the eligibility criteria for admission?",
    answer: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with minimum 50% aggregate marks. Admission is based on TNEA counselling."
  },
  {
    question: "What is the fee structure?",
    answer: "The annual tuition fee varies by program. Please contact our admissions office at +91 94443 08959 for detailed fee structure and scholarship opportunities."
  },
  {
    question: "Are hostel facilities available?",
    answer: "Yes, we provide separate hostel facilities for boys and girls with modern amenities, security, and nutritious mess facilities."
  },
  {
    question: "What is the placement record?",
    answer: "We have a consistent 95%+ placement record with top recruiters like TCS, Infosys, Wipro, Google, Microsoft, and Amazon offering competitive packages."
  },
  {
    question: "Do you provide internship opportunities?",
    answer: "Yes, we offer paid internship opportunities with leading tech companies as part of our curriculum and industry collaboration programs."
  },
  {
    question: "What additional certifications are available?",
    answer: "Students can pursue certifications in Full Stack Development, Cloud Computing, Data Science, Cybersecurity, and more through our industry partners."
  },
  {
    question: "Is there support for entrepreneurship?",
    answer: "Yes, we have a dedicated incubation center with mentorship programs, funding support, and resources to help students launch their startups."
  },
  {
    question: "What is the student-faculty ratio?",
    answer: "We maintain an optimal student-faculty ratio of 15:1 to ensure personalized attention and quality education for every student."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about admissions, programs, and facilities
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 bg-gray-50"
              >
                <AccordionTrigger className="text-left font-semibold text-black hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
