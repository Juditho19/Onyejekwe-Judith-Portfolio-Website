import './index.css';
import {
  Navbar,
  Hero,
  About,
  ElevatorPitch,
  Projects,
  Testimonial,
  Contact,
} from './components/index';


function App() {
  return (
  
    <>

      <div className=' min-h-screen mx-auto px-4 
      bg-[var(--color-cream)] text-[var(--color-ashyBlack)]' >
        <Navbar />
      </div>
      <div className=' min-h-screen mx-auto px-4 
      bg-[var(--color-ashyBlack)] text-[var(--color-cream)]'>
        <Hero />
        {/* <About />
          <ElevatorPitch />
          <Projects />
          <Testimonial />
          <Contact /> */}
      </div>
      
    
    
    
    
    
    </>
    

      
      



       

      
    
  );

}

export default App




{/* Navbar
      Hero
      About
      ElevatorPitch
      Projects
      Testimonial
      Contact */}