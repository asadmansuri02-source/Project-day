import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#F7F3E9] py-20 px-6 md:px-12 lg:px-24 font-sans relative">
      {/* Top Decorative Line */}
      <div className="absolute top-10 left-10 right-10 h-[1px] bg-black/5 hidden md:block"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* LEFT SIDE: ARCHED IMAGE */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          {/* The Arch Shape Mask */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-[#A1825B] rounded-t-full overflow-hidden shadow-xl">
            {/* Person Image */}
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
              alt="Volunteers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT CARD */}
        <div className="w-full lg:w-[60%] lg:-ml-20 mt-10 lg:mt-0 z-10">
          <div className="bg-white p-10 md:p-16 lg:p-20 shadow-sm border border-black/5">
            {/* Heading */}
            <h2 className="text-6xl md:text-7xl font-serif text-[#1D3228] mb-6">
              About Us
            </h2>

            {/* Decorative Divider */}
            <div className="w-16 h-[1.5px] bg-[#1D3228]/40 mb-10"></div>

            {/* Paragraph Text */}
            <p className="text-[#5C645F] text-lg leading-relaxed mb-12">
              The legal definition of a charitable organization (and of charity)
              varies between countries and in some instances regions of the
              country. The regulation, the tax treatment, and the way in which
              charity law affects charitable organizations also vary.
            </p>

            {/* Link */}
            <a
              href="#"
              className="text-[#1D3228] font-bold text-lg border-b-2 border-[#1D3228] pb-1 hover:opacity-70 transition-opacity"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-10 left-10 right-10 h-[1px] bg-black/5 hidden md:block"></div>
    </section>
  );
};

export default AboutUs;
