import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowWeWork from './components/HowWeWork';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App relative bg-primary-black min-h-screen text-text-primary overflow-x-hidden selection:bg-accent-red selection:text-white">
      <ParticleCanvas />
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

