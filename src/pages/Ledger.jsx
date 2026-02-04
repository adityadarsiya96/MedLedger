import React from 'react';
import { Link } from 'react-router-dom';

const Ledger = () => {
  const transactions = [
    { id: "0x8a2b...f41a", drug: "Amoxicillin 500mg", batch: "BN-2024-001", manufacturer: "Pfizer-Lab", status: "Verified", date: "Feb 04, 2026 22:30" },
    { id: "0x3b1d...e92c", drug: "Lisinopril 10mg", batch: "BN-2024-082", manufacturer: "Novartis", status: "Verified", date: "Feb 04, 2026 21:15" },
    { id: "0x7c4e...a10f", drug: "Metformin 850mg", batch: "BN-2023-441", manufacturer: "GSK Global", status: "Reviewing", date: "Feb 04, 2026 20:45" },
    { id: "0x2d9a...c33b", drug: "Atorvastatin 20mg", batch: "BN-2024-019", manufacturer: "AstraZeneca", status: "Verified", date: "Feb 04, 2026 18:10" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 font-sans antialiased text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <nav className="mb-6">
          <Link to="/" className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center gap-2">
            ← Back to Terminal
          </Link>
        </nav>

        {/* Professional Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Blockchain Explorer <span className="text-slate-400 font-light">/ Operations</span>
            </h1>
            <p className="text-sm text-slate-500 mt-1">Audit trail for global pharmaceutical distribution.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-3">
            <div className="bg-white border border-slate-200 px-4 py-2 rounded shadow-sm">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Total Batches</p>
              <p className="text-lg font-mono font-bold text-slate-800">1,284</p>
            </div>
            <div className="bg-white border border-slate-200 px-4 py-2 rounded shadow-sm">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Nodes Active</p>
              <p className="text-lg font-mono font-bold text-green-600">42</p>
            </div>
          </div>
        </div>

        {/* Refined Search & Filter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-3 relative">
            <input 
              type="text" 
              placeholder="Search by Transaction Hash (0x...) or Batch Number..." 
              className="w-full bg-white border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-400"
            />
          </div>
          <button className="bg-slate-900 text-white font-bold py-2.5 rounded text-xs uppercase tracking-widest hover:bg-slate-800 shadow-md">
            Execute Search
          </button>
        </div>

        {/* Modern Data Table */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  <th className="px-6 py-4">TX Hash</th>
                  <th className="px-6 py-4">Asset Name</th>
                  <th className="px-6 py-4">Manufacturer</th>
                  <th className="px-6 py-4">Batch UID</th>
                  <th className="px-6 py-4">Verification</th>
                  <th className="px-6 py-4 text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((tx, index) => (
                  <tr key={index} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 font-mono text-[13px] text-blue-600 font-medium">
                      {tx.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-slate-800">{tx.drug}</div>
                    </td>
                    <td className="px-6 py-4 text-xs font-semibold text-slate-600">
                      {tx.manufacturer}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-mono text-[11px] border border-slate-200">
                        {tx.batch}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Verified' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                        <span className={`text-[11px] font-bold uppercase tracking-tighter ${tx.status === 'Verified' ? 'text-green-700' : 'text-amber-700'}`}>
                          {tx.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-[11px] font-mono text-slate-400">
                      {tx.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Logs Footer */}
        <div className="mt-6 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
          <p>Showing 1-4 of 1,284 records</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> 
            Syncing with Ethereum Mainnet...
          </p>
        </div>

      </div>
    </div>
  );
};

export default Ledger;