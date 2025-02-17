import '../styles/courses.css'; // Importa el archivo CSS

// Importamos el JSON (puedes colocarlo en la misma carpeta o en una carpeta "data")
import courses from '../data/courses.json'; // Ajusta la ruta según la ubicación del archivo

const Classes = () => {
  return (
    <section className="classes-section" id='Clases'>
      <div className="classes-container">
        <div className="classes-header">
          <h2 className="classes-title">Nuestros Cursos y Clases</h2>
          <p className="classes-description">
            Aprende el arte de la barbería con nuestros cursos diseñados para todas las edades. Desde principiantes hasta avanzados, tenemos algo para todos.
          </p>
        </div>
        <div className="classes-grid">
          {courses.map((course) => (
            <div className='class-type' key={course.id}>
              <div className='class-title'>{course.title}</div>
              <div className='class-description'>{course.description}</div>
              <div className='class-price'>
                <a
                  href='#'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${course.price.toLocaleString()}
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="book-button">
          <a
            href="https://wa.me/+56972111501"
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

export default Classes;