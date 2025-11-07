import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [mobile, setMobile] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      toast({
        title: "Success!",
        description: "We'll contact you soon at " + mobile,
      });
      setMobile("");
    } else {
      toast({
        title: "Invalid Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-6">
        <Card className="max-w-2xl mx-auto p-8 bg-white border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600">
              Enter your mobile number and we'll call you back within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="pl-10 h-12 text-base border-gray-300"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-white whitespace-nowrap"
              >
                Request Callback
              </Button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to receive calls/messages from Madras Engineering College
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
