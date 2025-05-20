import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Login from './pages/Login'
import PasswordRecovery from './pages/RecuperacionContraseña'
import MiPerfil from './pages/MiPerfil'
import Navbar from './components/NavbarAdmin'



function App() {
  return (
    <>
    <Navbar />
      <Router>
          <Routes>
            <Route  path="/Login" element={<Login/>} />
            <Route path="/RecuperacionContraseña" element={<PasswordRecovery />} />
            <Route path="/MiPerfil" element={<MiPerfil />} />
         </Routes>
      </Router>
    </>
  )
}

export default App
