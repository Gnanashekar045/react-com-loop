import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Hero from './components/Hero';
import Service from './components/Service';
import Why from './components/Why';
import About from './components/About';
import Team from './components/Team';
import Endsection from './components/Endsection';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Hero />
      <Service />
      <About />
      <Why />
      <Team />
      <Endsection />
      <Footer />
    </div>
  );
}

export default App;
