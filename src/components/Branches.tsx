import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Branches.css'; // Importa el archivo CSS
import branches from '../data/branches.json'; // Ajusta la ruta según la ubicación del archivo

const Branches = () => {
  const getImagesForSwiper = (images) => {
    return images.length < 3 ? [...images, ...images] : images;
  };
  return (
    <section className="branches-section" id='Sucursales'>
      <div className="branches-container">
        <div className="branches-header">
          <h2 className="branches-title">Nuestras Sucursales</h2>
          <p className="branches-description">
            Visítanos en cualquiera de nuestras sucursales y disfruta de un servicio de primera.
          </p>
        </div>
        <div className="branches-grid">
          {branches.map((branch) => (
            <div
              className="branch-card"
              key={branch.id}
            >
              <div className="branch-content">
                <h3 className="branch-name">{branch.name}</h3>
                <a className="branch-address" href={branch.direction} target="_blank" rel="noopener noreferrer">{branch.address}</a>
              </div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation
                pagination={{ type: 'progressbar' }}
                autoplay={{ delay: 5000 }}
                loop={true}
                effect="fade" // Activa el efecto de desvanecimiento
                className="swiper-container"
              >
                {getImagesForSwiper(branch.images).map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="branch-image"
                      style={{ backgroundImage: `url(/barbershop/assets/branches/${image})` }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;