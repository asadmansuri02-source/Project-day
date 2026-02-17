import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F7F3E9] pt-20 pb-10 px-6 md:px-20 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION: 4 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-4xl font-serif text-[#1D3228] mb-6">
              Newsletter
            </h3>
            <p className="text-[#8E9893] mb-8 text-normal text-nowrap">
              Subscribe to our newsletter to get more informations
            </p>

            {/* Input Group */}
            <div className="flex bg-white p-1 max-w-md shadow-sm">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 outline-none text-[#1D3228] placeholder-[#8E9893]"
              />
              <button className="bg-[#00715D] text-white px-8 py-3 font-medium hover:bg-[#005a4a] transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="ml-40">
            <h3 className="text-4xl font-serif text-[#1D3228] mb-8">
              Navigation
            </h3>
            <ul className="space-y-5 text-[#8E9893] text-lg">
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                Campaign
              </li>
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                Team
              </li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div className="ml-40">
            <h3 className="text-4xl font-serif text-[#1D3228] mb-8">
              About Us
            </h3>
            <ul className="space-y-5 text-[#8E9893] text-lg">
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                Contact
              </li>
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                Address
              </li>
            </ul>
          </div>

          {/* Column 4: Help */}
          <div className="ml-40">
            <h3 className="text-4xl font-serif text-[#1D3228] mb-8">Help</h3>
            <ul className="space-y-5 text-[#8E9893] text-lg">
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                Donar Guide
              </li>
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                FAQ
              </li>
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                We Are Hiring
              </li>
              <li className="hover:text-[#1D3228] cursor-pointer transition-colors">
                Returns
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="border-t border-[#D1D5D2] pt-8 flex flex-col md:flex-row justify-between items-center text-[#8E9893] text-sm tracking-wider">
          <p>Designed By Tanim Khan</p>
          <p className="mt-4 md:mt-0 uppercase">WWW.Dribble.Com/Tanim_ui</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
