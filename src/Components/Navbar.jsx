import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
      <div className="nav fixed top-0 left-0 w-full z-50">
       <div className='flex justify-between items-center'>
       <div className="nav-left">
            <img src="" alt="" />
        </div>
        <div className="nav-center p-6 flex justify-center items-center ">
            <ul className='flex justify-center items-center   border-2 border-none   rounded-full bg-gray-200 bg-opacity-20 backdrop-blur-lg'>
                <li className='cursor-pointer hover:bg-white  hover:bg-opacity-80 hover:rounded-full px-4 py-2   hover:text-black '><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='cursor-pointer hover:bg-white  hover:bg-opacity-80 hover:rounded-full px-4 py-2   hover:text-black'><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className='cursor-pointer hover:bg-white  hover:bg-opacity-80 hover:rounded-full px-4 py-2   hover:text-black'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className='cursor-pointer hover:bg-white  hover:bg-opacity-80 hover:rounded-full px-4 py-2  hover:text-black'>  <Link to="Project" smooth={true} duration={500}>Project</Link></li>
            </ul>
        </div>
        <div className="nav-right pr-4 ">
            <button className='cursor-pointer border-2 border-none text-black bg-blue-300  px-4 py-2 rounded-md hover:bg-blue-400 hover:scale-105 duration-300'><Link to="contact" smooth={true} duration={500}>Contact</Link></button>
        </div>
       </div>
      </div>
    </>
  )
}

export default Navbar
