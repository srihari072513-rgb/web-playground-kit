const newspapers = [
  "The Hindu",
  "Times of India",
  "Indian Express",
  "Deccan Chronicle",
  "Business Standard",
  "Economic Times",
  "DNA India",
  "Hindustan Times",
  "The Telegraph",
  "Mint"
];

const Newspapers = () => {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
          Featured In
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...newspapers, ...newspapers].map((paper, index) => (
              <div
                key={index}
                className="mx-6 inline-flex items-center justify-center px-5 py-2 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <span className="text-base font-medium text-gray-700">
                  {paper}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Newspapers;
