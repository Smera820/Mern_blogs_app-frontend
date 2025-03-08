import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsSearch} from "react-icons/bs"; 
import {FaBars} from "react-icons/fa"
import Menu from './Menu'
import { UserContext } from '../context/UserContext';


function Navbar() {
    const [promt, setPrompt] = useState(" ")
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()
    const path = useLocation().pathname

    const showMenu = () => {
        showMenu(!menu)
    }
    const { user } = useContext(UserContext)

    return (
        <div>
            {/* <div className='flex items-center justify-between px-50 md:px-{200px} py-4 bg-black text-white'>
                {/* <h1 className='text-lg md:text-xl font-extrabold'>
                    <Link to="/">Blogoshere</Link>

                </h1> */}
                {/* {path === "/" && <div onChange={(e) => setPrompt(e.target.value)} className='flex justify-center items-center space-x-0'>
                    <input className='outlin-none rounded-l-xl px-3 text-black bg-white' placeholder='Search a post' type='text' />
                    <p onClick={() => navigate(prompt ? "?search" + prompt : navigate("/"))} className='cursor-pointer p-1 bg-white text-black rounded-r-xl'>
                        <BsSearch />
                    </p>
                </div>} */}
                {/* <div className='hidden md:flex items-center justify-center space-x-4'>
                    {
                        user ? <h3><Link to='/write'>Write</Link></h3> : <h3>
                            <Link to="/login">Login</Link>
                        </h3>
                    }
                    {user ? <div onClick={showMenu}>
                        <p className='cursor-pointer relative'></p>
                            <FaBars />
                            {menu && <Menu />}

                        
                    </div> : <h3><Link to='/register'>Register</Link></h3>}
                </div>
                <div onClick={showMenu} className='md:hidden text-lg'>
                    <p className='cursor-pointer relative'></p>
                    <FaBars />
                    {menu && <Menu />} */}
            

                {/* </div> */}

            {/* </div>  */}
            




<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
      
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page"><Link to="/">Blogoshpere</Link></a>
            {path === "/" && <div onChange={(e) => setPrompt(e.target.value)} className='flex justify-center items-center space-x-0'>
                    <input className='outlin-none rounded-l-xl px-3 text-black bg-white' placeholder='Search a post' type='text' />
                    <p onClick={() => navigate(prompt ? "?search" + prompt : navigate("/"))} className='cursor-pointer p-1 bg-white text-black rounded-r-xl'>
                        <BsSearch />
                    </p>
                    <div className='hidden md:flex  items-center justify-center space-x-4 '>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to="/login">Login</Link></a>
         <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to="/register">Register</Link></a>
</div>
                </div>}
          </div>
        </div>
      </div>
     
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page"><Link to="/">Blogoshere</Link></a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to="/login">Login</Link></a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to="/register">Register</Link></a>
      {/* <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a> */}
    </div>
  </div>
</nav>


        </div>
    )
}

export default Navbar
