import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Hero.css';
import slides from '../data/slides';

const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ type: 'progressbar' }}
        autoplay={{ delay: 5000 }}
        loop={true}
        effect="fade" // Activa el efecto de desvanecimiento
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-background"
              id='Inicio'
              style={{ backgroundImage: `url(/barbershop/assets/hero/${slide.image})` }}
            >
              <div className='slide-overlay'>
                <div className="slide-content">
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-description">{slide.description}</p>
                  <button className="cta-button">
                    <a
                    href='https://www.fresha.com/a/tiranos-talagante-avenida-bernardo-ohiggins-77-a29a3jau?pId=805178'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="offer-link"
                  >
                    Agenda ahora
                    </a>
                  </button>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
