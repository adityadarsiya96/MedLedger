# MedLedger – Pharmaceutical Supply Chain Verification Platform

MedLedger is a role-based application designed to prevent counterfeit medicines and distributor-level manipulation by enabling transparent and verifiable tracking of pharmaceutical batches across the supply chain.

The platform allows manufacturers, distributors, pharmacies, and consumers or regulatory authorities to verify medicine authenticity using a single, immutable batch record.

---

## 🚨 Problem Statement

Counterfeit drugs and supply chain manipulation remain major challenges in the pharmaceutical industry.  
Existing systems rely on centralized databases and manual audits, making them vulnerable to data tampering, delayed verification, and lack of transparency—especially at the last checkpoint before patient access.

---

## 💡 Proposed Solution

MedLedger assigns a **unique digital identity** to each medicine batch and records its movement across the supply chain.  
Pharmacies can independently verify batch authenticity before dispensing, while consumers and authorities can perform read-only verification using QR codes.

---

## 🔄 How It Works

1. Manufacturer creates a medicine batch record  
2. Distributor transfers custody of the batch  
3. Pharmacy verifies the batch before dispensing  
4. Consumer / Authority verifies authenticity via QR code  
5. All events are recorded immutably

---

## 👥 User Roles

- **Manufacturer** – Creates and registers medicine batches  
- **Distributor** – Transfers batch custody  
- **Pharmacy** – Verifies authenticity and dispenses medicine  
- **Consumer / Authority** – Performs read-only verification  

---

## ⭐ Key Features

- Batch-level digital identity for medicines  
- Wallet-based authentication  
- Role-based access control  
- Immutable batch history  
- QR-based public verification  
- Pharmacy-level independent verification  

---

## 🧠 Novelty

- Focus on **last-mile verification at pharmacies**
- Eliminates blind trust in distributors
- Batch-centric traceability instead of company-centric claims
- Audit-ready design for regulators

---

## 🏗️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- MetaMask Wallet Integration  

### Backend
- Node.js  
- Express.js  
- MongoDB  

### Blockchain
- Ethereum (Test Network)  
- Solidity Smart Contracts  

---

## ⚠️ Limitations

- Requires adoption by supply chain stakeholders  
- Cannot detect counterfeit batches registered as genuine at the source  
- Regulatory compliance required for real-world deployment  

---

## 🚀 Future Enhancements

- Integration with IoT sensors for temperature and storage validation  
- Permissioned blockchain for enterprise scalability  
- Regulatory dashboards for automated audits  
- Manufacturer and distributor onboarding automation  

---

## 📦 Project Status

This project is a **hackathon prototype** demonstrating the core verification workflow and system design.

---

## 📄 License

This project is licensed for educational and hackathon use only.
