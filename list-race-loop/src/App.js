import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'linearicons/dist/web-font/style.css';
import Header from './components/Header';
import TopArea from './components/TopArea';
import Hero from './components/Hero';
import Topic from './components/Topics';
import Work from './components/Work';
import Explore from './components/Explore';
import Reviews from './components/Reviews';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TopArea />
      <Hero />
      <Topic />
      <Work />
      <Explore />
      <Reviews />
      <Statistics />
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
