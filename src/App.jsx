// import components
import { useEffect } from 'react';
import Aos from 'aos';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Solutions from './components/Solutions';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';

// Animation package
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile',
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Solutions />
      <Recommendations />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">EZRA YEHUWALASHET</h6>
        <p>Copyright © 2023 CodeAProgram </p>
      </footer>
    </div>
  );
};

export default App;
