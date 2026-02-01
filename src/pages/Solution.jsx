import React from 'react';

const Solution = () => {
  const solutions = [
    {
      step: "01",
      title: "Immutable Registration",
      desc: "Each medicine batch is recorded on the blockchain at the point of origin, creating a permanent, unalterable birth certificate for every product.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    },
    {
      step: "02",
      title: "Wallet-Based Identity",
      desc: "Pharmacies verify batches using secure, wallet-based digital identities, ensuring only authorized personnel can validate the supply chain.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    },
    {
      step: "03",
      title: "Trustless Verification",
      desc: "Verification is performed via smart contracts. You don't need to 'trust' a manufacturer's word—the math and the ledger prove the truth.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">The MedLedger Protocol</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            How MedLedger Solves the Crisis
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            By shifting from centralized trust to <strong>decentralized proof</strong>, we create a transparent ecosystem where data cannot be faked or hidden.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-0 w-full h-[1px] bg-slate-100 z-0"></div>

          {solutions.map((item, index) => (
            <div key={index} className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200 transition-all group">
              <div className="mb-6 flex justify-between items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <span className="text-4xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">
                  {item.step}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Solution;