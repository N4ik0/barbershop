import '../styles/footer.css';
import Logo from "/assets/icons/tiranoo.svg";
import { Phone, MapPin, Facebook, Instagram, Twitter, Clock } from "lucide-react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="Logo" className="footer-logo-icon" />
                <div className="footer-logo-title">Tiranos</div>
            </div>
            <div className="footer-contact">
                <div className="footer-item">
                    <Phone size={20} className="footer-icon" />
                    <div className='footer-numbers'>
                        <span>Telefono: </span>
                        <span className="footer-text"> +56930376796</span>
                        <span>WhatsApp: </span>
                        <span className="footer-text"> +56937247327</span>
                    </div>
                    
                </div>
                <div className="footer-item map">
                    <a
                        href="https://www.google.com/maps?daddr=Avenida+Bernardo+O%27Higgins+77,+Talagante,+Regi%C3%B3n+Metropolitana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <MapPin size={25} className="footer-icon" />
                        <span className="footer-text">Av. Bernardo O'Higgins 77, Talagante, Región Metropolitana</span>
                    </a>
                    </div>
                <div className="footer-rrss">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook size={24} className="footer-icon" />
                    </a>
                    <a href="https://www.instagram.com/tiranos_barber_club/" target="_blank" rel="noopener noreferrer">
                        <Instagram size={24} className="footer-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter size={24} className="footer-icon" />
                    </a>
                </div>
            </div>
            <div className='opening-hour'>
                <div>
                    Horario de atención
                </div>
                <div className='hour'>
                    <Clock size={24}/>
                    <span>Lunes a Domingo: 10:30 - 20:30</span>
                </div>
            </div>
        </div>
    );
}
