import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SpecialOffer from './components/SpecialOffer';
import './styles/global.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <SpecialOffer />
      <Footer/>
    </div>
  );
}

export default App;