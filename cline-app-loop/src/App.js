import './App.css';
import Header from './components/Header';
import Silder from './components/Slider';
import Schedule from './components/Schedule';
import Feature from './components/Features';
import FunFact from './components/FunFact';
import Choose from './components/Choose';
import Callaction from './components/CallActtion';
import PortFollo from './components/PortPolio';
import Footer from './components/Footer';
import NewLetters from './components/NewsLetter';
import Appointment from './components/Appointment';
import Clients from './components/Clients';
import Blog from './Blog';
import Pricing from './Pricing';
import Service from './Service';

function App() {
  return (
    <div className="App">
      <Header />
      <Silder />
      <Schedule />
      <Feature />
      <FunFact />
      <Choose />
      <Callaction />
      <PortFollo />
      <Service />
      <Pricing />
      <Blog />
      <Clients />
      <Appointment />
      <NewLetters />
      <Footer />
    </div>
  );
}

export default App;
