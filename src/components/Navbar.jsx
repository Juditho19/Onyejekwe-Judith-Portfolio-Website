import styles from "./style.mjs"
const Navbar = () => {
  return (
    // button
    <nav className='w-full flex py-3 '>

      {/* mobile view first */}
      <ul className={`w-full list-none text-[var(--color-primary)] flex justify-around items-center
      md:justify-center md:gap-8 md:text-base  `} >
        <li><a href="#" className={`${styles.navButtons}`} >Home</a></li>
        <li><a href="#" className={`${styles.navButtons}`}>About Me</a></li>
        <li><a href="#" className={`${styles.navButtons}`}>Elevator Pitch</a></li>
        <li><a href="#" className={`${styles.navButtons}`}>Projects</a></li>
        <li><a href="#" className={`${styles.navButtons}`}>Testimonial</a></li>
        <li><a href="#" className={`${styles.navButtons}`}>Contact me</a></li>
      </ul>


    </nav>
  )

}

export default Navbar