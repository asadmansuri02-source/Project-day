import React from "react";

import aboutImg from "../assets/images/about.png";

const About = () => {
  return (
    <section className="bg-[#E8E2D6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Border Line */}
        <div className="border-t border-gray-400 mb-16"></div>

        <div className="grid md:grid-cols-2 justify-left gap-0 relative">
          {/* Left Image Circle */}
          <div className="relative flex justify-center md:justify-start">
            <div className="w-200 h-150 bg-[#9B7B52] rounded-t-full overflow-hidden flex items-end justify-center">
              <img
                src={aboutImg}
                alt="about"
                className=" w-200 object-contain "
              />
            </div>
          </div>

          {/* Right Content Box */}
          <div className="bg-white p-12  text-left h-full flex flex-col justify-end">
            <h2 className="text-5xl font-serif text-[#273734] text-left">
              About Us
            </h2>

            <div className="w-16 h-0.5 bg-gray-400 my-6"></div>

            <p className="text-[#686B6A] leading-7 text-sm text-left">
              The legal definition of a charitable organization (and of charity)
              varies between countries and in some instances regions of the
              country. The regulation, the tax treatment, and the way in which
              charity law affects charitable organizations also vary.
            </p>

            <button className="mt-6  text-[#253631] font-medium hover:underline text-left">
              Read More
            </button>
          </div>
        </div>
        {/* Bottom Border Line */}
        <div className="border-b border-gray-400 mt-16"></div>
      </div>
    </section>
  );
};

export default About;
