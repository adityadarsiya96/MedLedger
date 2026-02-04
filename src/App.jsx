import React from 'react'
import Landing from "./pages/Landing"
import { Route, Routes } from 'react-router-dom'
import PharmacyRegister from './pages/PharmacyRegister'
import SuccessPage from './pages/SuccessPage'
import Ledger from './pages/Ledger'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path= "/" element={<Landing/>}/>
        <Route path= "/success" element={<SuccessPage/>}/>
        <Route path= "/ledger" element={<Ledger/>}/>
      </Routes>
    </div>
  )
}

export default App


