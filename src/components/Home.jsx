import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div
      className="fixed top-14 left-0 w-screen h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp7453551.jpg' }}
    >
     
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Betelhem.
            <br className="hidden lg:inline-block" />I love to code, learn and
            work.
          </h1>
          <p className="mb-8 text-white leading-relaxed">
           A software engineer with passion and creativity.
          </p>
          <div className="flex justify-center">
          <Link to="/contact" className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
  Work With Me
</Link>
<Link to="/projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
  See My Past Work
</Link>
          </div>
        </div>
       
      </div>
    
    </div>
  );
}