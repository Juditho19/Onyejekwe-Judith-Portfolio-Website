import React from 'react'
import styles from './style.mjs';


const Projects = () => {
  return (
    <section id="projects"
      className={`bg-base w-full flex flex-col justify-center items-center ${styles.paddingY} bg-base text-text-primary`}>
      <div className={`${styles.container} flex flex-col items-center`}>
        <h2 className={` ${styles.heading2} mb-8 text-center`}>
          My Projects
        </h2>
        {/* card section for project */}
        
      </div>
    </section>
  )
}

export default Projects