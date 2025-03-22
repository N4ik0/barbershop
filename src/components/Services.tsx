import '../styles/Services.css';
import servicesData from '../data/servicesData.json';

const Services = () => {
  return (
    <section className="services-section" id='Servicios'>
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-description">Te brindamos la mejor asesoría de imagen, Cortes de cabello, barba, limpieza facial según tu estilo de vida</p>
        </div>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className={`service-type service${service.id}`}>
              <div className='service-title'>{service.title}</div>
              <div className='service-description'>{service.description}</div>
              <div className='service-price'>
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  {service.price}
                </a>
              </div>
            </div>
          ))}
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
