// import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App" id="page-top">
      <NavBar/>
      <Masthead/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
