import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-300 py-12 border-t border-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
          
          {/* Brand & Stack Identity */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>M</span>
              </div>
              <span className='text-xl font-bold text-white tracking-tight'>
                Med<span className='text-blue-500'>Ledger</span>
              </span>
            </div>
            <p className='text-sm text-slate-400 max-w-xs'>
              A high-integrity hackathon prototype engineering trust in the pharmaceutical supply chain.
            </p>
            <div className='flex flex-wrap gap-3 pt-2'>
              {['MERN', 'Ethereum', 'IPFS'].map((tech) => (
                <span key={tech} className='px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400'>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Status & Disclaimer */}
          <div className='md:text-right space-y-4'>
            <div className='inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md'>
              <span className='w-2 h-2 bg-amber-500 rounded-full animate-pulse'></span>
              <span className='text-[11px] font-bold text-amber-500 uppercase tracking-tighter'>
                Hackathon Prototype
              </span>
            </div>
            <p className='text-xs text-slate-500 max-w-sm md:ml-auto leading-relaxed'>
              <strong className='text-slate-400'>Disclaimer:</strong> For demonstration purposes only. This is a proof-of-concept and not a production-grade medical system. Do not use for actual pharmaceutical verification.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-600'>
          <p>© 2026 MedLedger Project</p>
          <div className='flex gap-6'>
            <a className='hover:text-blue-500 cursor-pointer transition-colors' href='https://github.com/adityadarsiya96/MedLedger'>GitHub Repository</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;