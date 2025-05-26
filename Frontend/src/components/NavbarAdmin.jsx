// Menu de Aministrador
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative w-full">
      
      <div className="w-full h-[3px] bg-[#8b5cf6] absolute top-0 left-0 z-10" />
      <div className="flex items-center justify-between bg-[#0c1621] h-14 px-8 relative z-20">
        <ul className="flex items-center space-x-8 font-semibold text-white">
          
          <li className="relative">
            <a
              href="/Dashboard"
              className="text-[#a78bfa] underline underline-offset-[6px] decoration-2 decoration-[#a78bfa]"
            >
              Dashboard
            </a>
          </li>
          
          <li>
            <a href="/Empleados" className="hover:text-[#a78bfa] transition">
              Empleados
            </a>
          </li>
          <li>
            <a href="/MiPerfil" className="hover:text-[#a78bfa] transition">
              Perfil
            </a>
          </li>

          <li>
            <a href="/Login" className="hover:text-[#a78bfa] transition">
              Login
            </a>
          </li>
        
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;