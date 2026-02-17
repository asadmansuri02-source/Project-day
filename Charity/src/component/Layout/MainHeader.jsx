import React from 'react';
import { Play } from 'lucide-react';
import one from '../../assets/sideimg.png';

const MainHeader = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      
      {/* LEFT SECTION - Content */}
      <div className="w-full md:w-1/2 bg-[#F7F4E9] p-8 md:p-16 flex flex-col justify-between relative">
        
        {/* Logo */}
       
<div className="absolute top-8 left-8 md:top-12 md:left-16 text-2xl font-bold text-gray-900 z-30">
  Ta<span className="text-emerald-800">`</span>
</div>

        {/* Main Content */}
        <div className="max-w-lg">
         <h1 className="text-5xl md:text-7xl font-serif text-[#1c2e26] leading-tight mb-8 mr-13 mt-12">
      Charity Is An <br />
      Act Of A Soft <br />
     <span className=' top-8 mr-55 '>Heart.</span>
    </h1>

        <p className="text-[#64748b] text-[18px] md:text-[20px] leading-[1.6] font-normal tracking-tight text-left ">
    We've spent the last 5 years helping over 25,00000 <br className="hidden md:block mr-14" />
    teams just like yourself create and sustain <br className="hidden md:block" />
    successful online support.
  </p>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-20 mt-10">
            <button className="bg-[#056c56] hover:bg-[#045745] text-white px-8 py-4 rounded-sm font-medium transition-colors w-full sm:w-auto">
              Donate Now
            </button>

            {/* Wavy Arrow and Circular Button Container */}
            <div className="flex items-center justify-center">
        <svg 
          width="80" 
          height="40" 
          viewBox="0 0 80 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#1c2e26]"
        ></svg>
       
<div className="relative w-32 h-32 flex items-center justify-center cursor-pointer group">
          {/* Rotating Text Around the Circle */}
          <div className="absolute inset-0 animate-spin-slow ">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
              </defs>
              <text className="text-[9.5px] font-medium tracking-[0.15em] fill-[#1c2e26]">
                <textPath xlinkHref="#circlePath">
                  LEARN ABOUT US THROUGH THIS VIDEO •
                </textPath>
              </text>
            </svg>
          </div>
                
                {/* Play Button Center */}
          <div className="w-14 h-14 bg-[#FDCE45] rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-105">
            <Play size={20} className="fill-[#1c2e26] text-[#1c2e26] ml-1" />
          </div>
        </div>

      </div>
    </div>
    </div>

        {/* Footer Links */}
        <div className="flex gap-12 text-gray-700 font-medium text-sm mt-auto pt-8">
          <a href="#" className="hover:text-black">Youtube</a>
          <a href="#" className="hover:text-black">Facebook</a>
          <a href="#" className="hover:text-black">Instagram</a>
        </div>

        <div className="absolute right-0 top-1/2 hidden md:block w-8 border-t-2 border-dotted border-blue-300 translate-x-4"></div>
      </div>


      {/* RIGHT SECTION - Image & Nav */}
      <div className="w-full md:w-1/2 bg-[#FDCE45] relative flex flex-col">
        
        <nav className="flex justify-center md:justify-end gap-8 p-8 text-gray-800 font-medium text-sm z-20">
          <a href="#" className="hover:text-black">About Us</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="hover:text-black">Campaign</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="hover:text-black">Contact Us</a>
        </nav>

        <div className="flex-1 px-8 pb-8 md:px-12 md:pb-12 relative flex items-end">
          <div className="w-full h-[85%] relative overflow-hidden shadow-2xl">
            {/* Image replaced with your imported 'one' variable */}
            <img 
              src={one} 
              alt="Charity" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MainHeader;