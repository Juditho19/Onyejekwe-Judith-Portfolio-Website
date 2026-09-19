import React from 'react'
import styles from "./style.mjs"
import heroImage from "../assets/heroImage.png"

const Hero = () => {
  return (
   
      

     <div className='flex flex-col items-center justify-center gap-8 px-4 py-16 sm:px-6 lg:px-8'>
      {/* //have image and text side by side */}
        <div className='flex w-full max-w-3xl flex-col items-start space-y-5 text-left md:space-y-6'>
          <p className='font-medium text-accent'>
            Front-End Software Developer
          </p>
          <h1 className='text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl'>
            Judith Onyejekwe
          </h1>
          <p className='max-w-2xl text-base font-medium leading-7 text-text-muted sm:text-lg'>
            Building high-performance, responsive web applications with React and modern JavaScript. Focused on clean UI architecture and accessible user experiences.
          </p>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <button className={styles.regularButtons}>View Projects</button>
            <button className={styles.regularButtons}>Download Resume</button>
          </div>
        </div>

        <div className='flex w-full max-w-3xl justify-center'>
          <img src={heroImage} alt="Hero Image" className='rounded-lg shadow-lg' />
        </div>
      </div>
     
      
  )
}

export default Hero