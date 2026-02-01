import React from 'react';

const Problem = () => {
  const problems = [
    {
      title: "Supply Chain Gaps",
      desc: "Counterfeit medicines enter global supply chains through complex distributor manipulation and opaque logistics.",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Verification Void",
      desc: "Pharmacies and clinics lack independent, real-time tools to verify drug authenticity before they reach the patient.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Tamperable Data",
      desc: "Centralized databases are vulnerable to hacking and administrative fraud, allowing fake records to appear legitimate.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    }
  ];

  return (
    <section className="w-full min-h-screen bg-slate-900 flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Content */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800" 
                alt="Medical Research" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium italic">
                  "Over 10% of medicines in low and middle-income countries are estimated to be substandard or falsified."
                </p>
                <p className="text-slate-400 text-sm mt-2">— World Health Organization</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-3"> The Challenge </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                The Counterfeit Drug <span className="text-slate-400">Crisis</span>
              </h1>
            </div>

            <div className="space-y-6">
              {problems.map((item, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;
