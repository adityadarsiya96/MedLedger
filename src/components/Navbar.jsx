import React, { useState } from 'react';
import { ethers } from "ethers";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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
    <header className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          
          {/* Brand Identity */}
          <div className='flex items-center gap-3 group cursor-pointer'>
            <div className='w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center transition-all group-hover:bg-blue-600'>
              <span className='text-white font-bold text-xl'>M</span>
            </div>
            <span className='text-xl font-bold tracking-tight text-slate-900'>
              Med<span className='text-blue-600'>Ledger</span>
            </span>
          </div>
          
          {/* Action Area */}
          <div className='flex items-center gap-6'>
            
            
            <button onClick={connectWallet} className='inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-sm'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
              </svg>
              Login with Wallet
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;

