import { useState } from "react";
import { ethers } from "ethers";

// Replace with your deployed contract data
const CONTRACT_ADDRESS = "0xYOUR_CONTRACT_ADDRESS";
const ABI = [
  "function getBatch(uint256 batchId) view returns (address manufacturer, uint256 expiryDate, bool recalled)"
];

const Verify = ({ user }) => {
  const [batchId, setBatchId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const verifyBatch = async () => {
    setError("");
    setResult(null);

    try {
      if (!window.ethereum) {
        setError("MetaMask not detected");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        provider
      );

      const data = await contract.getBatch(batchId);

      const now = Math.floor(Date.now() / 1000);

      if (data.manufacturer === ethers.ZeroAddress) {
        setResult("❌ Counterfeit: Batch not found");
        return;
      }

      if (data.recalled) {
        setResult("❌ Unsafe: Batch recalled");
        return;
      }

      if (Number(data.expiryDate) < now) {
        setResult("❌ Expired medicine");
        return;
      }

      setResult("✅ Authentic medicine");
    } catch (err) {
      console.error(err);
      setError("Verification failed");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h2>Medicine Verification</h2>

      <p style={{ color: "#555" }}>
        Logged in as pharmacy wallet:
        <br />
        <b>{user.walletAddress}</b>
      </p>

      <input
        type="number"
        placeholder="Enter Batch ID"
        value={batchId}
        onChange={(e) => setBatchId(e.target.value)}
        style={{ width: "100%", padding: "10px", marginTop: "20px" }}
      />

      <button
        onClick={verifyBatch}
        style={{ marginTop: "15px", padding: "10px", width: "100%" }}
      >
        Verify Medicine
      </button>

      {result && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>{result}</p>
      )}

      {error && (
        <p style={{ marginTop: "20px", color: "red" }}>{error}</p>
      )}
    </div>
  );
};

export default Verify;
