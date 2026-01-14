
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{ 
  title: string; 
  items: string[]; 
  image: string; 
  accentColor: string;
  glowColor: string;
}> = ({ title, items, image, accentColor, glowColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-panel rounded-[2.5rem] border-white/5 transition-all duration-700 group flex flex-col h-full relative overflow-hidden hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? `0 25px 50px -12px ${glowColor}44` : 'none',
        borderColor: isHovered ? `${glowColor}66` : 'rgba(255,255,255,0.05)'
      }}
    >
      {/* Dynamic Image Container */}
      <div className="h-56 relative overflow-hidden">
        <img 
          src={image} 
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[800ms] ease-out
            ${isHovered ? 'scale-110 grayscale-0 opacity-100' : 'scale-100 grayscale opacity-40'}
          `}
          alt={title}
        />
        {/* Dynamic Overlay Color Blend */}
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ${accentColor} 
            ${isHovered ? 'opacity-10' : 'opacity-20'}`}
        ></div>
        
        {/* Animated Accent Bottom Line */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-700 ease-in-out"
          style={{ width: isHovered ? '100%' : '0%', left: isHovered ? '0%' : '50%' }}
        ></div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-10 bg-[#0d0e25]/40 backdrop-blur-sm">
        <h3 className={`text-2xl font-bold mb-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-200'}`}>
          {title}
        </h3>
        <ul className="space-y-4 mb-8 flex-grow">
          {items.map((item, idx) => (
            <li 
              key={idx} 
              className={`flex items-start gap-3 transition-all duration-500 ${isHovered ? 'text-slate-200 translate-x-1' : 'text-slate-400'}`}
              style={{ transitionDelay: isHovered ? `${idx * 50}ms` : '0ms' }}
            >
              <i className={`fas fa-check-circle text-[10px] mt-1.5 transition-colors duration-500 ${isHovered ? 'text-aud-blue' : 'text-slate-600'}`}></i>
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-white/5">
          <Link 
            to="/ai-assessment" 
            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-all flex items-center justify-between group/link"
          >
            <span>Consult Specialist</span>
            <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-white text-black border-white shadow-lg' : ''}`}>
              <i className="fas fa-arrow-right text-[10px]"></i>
            </div>
          </Link>
        </div>
      </div>

      {/* Subtle Background Radial Glow */}
      <div 
        className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[60px] transition-opacity duration-1000 pointer-events-none
          ${isHovered ? 'opacity-30' : 'opacity-0'}`}
        style={{ backgroundColor: glowColor }}
      ></div>
    </div>
  );
};

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Managed IT Services",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      accent: "bg-aud-blue",
      glowColor: "#5c7cff",
      items: [
        "Managed IT Support",
        "24/7 Expert Help Desk",
        "Backup & Disaster Recovery",
        "DAAS (Device as a Service)",
        "Strategic IT Procurement"
      ]
    },
    {
      title: "Cyber Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      accent: "bg-aud-orange",
      glowColor: "#f7941d",
      items: [
        "Endpoint Protection & EDR",
        "SOC & MDR Monitoring",
        "Penetration Testing & Audits",
        "Managed Firewall",
        "Security Awareness Training",
        "Dark Web Monitoring"
      ]
    },
    {
      title: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      accent: "bg-blue-400",
      glowColor: "#60a5fa",
      items: [
        "Microsoft Office 365",
        "Microsoft Azure Infrastructure",
        "Hybrid Cloud Environments",
        "Office 365 Cloud Backup",
        "Microsoft Teams Collaboration"
      ]
    },
    {
      title: "Professional Services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      accent: "bg-indigo-600",
      glowColor: "#4f46e5",
      items: [
        "Virtual CIO (vCIO)",
        "Consulting & Architecture",
        "Implementation & Migration",
        "Structured Cabling",
        "Microsoft Co-Pilot Enablement"
      ]
    }
  ];

  return (
    <div className="min-h-screen indigo-gradient selection:bg-blue-500/30 overflow-x-hidden">
      <SEO 
        title="Full Spectrum IT Services" 
        description="Explore Audcomp's comprehensive IT solutions: Managed IT, SOC, Azure Cloud, and Microsoft Co-Pilot enablement for modern enterprises."
      />
      
      {/* Background Accents */}
      <div className="fixed top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none z-0 glow-sphere blur-[120px] bg-blue-600/5"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 glow-sphere blur-[120px] bg-aud-orange/5"></div>

      {/* Hero Section (DARK) */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-aud-blue text-white tracking-widest uppercase">Portfolio</span>
            <span className="text-xs font-semibold text-slate-400 tracking-tight">Enterprise Capabilities</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-gradient mb-10 leading-[1.1]">
            Technical <span className="italic text-aud-orange">Infrastructures.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Deploying resilient managed support, military-grade cyber defense, and production-ready AI solutions for the Canadian industrial and enterprise sector.
          </p>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce opacity-20 mt-12">
            <i className="fas fa-chevron-down text-2xl"></i>
          </div>
        </div>
      </section>

      {/* Services Grid (DARK) */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((cat, i) => (
              <ServiceCard 
                key={i} 
                title={cat.title} 
                items={cat.items} 
                image={cat.image} 
                accentColor={cat.accent}
                glowColor={cat.glowColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service: Co-Pilot (DARK GLASS) */}
      <section className="relative z-10 px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative border-white/10 group">
            <div className="lg:w-1/2 relative z-10 text-left">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-10 shadow-inner">
                <i className="fas fa-wand-magic-sparkles text-aud-orange text-2xl animate-pulse"></i>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">Microsoft Co-Pilot Enablement</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Ready your organization for the next generation of productivity. We handle the data governance, security posture, and production implementation of Microsoft's powerful AI assistant.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  'Security & Governance Guardrails', 
                  'Information Architecture Readiness', 
                  'Strategic Pilot Deployment'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 text-white font-bold text-lg">
                    <div className="w-8 h-8 rounded-full bg-aud-orange/20 border border-aud-orange/30 flex items-center justify-center text-aud-orange">
                      <i className="fas fa-bolt text-[10px]"></i>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-[#0d0e25] px-10 py-5 rounded-2xl font-black hover:bg-aud-orange hover:text-white transition-all shadow-2xl flex items-center gap-3">
                <span>Start Readiness Audit</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <div className="lg:w-1/2 relative">
              {/* Circular Orbit Effect */}
              <div className="absolute inset-0 border border-white/5 rounded-full scale-125 animate-[spin_20s_linear_infinite] pointer-events-none"></div>
              <div className="absolute inset-0 border border-white/5 rounded-full scale-150 animate-[spin_35s_linear_infinite_reverse] pointer-events-none"></div>
              
              <div className="absolute -inset-4 rounded-[3.5rem] blur-[60px] opacity-20 bg-aud-orange transition-all duration-1000 group-hover:opacity-40"></div>
              <div className="relative glass-panel border-white/20 p-6 rounded-[3.5rem] bg-slate-900/40 backdrop-blur-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4628c7007?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Co-Pilot Interface" 
                  className="rounded-[2.5rem] opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e25]/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (WHITE) */}
      <section className="bg-white text-slate-900 relative z-20 rounded-t-[5rem] py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 block">Legacy of Trust</span>
            <h2 className="text-6xl font-bold tracking-tight">Verified <span className="text-aud-blue italic">Success.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: "Jeff", 
                role: "COO", 
                quote: "Audcomp Managed Services (AMS) has been a wonderful addition to our business operations. The proactive maintenance approach and reliability increase have been transformative." 
              },
              { 
                name: "Jen", 
                role: "VP of IT", 
                quote: "Their commitment to excellence is evident in every project. The knowledgeable team ensures a seamless experience across our hybrid cloud infrastructure." 
              },
              { 
                name: "Kellie", 
                role: "President", 
                quote: "We chose Audcomp for IT Managed Services in 2018. I would recommend them to any enterprise seeking a reliable and effective strategic partner." 
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div>
                  <div className="flex gap-1 mb-8">
                    {[1,2,3,4,5].map(s => <i key={s} className="fas fa-star text-aud-orange text-[10px]"></i>)}
                  </div>
                  <p className="text-slate-600 leading-relaxed italic text-lg mb-12 font-medium">"{t.quote}"</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'Dancing Script, cursive, serif' }}>{t.name}</p>
                  <p className="text-[11px] uppercase tracking-widest font-black text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
