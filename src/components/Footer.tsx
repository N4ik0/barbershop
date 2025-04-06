import '../styles/footer.css';
import Logo from "/assets/icons/tirano-logo-principal.png";
import { Phone, Clock, Instagram } from "lucide-react";
import Wsp from "/assets/icons/whatsapp.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="Logo" className="footer-logo-icon" />
                <a className="footer-logo-title" href='#Inicio'>Tiranos</a>
            </div>
            <div className="footer-contact">
                <div className="footer-item footer-phone">
                    <Phone size={20} className="footer-icon" />
                    <div className='footer-numbers'>
                        <div className='footer-number-item'>
                            <span className="footer-label">Teléfono:</span>
                            <span className="footer-text">+56930376796</span>
                        </div>
                    </div>
                </div>
                <div className="footer-item footer-whatsapp">
                    <img src={Wsp} alt="WhatsApp" className="footer-icon-wsp" />
                    <div className='footer-numbers'>
                        <div className='footer-number-item'>
                            <div className="footer-label">WhatsApp:</div>
                            <div className="footer-text">
                                <a
                                    href="https://wa.me/+56937247327"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link"
                                >
                                    +56937247327
                                </a>
                                {/* +56937247327 */}
                            </div>
                        </div>
                        <div className='footer-number-item'>
                            <div className="footer-text">
                                <a
                                    href="https://wa.me/+56972111501"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link"
                                >
                                    +56972111501
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-item map">
                    <a
                        href="https://www.instagram.com/tiranos_esmeralda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <Instagram size={25} className="footer-icon" />
                        <div className="footer-text">Tiranos Barber Club</div>
                    </a>
                </div>
                {/* <div className="footer-item map">
                    <a
                        href="https://www.google.com/maps?daddr=Avenida+Bernardo+O%27Higgins+77,+Talagante,+Regi%C3%B3n+Metropolitana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <MapPin size={25} className="footer-icon" />
                        <div className="footer-text">Av. Bernardo O'Higgins 77, Talagante, Región Metropolitana</div>
                    </a>
                </div> */}
            </div>
            <div className='opening-hour'>
                <div>Horario de atención</div>
                <div className='hour'>
                    <Clock size={24}/>
                    <span>Lunes a Domingo: 10:30 - 20:30</span>
                </div>
            </div>
        </div>
    );
}
