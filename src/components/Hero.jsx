import React from 'react';
import styles from './style.mjs';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-base">
      
      {/* 2-Column Grid Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Buttons (Takes 7 of 12 columns on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
          <p className="text-sm font-medium text-accent">
            Front-end developer · Available for freelance
          </p>

          <h1 className={styles.heading1}>
            I build fast, clean websites that win customers.
          </h1>

          <p className={styles.paragraph}>
            Student developer turning ideas into responsive, accessible interfaces for small businesses and startups.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" className={styles.regularButtons}>
              View my work
            </a>
            <a
              href="#resume"
              className={`${styles.regularButtons} bg-surface border border-surface-border text-text-primary hover:border-accent`}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/*Real Project Teaser Card- add later, remove min-h-[340px] later  */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md min-h-[340px] rounded-2xl border-2 border-dashed border-surface-border bg-surface/30 flex flex-col items-center justify-center p-6 text-center text-text-muted">
            <span className="text-sm font-mono text-accent">Feature Card Slot</span>
            <p className="text-xs text-text-muted mt-2 max-w-xs">
              Space reserved for project teaser card / live preview
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;