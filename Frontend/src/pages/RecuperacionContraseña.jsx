import React from 'react';


const PasswordRecovery = () => {
  return (
    <div className="recovery-container">
      <div className="image-section">
        <img src="car-image.jpg" alt="Car" />
      </div>
      <div className="form-section">
        <h2>Recuperación de contraseña</h2>
        <p>Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
        <form>
          <input type="email" placeholder="Email" required />
          <button type="submit">Enviar código</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;