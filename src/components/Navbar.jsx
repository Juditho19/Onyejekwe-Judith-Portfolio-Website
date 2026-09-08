import styles from "./style.mjs"
import hamburgerMenu from "../assets/hamburgerMenu.svg"
import close from "../assets/close.svg"
import { useState } from "react";

const navLinks= [
  {name:"Home", href: "#home"},
  {name:"About Me", href: "#about"},
  {name:"Elevator Pitch", href: "#pitch"},
  {name:"Projects", href: "#projects"},
  {name:"Testimonial", href: "#testimonials"},
  {name:"Contact me", href: "#contact"},

];

// hide the menu
const [isOpen, setIsOpen ] = useState(false);



const Navbar = () => {
  return (
    // button
    <nav className='w-full flex py-3  '>

      
        {/*desktop view */}
        <ul className="hidden list-none text-[var(--color-primary)] 
        md:flex md:justify-around md:items-center md:gap-8 md:text-base 
        m-0 p-0">
          {navLinks.map((link) => (
              <li key={navLinks.name}>
                <a href={link.href} className={styles.navButtons}>
                  {link.name}
                </a>   
              </li>

          ))}
          

        </ul>



      {/* menu (mobile/tablet only) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 p-2 focus:outline-none">
          {/* z-50- stays in front */}
        aria-label="Toggle Menu"
        <img src={isOpen ? close : hamburgerMenu} 
        alt={isOpen ? "Close menu" : "Open menu"}
        className="w-6 h-6 object-contain"/>
        
      </button>



    </nav>
  )

}

export default Navbar