// src/data/slides.ts

// Define la interfaz para un slide
interface Slide {
    image: string;
    title: string;
    description: string;
  }
  
  const slides: Slide[] = [
    {
      image: "photo1.jpg",
      title: "Cortes Premium",
      description: "Descubre un nuevo nivel en el arte de la barbería, donde cada detalle está diseñado para resaltar tu estilo único.",
    },
    {
      image: "photo2.jpg",
      title: "Barberos Expertos",
      description: "Nuestro equipo de profesionales altamente capacitados garantiza un acabado impecable y personalizado en cada visita.",
    },
    {
      image: "photo3.jpg",
      title: "Estilos Clásicos y Modernos",
      description: "Desde cortes tradicionales hasta las tendencias más vanguardistas, llevamos tu look al siguiente nivel.",
    },
  ];
  
  export default slides;
  