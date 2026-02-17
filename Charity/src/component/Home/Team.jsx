import React from 'react';

// Importing your local assets
import Group1 from '../../assets/Group1.png';
import Group2 from '../../assets/Group2.png';
import Group3 from '../../assets/Group3.png';
import Group4 from '../../assets/Group4.png';

const TeamCard = ({ name, role, image, accentColor, arcSide }) => {
  // Exact color matches from the design
  const colors = {
    yellow: {
      bg: 'bg-[#FFD03F]', // Golden yellow
      border: 'border-[#FFD03F]',
    },
    green: {
      bg: 'bg-[#006A4E]', // Deep forest green
      border: 'border-[#006A4E]',
    }
  };

  const selected = colors[accentColor];

  return (
    <div className="flex flex-col items-center">
      {/* Decorative Image Container */}
      <div className="relative w-56 h-56 mb-6 flex items-center justify-center">
        
        {/* 1. The Solid Background Circle (Behind the person) */}
        <div className={`absolute w-40 h-40 rounded-full ${selected.bg}`}></div>
        
        {/* 2. Outer Decorative Arc */}
        <div className={`absolute w-52 h-52 border-2 rounded-full border-transparent 
          ${arcSide === 'left' ? 'border-l-current ml-4' : 'border-r-current mr-4'} 
          ${selected.border} opacity-80`}>
        </div>

        {/* 3. Inner Decorative Arc */}
        <div className={`absolute w-[184px] h-[184px] border-2 rounded-full border-transparent 
          ${arcSide === 'left' ? 'border-l-current ml-1' : 'border-r-current mr-1'} 
          ${selected.border} opacity-50`}>
        </div>

        {/* 4. The Profile Image */}
        <div className="relative w-44 h-44 rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center">
        <h3 className="text-3xl font-serif font-semibold text-[#2D3E35] mb-1">
          {name}
        </h3>
        <p className="text-base font-sans text-[#8E9893] tracking-wide">
          {role}
        </p>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const team = [
    {
      name: "Lily gomez",
      role: "Founder",
      image: Group1,
      accentColor: "yellow",
      arcSide: "right"
    },
    {
      name: "Dm Lincoln",
      role: "C0-Founder",
      image: Group2,
      accentColor: "green",
      arcSide: "left"
    },
    {
      name: "Serena Mei",
      role: "Manager",
      image: Group3,
      accentColor: "yellow",
      arcSide: "right"
    },
    {
      name: "Abdel Latif",
      role: "Superviser",
      image: Group4,
      accentColor: "green",
      arcSide: "left"
    }
  ];

  return (
    <section className="bg-[#F7F3E9] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-6xl md:text-7xl font-serif text-[#2D3E35] mb-8">
            Our Team
          </h2>
          {/* Decorative Horizontal Line */}
          <div className="w-32 h-[1px] bg-[#2D3E35]/30"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-4">
          {team.map((member, index) => (
            <TeamCard 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              accentColor={member.accentColor}
              arcSide={member.arcSide}
            />
          ))}
        </div>
      </div>
      <hr className="mt-30 border-t border-gray-300" />
    </section>
  );
};

export default OurTeam;