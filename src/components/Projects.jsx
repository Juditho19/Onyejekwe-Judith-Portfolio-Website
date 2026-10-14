import React from 'react'
import styles from './style.mjs';
import project1 from '../assets/projects/project1.png';

const Projects = () => {
  return (
    <section id="projects"
      className={`bg-base w-full flex flex-col justify-center items-center ${styles.paddingY} bg-base text-text-primary`}>
      <div className={`${styles.container} flex flex-col items-center`}>
        <h2 className={` ${styles.heading2} mb-8 text-center`}>
          My Projects
        </h2>
        {/* card section for project */}
        <article className="w-full max-w-3xl flex flex-col gap-4 p-4 rounded-lg border-2 border-surface-border bg-surface/30
                            items-center justify-center text-left text-text-muted">
        <img src={project1} alt="Project 1 " width="100%" size="medium" className="rounded-lg" />
        <h3 className={styles.heading3}> Optimal Healthcare Platform</h3>
        {/* summary */}
        <p className={styles.paragraph}>
         A modern mobile diagnostics web platform providing structured clinical service catalogs and an automated appointment booking workflow. Built with responsive UI layouts to streamline patient onboarding from service discovery to doorstep lab scheduling.
        </p>

        <ul aria-label="Technologies used" className="list-disc list-inside text-">
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>Tailwind CSS</li>
          <li>Google Apps Script</li>
        </ul>

        <ul aria-label="key outcomes">
          <li>
            <strong>Direct Booking Flow:</strong> Integrated seamless scheduling replacing manual email/call intake[cite: 8].
          </li>
          <li>
            <strong>Responsive Architecture:</strong> Fully optimized across mobile, tablet, and desktop viewports[cite: 8].
          </li> 
        </ul >
        
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Live Demo ↗
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            GitHub Code ↗
          </a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Projects