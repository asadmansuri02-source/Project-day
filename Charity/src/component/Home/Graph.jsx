import React from "react";
import { HeartHandshake, Package, Megaphone, Globe } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      icon: <HeartHandshake size={48} strokeWidth={1.5} />,
      value: "985+",
      label: "Donation Received",
    },
    {
      icon: <Package size={48} strokeWidth={1.5} />,
      value: "$10 M",
      label: "Money Donated",
    },
    {
      icon: <Megaphone size={48} strokeWidth={1.5} />,
      value: "12+",
      label: "Active Campaigns",
    },
    {
      icon: <Globe size={48} strokeWidth={1.5} />,
      value: "$60 M",
      label: "Charity in last Year",
    },
  ];

  return (
    <section className="relative bg-[#006B4E] py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Dark Green Shapes */}
      <div className="absolute -top-10 left-[30%] w-32 h-48 bg-[#005842] rounded-full opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-10 left-[5%] w-32 h-48 bg-[#005842] rounded-full opacity-50 pointer-events-none"></div>
      <div className="absolute -top-10 right-[15%] w-32 h-48 bg-[#005842] rounded-full opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-10 right-[40%] w-32 h-48 bg-[#005842] rounded-full opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center space-x-6 text-white">
              {/* Icon Container */}
              <div className="flex-shrink-0 opacity-90">{item.icon}</div>

              {/* Text Content */}
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold font-sans">
                  {item.value}
                </span>
                <span className="text-[#D1D5D2] text-sm md:text-base font-medium tracking-wide">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
