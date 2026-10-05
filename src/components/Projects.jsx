import React from 'react'
import styles from './style.mjs';

const Projects = () => {
  return (
    <section id="projects"
      className={`bg-white w-full flex justify-center items-center ${styles.paddingY} bg-base text-text-primary`}>
      <h2 className={styles.heading2} >
        My Projects
      </h2>
    </section>
  )
}

export default Projects