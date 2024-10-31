import './App.css';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Calculation from './components/Calculation';
import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Category/>
      <Calculation/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
