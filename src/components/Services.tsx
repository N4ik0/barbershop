import '../styles/Services.css'; // Importa el archivo CSS

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-description">Te brindamos la mejor asesoría de imagen, Cortes de cabello, barba, limpieza facial según tu estilo de vida</p>
        </div>
        <div className="services-grid">
          <div className='service-type service1'>
            <div className='service-title'>
              Corte + Barba
            </div>
            <div className='service-description'>
              Corte de cabello/mascarilla puntos negros/Afeitado & masajes Viber FX 
            </div>
            <div className='service-price'>
            <a
                  href='https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?service=s%3A10383210&pId=805178'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  $12.000
                  </a>
            </div>
          </div>
          <div className='service-type service2'>
            <div className='service-title'>
              Corte de cabello & masajes PREMIUM
            </div>
            <div className='service-description'>
              Corte de cabello + mascarilla negra + toalla fría masajes con Viber FX 
            </div>
            <div className='service-price'>
            <a
                  href='https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?service=s%3A10565574&pId=805178'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  $10.000
                  </a>
            </div>
          </div>
          <div className='service-type service3'>
            <div className='service-title'>
              Servicio VIP
            </div>
            <div className='service-description'>
              Corte de cabello + mascarilla negra + Barba vapozono toalla fría & masajes Viber XF más bebestible a elección cerveza , bebida o café.
            </div>
            <div className='service-price'>
            <a
                  href='https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?service=s%3A10565728&pId=805178'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  $15.000
                  </a>
            </div>
          </div>
        </div>
        <button className="book-button">
          <a
            href='https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?pId=805178'
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Más
          </a>
        </button>
      </div>
    </section>
  );
};

export default Services;
