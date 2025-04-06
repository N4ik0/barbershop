import '../styles/Branches.css'; // Importa el archivo CSS
import MultiSliderBranch from './MultiSliderBranch';
import branches from '../data/branches.json'; // Asegúrate de que la ruta sea correcta
const Branches = () => {

  return (
    <section className="branches-section" id='Sucursales'>
      <div className="branches-container">
        <div className="branches-header">
          <h2 className="branches-title">Nuestras Sucursales</h2>
          <p className="branches-description">
            Visítanos en cualquiera de nuestras sucursales y disfruta de un servicio de primera.
          </p>
          
        </div>
        <MultiSliderBranch data={branches} />
      </div>
    </section>
  );
};

export default Branches;