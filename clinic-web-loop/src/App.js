import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Spinner from './components/Spinner';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Featuers from './components/Features';
import Team from './components/Team';
import Appointment from './components/Appointment';
import Textimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Header />
      <Service />
      <Featuers />
      <Team />
      <About />
      <Appointment/>
      <Textimonial/>
      <Footer/>
    </div>
  );
}

export default App;
