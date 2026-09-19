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
      <div className='min-h-screen bg-base text-text-primary'>
        <main className='mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-16'>
        <Hero />
        {/* <About />
          <ElevatorPitch />
          <Projects />
          <Testimonial />
          <Contact /> */}
        </main>
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