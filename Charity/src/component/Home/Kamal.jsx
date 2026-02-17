import React from "react";
import Man from "../../assets/Man.png";

const TestimonialSection = () => {
  return (
    <section className="lg:flex px-8 md:px-16 xl:px-24">
      <div className="lg:w-[45%] bg-yellow-400 rounded-b-full overflow-hidden flex items-center justify-center pt-10 ">
        <img src={Man} alt="" className="" />
      </div>
      <div className="lg:w-[55%]  ">
        <div className="p-10 xl:py-20 bg-white">
          <blockquote className="text-[#5C645F] text-xl md:text-2xl leading-relaxed mb-10 font-normal text-left">
            “We’re very happy that the challegne went well, and we’re grateful
            that we have a partner in Charity Challenge whom we could trust to
            take the best possible care of our supporters.”
          </blockquote>

          <h3 className="text-4xl font-serif font-bold text-[#1D3228] mb-1">
            Mustafa Kamal
          </h3>

          <p className="text-[#8E9893] text-lg">Ceo, Toogle</p>
        </div>
        <div className="pl-10 pt-10 flex items-center space-x-6 mt-10">
          {/* Left Arrow Button */}
          <button className="text-[#1D3228] hover:opacity-50 transition-all p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right Arrow Button with Decorative Ring */}
          <div className="relative flex items-center justify-center">
            {/* The Yellow Semicircle Stroke (Decorative Ring) */}
            <svg
              className="absolute w-16 h-16 -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#FFD040" // Exact Yellow
                strokeWidth="3"
                strokeDasharray="160 314" // This makes the ring partial
                strokeLinecap="round"
              />
            </svg>

            {/* The Actual Button */}
            <button className="w-12 h-12 bg-[#F7F3E9] rounded-full flex items-center justify-center text-[#1D3228] hover:bg-[#FFD040] transition-colors z-10">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
