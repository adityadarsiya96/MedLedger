import React, { useState } from 'react';
import { ethers } from "ethers";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const connectWallet = async () => {
    console.log("Wallet button clicked")
    // 1. Check if MetaMask (window.ethereum) is available
    if (typeof window.ethereum !== 'undefined') {
      try {
        // 2. Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });

        // 3. Save the first account to state
        setAccount(accounts[0]);
        localStorage.setItem("token", accounts[0]);
        console.log("Connected to:", accounts[0]);
        navigate('/success');
      } catch (error) {
        console.error("User rejected the request or error occurred", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <section className='relative w-full min-h-[90vh] flex items-center justify-center bg-slate-50 overflow-hidden'>

      {/* SOLID ARCHITECTURAL ELEMENTS */}
      <div className="absolute inset-0 z-0">
        {/* Subtle geometric accent - Top Right */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-[-12deg] translate-x-1/2"></div>

        {/* Subtle geometric accent - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/50 rounded-full -translate-x-1/2 translate-y-1/2 border border-blue-100"></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
        <div className='flex flex-col items-center text-center space-y-8'>

          {/* Badge - Adjusted for light slate bg */}
          <div className='inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-600'></span>
            </span>
            <span className='text-xs font-bold uppercase tracking-[0.2em] text-slate-500'>
              Established <span className="text-slate-900 underline decoration-blue-500 underline-offset-4">Protocol 2026</span>
            </span>
          </div>

          {/* Main Content */}
          <div className='space-y-6 max-w-4xl'>
            <h1 className='text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-none'>
              Trust Every <br />
              <span className='text-blue-600 inline-block mt-2'>Dose.</span>
            </h1>
            <p className='text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium'>
              Eliminate the threat of counterfeit pharmaceuticals. MedLedger leverages
              <span className='text-slate-900 font-bold'> immutable blockchain technology </span>
              to secure the global medicine supply chain.
            </p>
          </div>

          {/* Buttons - Solid & High Contrast */}
          <div className='flex flex-col sm:flex-row gap-5 mt-4'>
            <button onClick={connectWallet} className='px-10 py-4 bg-slate-900 text-white font-bold rounded-md hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 active:scale-95'>
              Login with Wallet
            </button>
            <Link
              to="/ledger"
              className='px-10 py-4 bg-white text-slate-900 border-2 border-slate-900 font-bold rounded-md hover:bg-slate-900 hover:text-white transition-all active:scale-95 inline-block'
            >
              View Public Ledger
            </Link>
          </div>

          {/* Bottom decorative line */}
          <div className="w-24 h-1 bg-blue-600 rounded-full mt-12"></div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;