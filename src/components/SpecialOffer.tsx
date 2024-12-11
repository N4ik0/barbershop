import React, { useState } from 'react';
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
              <p className="special-offer-discount">20% Dcto.</p>
              <p className="special-offer-description">
                Obtén un Estilo Sofisticado: 20% de Descuento en Corte y Styling
              </p>
              <button className="special-offer-button">
                <a
                  href='https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?service=s%3A10423153&pId=805178'
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
