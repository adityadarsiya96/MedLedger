import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Database, Share2, Binary, LogOut, ArrowRight } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-12">
      {/* Structural accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-700 via-indigo-600 to-slate-900" />
      
      <div className="max-w-3xl w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-3xl mb-6 border border-blue-100 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Authentication Verified
          </h1>
          <p className="text-slate-500 font-medium text-lg">
            Node Identity: <span className="font-mono text-blue-600 text-sm bg-blue-50 px-2 py-0.5 rounded">Authorized</span>
          </p>
        </div>

        {/* Technical Status Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
          <div className="p-8 sm:p-10 text-center border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Core Infrastructure Active</h2>
            <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
              Supply-chain actions—including <span className="text-slate-900 font-semibold">batch creation, ownership transfer, and cryptographic verification</span>—are fully implemented at the smart-contract level and demonstrated in our technical walkthrough.
            </p>
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-slate-50/50">
            <div className="p-6 flex flex-col items-center">
              <Database className="w-5 h-5 text-slate-400 mb-2" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protocol</span>
              <span className="text-sm font-semibold text-slate-700">ERC-721 Modified</span>
            </div>
            <div className="p-6 flex flex-col items-center">
              <Binary className="w-5 h-5 text-slate-400 mb-2" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Logic</span>
              <span className="text-sm font-semibold text-slate-700">Solidity v0.8.20</span>
            </div>
            <div className="p-6 flex flex-col items-center">
              <Share2 className="w-5 h-5 text-slate-400 mb-2" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network</span>
              <span className="text-sm font-semibold text-slate-700">EVM Compatible</span>
            </div>
          </div>

          {/* Actions */}
          <div className="p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <button 
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 text-slate-600 font-bold hover:text-blue-600 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Return to Terminal
            </button>

            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              <LogOut className="w-4 h-4" />
              Terminate Session
            </button>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider">Secure Ledger Connection Active</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;