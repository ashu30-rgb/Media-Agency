import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function Header() {
const location = useLocation()
  return (
    <header className="text-gray-600 body-font !w-screen max-w-full overflow-x-hidden">
    <div className="container mx-auto flex flex-wrap p-5 md:px-7 flex-col md:flex-row items-center">
      <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img width="218" height="56" src="https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2020/06/logo-retina-free-img.png" alt="logo" />
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-sm md:text-lg text-white justify-center">
        <Link to="/" className={`mr-4 md:mr-7 lg:hover:scale-105 shadow-sm ${location.pathname==="/"?"font-semibold":""}`}>Home</Link>
        <Link to="/about" className={`mr-4 md:mr-7 lg:hover:scale-105 ${location.pathname==="/about"?"font-semibold":""}`}>About</Link>
        <Link to="/services" className={`mr-4 md:mr-7 lg:hover:scale-105 ${location.pathname==="/services"?"font-semibold":""}`}>Services</Link>
        <Link to="/portfolio" className={`mr-4 md:mr-7 lg:hover:scale-105 ${location.pathname==="/portfolio"?"font-semibold":""}`}>Portfolio</Link>
      </nav>
      <Link to="/contact" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-sm md:text-lg mt-4 md:mt-0">Contact
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  </header>
  )
}

export default Header