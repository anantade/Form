import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  // State to toggle the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div >
      <nav className='bg-gray-900 flex  pt-1 pb-2 relative shadow-lg shadow-gray-800 items-center justify-center'>
        
        <div>
          <Link to="/">
            <p className='md:pl-20 text-white md:font-sans text-2xl '><b>Navbar</b></p>
            
          </Link>
        </div>
        
        {/* Mobile Menu Icon (Hamburger) */}
        <div className='md:hidden ml-[40%] text-white'>
          <a className='text-4xl' href="#" onClick={toggleMobileMenu}>&#8801;</a>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden absolute top-16 right-0 left-0 bg-gray-900 z-50'>
            <ul className='flex flex-col items-center text-white'>
              <li className='my-2'>
                <Link to="" onClick={toggleMobileMenu}>
                  Who I am
                </Link>
              </li>
              <li className='my-2'>
                <Link to="" onClick={toggleMobileMenu}>
                  Service
                </Link>
              </li>
              <li className='my-2'>
                <Link to="" onClick={toggleMobileMenu}>
                  Product
                </Link>
              </li>
              <li className='my-2'>
                <Link to="" onClick={toggleMobileMenu}>
                  Blog
                </Link>
              </li>
              <li className='my-2'>
                <Link to="" onClick={toggleMobileMenu}>
                  Event
                </Link>
              </li>
            </ul>
            
          </div>
        )}

        {/* Desktop Menu */}
        <div className='ml-[40%] pt-3 hidden md:block'>
          <Link to="">
            <p className='text-white cursor-pointer'>Who I am</p>
          </Link>
        </div>
        <div className='ml-8 pt-3 hidden md:block'>
          <Link to="">
            <p className='text-white cursor-pointer'>Service</p>
          </Link>
        </div>
        <div className='ml-8 pt-3 hidden md:block'>
          <Link to="">
            <p className='text-white cursor-pointer'>Product</p>
          </Link>
        </div>
        <div className='ml-8 pt-3 hidden md:block'>
          <Link to="">
            <p className='text-white cursor-pointer'>Blog</p>
          </Link>
        </div>
        <div className='ml-8 pt-3 hidden md:block'>
          <Link to="">
            <p className='text-white cursor-pointer'>Event</p>
          </Link>
        </div>
        <div className='ml-8 hidden md:block'>
          <button className='cursor-pointer hover:bg-pink-700 text-white rounded-xl bg-orange-400 w-24 h-12'>
            Lets Meet
          </button>
        </div>
      </nav>
    </div>
  );
}
