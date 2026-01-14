
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Partners: React.FC = () => {
  const partnerList = [
    { name: "HPE", logo: "HPE", color: "#01a982" },
    { name: "Microsoft", logo: "Microsoft", color: "#00a4ef" },
    { name: "Lenovo", logo: "Lenovo", color: "#e2231a" },
    { name: "Eaton", logo: "Eaton", color: "#005eb8" },
    { name: "Dell", logo: "Dell", color: "#007db8" },
    { name: "Cisco", logo: "Cisco", color: "#1ba0d7" },
    { name: "Fortinet", logo: "Fortinet", color: "#ee3124" },
    { name: "Veeam", logo: "Veeam", color: "#00b336" },
    { name: "VMware", logo: "VMware", color: "#607078" },
    { name: "HP", logo: "HP Inc", color: "#0096d6" },
    { name: "APC", logo: "APC", color: "#3dcd58" },
    { name: "Adobe", logo: "Adobe", color: "#ff0000" },
    { name: "Autodesk", logo: "Autodesk", color: "#0696d7" },
    { name: "Sophos", logo: "Sophos", color: "#0055ff" },
    { name: "Acronis", logo: "Acronis", color: "#0f62fe" },
    { name: "Datto", logo: "Datto", color: "#005eb8" },
    { name: "Arctic Wolf", logo: "Arctic Wolf", color: "#ff0000" },
    { name: "SentinelOne", logo: "SentinelOne", color: "#4d4d4d" },
    { name: "Bitdefender", logo: "Bitdefender", color: "#ed1c24" },
    { name: "SonicWall", logo: "SonicWall", color: "#ff8c00" }
  ];

  // Double the list for infinite scroll effect
  const fullList = [...partnerList, ...partnerList];

  return (
    <div className="min-h-screen indigo-gradient selection:bg-blue-500/30 overflow-x-hidden">
      <SEO 
        title="Our Technology Partners" 
        description="Audcomp partners with over 20 reputable technology brands including HPE, Lenovo, Microsoft, and Eaton to deliver top-tier IT solutions."
      />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 lg:pt-56 lg:pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-aud-orange text-white uppercase tracking-widest">Global Network</span>
            <span className="text-xs font-semibold text-slate-400">20+ Trusted Alliances</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-gradient mb-10 leading-[1.1]">
            Our <span className="italic text-aud-blue">Partners.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
            We have established strong partnerships with the most reputable technology brands in the industry. 
            Benefit from a wide range of technologies through Audcomp’s trusted list of partners, 
            consolidated into one single point of contact.
          </p>
        </div>
      </section>

      {/* Infinite Scroll Logo Section */}
      <section className="relative z-10 pb-32 overflow-hidden">
        <style>
          {`
            @keyframes infiniteScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: infiniteScroll 40s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        
        <div className="animate-scroll gap-8 px-4">
          {fullList.map((partner, idx) => (
            <div 
              key={idx} 
              className="w-[280px] h-[180px] glass-panel rounded-[2rem] border-white/5 flex flex-col items-center justify-center p-8 group transition-all duration-500 hover:border-white/20 hover:scale-105"
            >
              <div 
                className="text-2xl font-black tracking-tighter text-slate-500 group-hover:text-white transition-all duration-500 mb-2"
                style={{ color: 'inherit' }}
              >
                {partner.logo}
              </div>
              <div className="h-1 w-0 group-hover:w-12 transition-all duration-500 rounded-full" style={{ backgroundColor: partner.color }}></div>
              
              {/* Subtle background glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]" 
                style={{ backgroundColor: partner.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Second Row scrolling reverse for dynamic look */}
        <div className="animate-scroll gap-8 px-4 mt-8" style={{ animationDirection: 'reverse' }}>
          {fullList.map((partner, idx) => (
            <div 
              key={`rev-${idx}`} 
              className="w-[280px] h-[180px] glass-panel rounded-[2rem] border-white/5 flex flex-col items-center justify-center p-8 group transition-all duration-500 hover:border-white/20 hover:scale-105"
            >
              <div className="text-2xl font-black tracking-tighter text-slate-500 group-hover:text-white transition-all duration-500 mb-2">
                {partner.logo}
              </div>
              <div className="h-1 w-0 group-hover:w-12 transition-all duration-500 rounded-full" style={{ backgroundColor: partner.color }}></div>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]" 
                style={{ backgroundColor: partner.color }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section (WHITE) */}
      <section className="bg-white text-slate-900 relative z-20 rounded-t-[5rem] py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel bg-slate-50 border-slate-200 rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative group">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-aud-blue mb-6 block">Try and Buy</span>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">Choose the <span className="italic text-aud-orange">Right Solution.</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                Our demo offering is a great way to test technology before committing to the purchase. 
                Our relationships allow us to stay at the forefront of technological advancement, 
                deliver our clients the best value on top-of-the-line tech, and guide you through 
                making an educated decision.
              </p>
              <Link to="/ai-assessment" className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-aud-blue transition-all shadow-2xl group/btn">
                <span>Book a Technology Demo</span>
                <i className="fas fa-desktop group-hover:rotate-12 transition-transform"></i>
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technology Demo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-aud-orange rounded-full flex items-center justify-center text-white font-bold text-center p-4 shadow-xl rotate-12">
                Live Testing
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
