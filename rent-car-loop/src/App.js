import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './component/Hero';
import Booking from './component/Booking';
import CarSection from './component/CarSectin';
import About from './component/About';
import Best from './component/Best';
import RentSection from './component/RentSection';
import Blog from './component/Blog';
import Aboutus from './component/Aboutus';
import Client from './component/Clinent';
import Contact from './component/Contact';
import Maps from './component/Map';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Booking/>
      <CarSection/>
      <About/>
      <Best/>
      <RentSection/>
      <Blog/>
      <Aboutus/>
      <Client/>
      <Contact/>
      <Maps/>
      <Footer/> 
    </div>
  );
}

export default App;
