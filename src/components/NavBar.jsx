

import { Link} from 'react-router-dom';

export default function Navbar() {
  
 
  
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Betelhem</span>
            
          </h1>
        </Link>
        
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/projects'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Projects
            </li>
          </Link>
          <Link to='/skills'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Skills
            </li>
          </Link>
          <Link to='/contact'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Contact
            </li>
          </Link>
          
        </ul>
      </div>
    </header>
  );
} 