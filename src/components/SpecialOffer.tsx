import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import '../styles/SpecialOffer.css';

const SpecialOffer = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="special-offer-wrapper"
        >
          <div className="special-offer-container">
            <button
              onClick={() => setIsVisible(false)}
              className="close-button"
            >
              <X size={40} />
            </button>
            <div className="special-offer-content">
              <h3 className="special-offer-title">Oferta Especial!</h3>
              <p className="special-offer-discount">30% Dcto.</p>
              <p className="special-offer-description">
                Obtén un Estilo Sofisticado: 30% de Descuento en Corte y Styling en nuestra nueva sucursal.
              </p>
              <button className="special-offer-button">
                <a
                  href='https://wa.me/+56972111501?text=He%20visto%20la%20página%20web%20de%20tiranos.cl%20y%20estoy%20interesado%20en%20el%2030%%20de%20descuento%20que%20indica%20el%20anuncio%20del%20local%20de%20Esmeralda%201208%20%236%20-%20Talagante.%20¿Puedo%20reservar%20para%20el%20día%20de%20hoy%20o%20mañana?'
                  // href='https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?service=s%3A10423153&pId=805178'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="offer-link"
                >
                  lo quiero!
                </a>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpecialOffer;
