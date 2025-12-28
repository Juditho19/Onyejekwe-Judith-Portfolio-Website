
const Navbar = () => {
  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>

      <ul className={` list-nonetext-[var(--color-primary)] flex  `} >
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Elevator Pitch</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Testimonial</a></li>
        <li><a href="#">Contact me</a></li>
      </ul>


    </div>
  )

}

export default Navbar