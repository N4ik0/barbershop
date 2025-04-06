import React, { useState, useRef, useEffect } from 'react';
import '../styles/BookNowButton.css';

type Branches = {
  id: number;
  name: string;
  link: string;
};

type BookNowButtonProps = {
  data: Branches[];
};

const BookNowButton: React.FC<BookNowButtonProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  // Cierra el modal si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <button className="cta-button" onClick={handleClick}>
        Agenda ahora
      </button>

      {isModalOpen && (
        <div className="book-now-modal-overlay" onClick={handleClose}>
          <div className="book-now-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <div className="book-now-header">
              <h2 className="book-now-title">Selecciona la sucursal</h2>
            </div>
            <div className='modal-branches'>
            {data.map((branch) => (
                <div key={branch.id} className="book-now-link">
                    <a
                    href={branch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="offer-link"
                    >
                    {branch.name}
                    </a>
                </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowButton;
