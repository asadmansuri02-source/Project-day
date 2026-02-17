import React from "react";
import bottle from "../../assets/Bottle.png";
import injection from "../../assets/Injection.png";
import thela from "../../assets/thela.png";

const SupportCommunity = () => {
  // Campaign Card Component - Now uses the 'image' prop correctly
  const CampaignCard = ({ image, title, isTall = false }) => (
    <div className="flex flex-col bg-white overflow-hidden shadow-sm">
      <div
        className={`${isTall ? "aspect-[3/4]" : "aspect-square md:aspect-video"} overflow-hidden`}
      >
        <img
          src={image} // Changed from 'bottle' to the 'image' prop
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-[#2D3E35]">{title}</h3>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F8F4EB] min-h-screen py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif text-[#2D3E35] leading-tight text-left">
                Support Your Community
              </h1>
              <div className="w-20 h-[1px] bg-[#2D3E35]/40"></div>
              <p className="text-[#5C645F] text-sm md:text-base max-w-lg leading-relaxed">
                The legal definition of a charitable organization (and of
                charity) varies between countries and in charity law affects
                charitable organization also vary.
              </p>
            </div>

            {/* Nested Grid using imported images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <CampaignCard
                title="Covid - 19"
                image={injection} // Used imported injection image
              />
              <CampaignCard
                title="Food Bank"
                image={thela} // Used imported thela image
              />
            </div>
          </div>

          {/* RIGHT FEATURED CARD */}
          <div className="flex flex-col space-y-6">
            <CampaignCard
              isTall={true}
              title="Safe Water"
              image={bottle} // Used imported bottle image
            />

            {/* View All Button */}
            <div className="flex justify-end lg:justify-start">
              <a
                href="#"
                className="text-[#2D3E35] font-semibold text-sm border-b border-[#2D3E35] pb-1 hover:opacity-70 transition-opacity ml-23 mt-4"
              >
                View All Campaign
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-30 border-t border-gray-300" />
    </section>
  );
};

export default SupportCommunity;
