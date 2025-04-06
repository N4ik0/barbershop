import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SpecialOffer from './components/SpecialOffer';
import Footer from './components/Footer';
import NewBranch from './components/NewBranch';
import './styles/global.css';
import Courses from './components/Courses';
import Branches from './components/Branches';
import SliderBranch from './components/SliderBranch';

function App() {
  //para mostrar el aviso de la nueva sucursal
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <div className={`main ${showModal ? 'blur' : ''}`} id="main">
        <Navbar />
        <Hero />
        <Services />
        <Courses />
        {/* <SliderBranch /> */}
        <Branches />
        <Footer />
      </div>

      {/* nueva sucursal */}
      {showModal && <NewBranch setShowModal={setShowModal} />}
      {/* <SpecialOffer /> */}
    </>
  );
}

export default App;
