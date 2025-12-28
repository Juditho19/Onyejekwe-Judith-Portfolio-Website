import React from 'react'

const Hero = () => {
  return (
    <div>
      {/* hero text side by side to image */}
      <div className='block md:flex md:flex-col 
        md:justify-center md:items-start text-left 
        space-y-4 md:space-y-6 '>
        <h3 className='font-medium text-base '>Quick Learner | Detail-Oriented |
          Adaptable
        </h3>
        <h1 className='font-extrabold text-7xl'>Judith <br />Onyejekwe</h1>
        <h2 className='font-bold text-6xl'>Front-End Developer</h2>
        <p className='font-medium text-sm text-[var(--color-pale-orange)]' >PORTFOLIO</p>
      </div>
      <div>
        <img src="/hero-image.jpg" alt="hero image" />
      </div>


    </div>
  )
}

export default Hero