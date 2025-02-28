import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsSearch} from "react-icons/bs"; 
import {FaBars} from "react-icons/fa"
import Menu from './Menu'
import { UserContext } from '../context/userContext';


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
            <div className='flex items-center justify-between px-50 md:px-{200px} py-4 bg-black text-white'>
                <h1 className='text-lg md:text-xl font-extrabold'>
                    <Link to="/">Blogoshere</Link>

                </h1>
                {path === "/" && <div onChange={(e) => setPrompt(e.target.value)} className='flex justify-center items-center space-x-0'>
                    <input className='outlin-none rounded-l-xl px-3 text-black bg-white' placeholder='Search a post' type='text' />
                    <p onClick={() => navigate(prompt ? "?search" + prompt : navigate("/"))} className='cursor-pointer p-1 bg-white text-black rounded-r-xl'>
                        <BsSearch />
                    </p>
                </div>}
                <div className='hidden md:flex items-center justify-center space-x-4'>
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
                    {menu && <Menu />}
            

                </div>

            </div>
            <div>
            </div>



{/* <!-- component -->
<!-- This is an example component --> */}
{/* <div class="max-w-2xl mx-auto">

<nav class="border-gray-200 px-2 mb-10">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
  <a href="#" class="flex">
    <svg class="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"></rect></clipPath></defs></svg>
      <span class="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
  </a>
  <div class="flex md:order-2">
      <div class="relative mr-3 md:mr-0 hidden md:block">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="email-adress-icon" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search..."></input>
      </div>
      <button data-collapse-toggle="mobile-menu-3" type="button" class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
    <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#" class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About</a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

   
</div>

<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script> */}

        </div>
    )
}

export default Navbar
