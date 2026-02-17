import React from "react";

const CharityBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#006A4E] py-20 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-10 mt-28">
      {/* Background Decorative Wavy Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 300C50 150 250 450 400 300C550 150 750 250 1050 100"
            stroke="white"
            strokeWidth="40"
            strokeLinecap="round"
          />
          <path
            d="M-100 200C100 50 350 350 550 200C750 50 900 150 1100 50"
            stroke="white"
            strokeWidth="40"
            strokeLinecap="round"
          />
          <circle cx="100" cy="100" r="150" stroke="white" strokeWidth="30" />
          <circle cx="850" cy="350" r="180" stroke="white" strokeWidth="30" />
        </svg>
      </div>

      {/* Heading Text */}
      <h2 className="relative z-10 text-white text-5xl md:text-6xl lg:text-6xl font-serif font-bold leading-tight max-w-3xl">
        Let’s Help Other With Your Charity
      </h2>

      {/* Call to Action Button */}
      <button className="relative z-10 bg-[#FFD040] text-[#1D3228] px-12 py-5 text-xl font-bold shadow-lg hover:bg-[#e6bb39] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap">
        Donate Now
      </button>
    </section>
  );
};

export default CharityBanner;
