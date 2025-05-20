import React from 'react';
import '../pages/Contactanos.css'; // Import the CSS file for styling

const ContactPage = () => {
    return (
        <body id='bodyContact'>
        <div>
            <header className="header-contact">
                <div id="header-contact-text">
                    <h1>Estamos para</h1>
                    <h1>servirte</h1>
                </div>
            </header>

            <div className='conteiner'>
                <h2 id='Contactanos'>Contáctanos</h2>
                <p id='hola'>Le atenderemos lo más pronto posible</p>
                <section className="contact-section">
                    <form>
                        <div id ="input-group">
                            <input type="text" placeholder="Nombre" required />
                            
                            <input type="tel" placeholder="Teléfono" required />
                        </div>

                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Mensaje" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>

            <section className="info-section">
                <div className="info-box">
                    <img className='imgCudros' src="https://cdn-icons-png.flaticon.com/512/67/67347.png" alt="" />
                    <p className='title-wrapper'>Encuentranos</p>
                    <p className='text-wrapper'>Calle del mirador &, 87 Avenida Norte, San Salvador</p>
                </div>
                <div className="info-box">
                    <img src="https://cdn-icons-png.flaticon.com/512/4213/4213922.png" alt="" />
                    <p className='title-wrapper'>Email</p>
                    <p className='text-wrapper'>@luxuyDrive</p>
                </div>
                <div className="info-box">
                <img className='imgCudros' src="https://images.icon-icons.com/2715/PNG/512/phone_icon_172267.png" alt="" />
                    <p className='title-wrapper'>Telefono</p>
                    <p className='text-wrapper'>2253-8573</p>
                </div>
            </section>

            <section className="hours-section">
                <img src="https://www.google.com/maps/vt/data=vh8cHHCb6pa1WdpcARwn0EVGDu2MxEmjGIknmMmLMIpU05PK72Lc2pvngrmF8t_D-Gxk1czAafNwZwdrkxJz3Pmrr1tjb0Dl-qDoebLuOYz3d_ozPTPlDqEzKZsVdN8da2_l1OHdFPMx39qTglKe2Z3569HomThkStDiZ-K7Nhj61BD9OSlrmvmCpOPBS_sMXa3-sV8sOG-37mzDQ9-S3rm49HhvqOv1X9pqbKxKjEgUWNWiHBUjSWhWqS8EqIrj9morayTonYMWpxs_lizmV2QvyoSvEtBOmg" alt="" />
                <div className='box-horarios'>
                <p className='title-horarios'>Horarios de atención</p>
                <p className='text-horarios'>Lunes a Viernes: 8:00 am - 5:00 pm</p>
                <p className='text-horarios'>Sábado: 8:00 am - 12:00 pm</p>
                <p className='text-horarios'>Domingo: Cerrado</p>
                </div>
            </section>

            </div>

          
            
        </div>
        </body>
    );
};

export default ContactPage;