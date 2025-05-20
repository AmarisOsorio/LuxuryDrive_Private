import React, { useState } from "react";
import "./MiPerfil.css"; 

const MiPerfil = () => {
  const [perfil, setPerfil] = useState({
    nombre: "Eiden Sonrí",
    email: "eiden.sonri@luxurydrive.com",
    telefono: "7965 3567",
    password: "**********",
  });
 
  const [modoEdicion, setModoEdicion] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({
      ...perfil,
      [name]: value,
    });
  };

  const toggleEdicion = () => {
    setModoEdicion(!modoEdicion);
  };

  return (

    <div id="bodyMiPerfil">
      <div className="mi-perfil-container">
      
      <div className="mi-perfil-imagen-container">
        <img
          src="../../public/img/EidenSonri.jpg"
          alt="FotoPerfil"
          className="mi-perfil-imagen"
        />
      </div>

      <div className="mi-perfil-info">
        <input
          type="text"
          name="nombre"
          value={perfil.nombre}
          onChange={handleChange}
          readOnly={!modoEdicion}
          className="mi-perfil-input"
        />
        <input
          type="text"
          name="email"
          value={perfil.email}
          onChange={handleChange}
          readOnly={!modoEdicion}
          className="mi-perfil-input"
        />
        <input
          type="text"
          name="telefono"
          value={perfil.telefono}
          onChange={handleChange}
          readOnly={!modoEdicion}
          className="mi-perfil-input"
        />
        <input
          type="password"
          name="password"
          value={perfil.password}
          onChange={handleChange}
          readOnly={!modoEdicion}
          className="mi-perfil-input"
        />
      </div>

      <button onClick={toggleEdicion} className="mi-perfil-boton">
        {modoEdicion ? "Guardar" : "Editar"}
      </button>
    </div>
    </div>
  );
};

export default MiPerfil;
