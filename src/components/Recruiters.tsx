const recruiters = [
  "TCS", "Infosys", "Wipro", "Cognizant", "Accenture",
  "Google", "Microsoft", "Amazon", "IBM", "Oracle",
  "Zoho", "Freshworks", "PayPal", "HCL", "Tech Mahindra"
];

const Recruiters = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
          Our Top Recruiters
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...recruiters, ...recruiters].map((company, index) => (
              <div
                key={index}
                className="mx-8 inline-flex items-center justify-center px-6 py-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Recruiters;
