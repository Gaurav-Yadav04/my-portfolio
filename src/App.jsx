
import Navbar from "./components/Navbar";
import About from "./sections/About";     
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/contact";
import Footer from "./sections/Footer"
import Home from './sections/Home';
import ParticlesBackground from "./components/ParticlesBackground";
import Customcursor from "./components/Customcursor";

export default function App() {
  return(

    <div className="relative gradient text-white">
    < Customcursor />
    <ParticlesBackground />
    <Navbar />
    < Home />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Testimonials />
    <Contact />
    <Footer />


    </div>
  )
}