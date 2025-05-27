import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Login from './pages/Login'
import PasswordRecovery from './pages/RecuperacionContraseña'
import MiPerfil from './pages/MiPerfil'
import Navbar from './components/NavbarAdmin'
import Dashboard from './pages/Dashboard'
import Empleados from "./pages/Empleados"
import Importaciones from './pages/Importaciones'
import AñadirSucursal from './pages/AñadirSucursal'



function App() {
  return (
    <>
    
      <Router>
        <Navbar />
          <Routes>
            <Route  path="/Dashboard" element={<Dashboard/>} />
            <Route  path="/Login" element={<Login/>} />
            <Route path="/RecuperacionContraseña" element={<PasswordRecovery />} />
            <Route path="/MiPerfil" element={<MiPerfil />} />
            <Route path="/Empleados" element={<Empleados />} />
            <Route path="/importaciones" element={<Importaciones />} />
            <Route path="/AñadirSucursal" element={<AñadirSucursal />} />

         </Routes>
      </Router>
    </>
  )
}

export default App
