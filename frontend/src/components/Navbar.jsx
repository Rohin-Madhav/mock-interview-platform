import React from 'react'
import { Link } from 'react-router-dom'
import { Mic } from "lucide-react"

function Navbar() {
  return (
    <nav >
      <div className='flex place-content-between p-5 '>
        <div className='flex gap-4 font-semibold '>
          <Mic className='' />
          <h1 className=''>MockInterview</h1>
        </div>
        <div className="flex gap-4 text-gray-600  ">
          <Link className='hover:text-gray-800 cursor-pointer' to={""}>Features</Link>
          <Link className='hover:text-gray-800 cursor-pointer' to={""}>Stories</Link>
          <Link className='hover:text-gray-800 cursor-pointer' to={""}>About</Link>
        </div>
        <div className='flex gap-4 '>
          <button className="text-gray-600 hover:text-gray-800 cursor-pointer ">Sign in</button>
          <button className='trialButton'>Start Free Trail</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
