import './index.css';
import {
  Navbar,
  Hero,
  Projects,
  Testimonial,
  Contact,
} from './components/index';
import ProjectCard from './components/ProjectCard';
import projectImage1 form './assets/project1.png';



function App() {

  // Temporary mock data to test the card visually
  const sampleProject = {
    title: "Optimal Healthcare Platform",
    category: "Front-End Architecture",
    image: project1Img,
    description: "A modern mobile diagnostics web platform providing structured clinical service catalogs and automated booking.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Apps Script"]
  };
  return (
  
    <>
      {/* come bck to the navbar later */}
      {/* <div className=' min-h-screen mx-auto px-4 
      bg-[var(--color-surface)] text-[var(--color-textPrimary)]' >
        <Navbar />
      </div> */}
      
      <main className='w-full min-h-screen bg-base text-text-primary'>
      <Hero />
      <Projects className="bg-white text-text-primary" />
      
      {/*
        
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