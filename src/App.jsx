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
      {/* come bck to the navbar later */}
      {/* <div className=' min-h-screen mx-auto px-4 
      bg-[var(--color-surface)] text-[var(--color-textPrimary)]' >
        <Navbar />
      </div> */}
      
      <main className='w-full min-h-screen bg-base text-text-primary'>
      <Hero />
      {/* <About />
        <ElevatorPitch />
        <Projects />
        <Testimonial />
        <Contact /> */}
      </main>
      
      
    
    
    
    
    
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