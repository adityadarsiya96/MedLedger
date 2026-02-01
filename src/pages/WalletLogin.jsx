import { ethers } from "ethers";
import axios from "axios";

const WalletLogin = ({ setUser }) => {
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not installed");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    // Step 1: get nonce from backend
    const nonceRes = await axios.post("http://localhost:5000/api/auth/nonce", {
      walletAddress: address,
    });

    const message = nonceRes.data.message;

    // Step 2: sign message
    const signature = await signer.signMessage(message);

    // Step 3: verify
    const authRes = await axios.post("http://localhost:5000/api/auth/verify", {
      walletAddress: address,
      signature,
    });

    localStorage.setItem("token", authRes.data.token);
    setUser(authRes.data.user);
  };

  return <button onClick={connectWallet}>Login with Wallet</button>;
};

export default WalletLogin;
