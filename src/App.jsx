// import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Home />
      <footer className="p-3 text-center">
        <h6 className="mb-3">EZRA YEHUWALASHET</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;