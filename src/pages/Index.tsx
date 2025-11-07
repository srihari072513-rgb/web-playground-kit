import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Recruiters from "@/components/Recruiters";
import Vision from "@/components/Vision";
import AdditionalCourses from "@/components/AdditionalCourses";
import Reasons from "@/components/Reasons";
import ContactForm from "@/components/ContactForm";
import Newspapers from "@/components/Newspapers";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Courses />
      <Recruiters />
      <Vision />
      <AdditionalCourses />
      <Reasons />
      <ContactForm />
      <Newspapers />
      <FAQ />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
