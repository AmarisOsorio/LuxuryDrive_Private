import React from 'react';



const Login = () => {
  return (
    <body id='bodyLogin'>
    <div className="login-container">
      <div className="logo">
        <img src="../../public/img/Group 59.png" alt="Logo" />
      </div>
      <h2>Log In</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" placeholder="Usuario" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Contraseña" required />
        </div>
        <div className="forgot-password">
          <p>¿Olvidaste la contraseña? </p> 
          <a href="/RecuperacionContraseña">Recuperar contraseña</a>
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
    </body>
    
  );
};

export default Login;