import React from 'react'
import Landing from "./pages/Landing"
import { Route, Routes } from 'react-router-dom'
import PharmacyRegister from './pages/PharmacyRegister'
import SuccessPage from './pages/SuccessPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path= "/" element={<Landing/>}/>
        <Route path= "/success" element={<SuccessPage/>}/>
      </Routes>
    </div>
  )
}

export default App


