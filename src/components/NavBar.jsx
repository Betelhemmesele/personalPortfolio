import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl'>
            <span className='text-slate-500'>Betelhem</span>
          </h1>
        </Link>

        {/* Hamburger icon for mobile */}
        <div className='sm:hidden'>
          <button onClick={toggleMenu} className='text-slate-700 focus:outline-none'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navbar links */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col sm:flex-row sm:flex gap-4 md:gap-9 sm:gap-0 absolute sm:static top-16 left-0 w-full sm:w-auto bg-slate-200 sm:bg-transparent p-4 sm:p-0 z-50`}
        >
          <Link to='/' onClick={toggleMenu}>
            <li className='text-slate-700 hover:underline py-2 sm:py-0'>Home</li>
          </Link>
          <Link to='/projects' onClick={toggleMenu}>
            <li className='text-slate-700 hover:underline py-2 sm:py-0'>Projects</li>
          </Link>
          <Link to='/skills' onClick={toggleMenu}>
            <li className='text-slate-700 hover:underline py-2 sm:py-0'>Skills</li>
          </Link>
          <Link to='/contact' onClick={toggleMenu}>
            <li className='text-slate-700 hover:underline py-2 sm:py-0'>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
