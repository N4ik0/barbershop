import { useState } from 'react';
import '../styles/NewBranch.css';
import { X } from 'lucide-react';


interface NewBranchProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewBranch({ setShowModal }: NewBranchProps) {
    const [closing, setClosing] = useState(false); // Estado para la animación de cierre

    const handleClose = () => {
        setClosing(true); // Activar animación de cierre
        setTimeout(() => {
            setShowModal(false); // Eliminar modal después de la animación
        }, 300); // Tiempo de la animación en ms (debe coincidir con el CSS)
    };

    return (
        <div className={`new-branch-modal ${closing ? 'fade-out' : ''}`}>
            <div className="new-branch-content">
                <button
                    onClick={handleClose}
                    className="new-branch-close-button"
                    >
                    <X size={40} />
                </button>
                <div 
                    className="new-branch-logo"
                    style={{ 
                        backgroundImage: `url(${import.meta.env.BASE_URL}assets/offer/tirano-esmeralda-1208.png)`
                    }}
                    />
                <h2 className="new-branch-title">Nueva Sucursal</h2>
                <p className="new-branch-description">¡Visítanos en nuestra nueva sucursal!</p>
                <button className="new-branch-contact-button">
                    <a
                        href='#Sucursales'
                        className="offer-link"
                        onClick={handleClose}
                    >
                        Ver sucursal
                    </a>
                </button>
            </div>
        </div>
    );
}

export default NewBranch;
