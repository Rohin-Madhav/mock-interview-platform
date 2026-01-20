import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mic, Menu, X } from "lucide-react"

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav >
      <div className='flex place-content-between p-5 '>
        <div className='flex gap-4 font-semibold '>
          <Mic />
          <h1 className=''>MockInterview</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-600   ">
          <Link className='hover:text-gray-800 cursor-pointer' to={""}>Features</Link>
          <Link className='hover:text-gray-800 cursor-pointer' to={""}>Stories</Link>
          <Link className='hover:text-gray-800 cursor-pointer' to={""}>About</Link>
        </div>
        <div className='hidden md:flex  gap-4 '>
          <button className="text-gray-600 hover:text-gray-800 cursor-pointer ">Sign in</button>
          <button className='trialButton'>Start Free Trail</button>
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-gray-600 hover:text-gray-800 focus:outline-none'
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>


      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Links for the mobile view */}
          <Link to={""} className="block text-gray-600 hover:bg-gray-200 p-2 rounded-md">Features</Link>
          <Link to={""} className="block text-gray-600 hover:bg-gray-200 p-2 rounded-md">Stories</Link>
          <Link to={""} className="block text-gray-600 hover:bg-gray-200 p-2 rounded-md">About</Link>

          {/* Buttons for the mobile view */}
          <div className='pt-4'>
            <button className="block w-full text-left text-gray-600 hover:bg-gray-100 p-2 rounded-md">Sign in</button>
            <button className='w-full text-center bg-stone-800 hover:bg-stone-300 text-white hover:text-stone-900 font-semibold py-2 px-4 mt-2 rounded-lg shadow transition duration-150 ease-in-out'>
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
