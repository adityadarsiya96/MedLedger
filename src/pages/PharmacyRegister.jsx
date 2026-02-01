import React, { useState } from "react";
import axios from "axios";
import { User, ClipboardList, MapPin, Loader2 } from "lucide-react"; // Optional icons

const PharmacyRegister = ({ wallet }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    pharmacyName: "",
    licenseNumber: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Authentication token not found. Please login again.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/pharmacy/register",
        { ...form, walletAddress: wallet }, // Including the wallet prop you passed
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Pharmacy successfully registered!");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data?.message || "Failed to register pharmacy");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Register Pharmacy</h2>
          <p className="text-slate-500 mt-2">Enter your details to join the MedLedger network</p>
        </div>

        <form onSubmit={submit} className="space-y-5">
          {/* Pharmacy Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Pharmacy Name</label>
            <div className="relative">
              <input
                required
                name="pharmacyName"
                placeholder="e.g. City Health Pharma"
                className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* License Number */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">License Number</label>
            <input
              required
              name="licenseNumber"
              placeholder="PH-12345678"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              onChange={handleChange}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Location</label>
            <input
              required
              name="location"
              placeholder="City, State"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              onChange={handleChange}
            />
          </div>

          {/* Wallet Display (Read Only) */}
          {wallet && (
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-[10px] uppercase tracking-wider font-bold text-blue-600 mb-1">Linked Wallet</p>
              <p className="text-xs font-mono text-blue-800 truncate">{wallet}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Registering...
              </>
            ) : (
              "Complete Registration"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PharmacyRegister;
