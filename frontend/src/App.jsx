import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowWeWork from './components/HowWeWork';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <HowWeWork />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
