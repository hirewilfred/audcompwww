
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
      className="glass-panel rounded-[2.5rem] border-white/5 transition-all duration-700 group flex flex-col h-full relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-16px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? `0 40px 80px -20px ${glowColor}55` : 'none',
        borderColor: isHovered ? `${glowColor}88` : 'rgba(255,255,255,0.05)'
      }}
    >
      <div className="h-64 relative overflow-hidden">
        <img 
          src={image} 
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]
            ${isHovered ? 'scale-125 grayscale-0 opacity-100' : 'scale-100 grayscale opacity-40'}
          `}
          alt={title}
        />
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ${accentColor} 
            ${isHovered ? 'opacity-10' : 'opacity-20'}`}
        ></div>
        <div 
          className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 ease-in-out"
          style={{ width: isHovered ? '100%' : '0%', left: isHovered ? '0%' : '50%' }}
        ></div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-10 bg-[#0d0e25]/60 backdrop-blur-md">
        <h3 className={`text-2xl font-extrabold mb-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-200'}`}>
          {title}
        </h3>
        <ul className="space-y-4 mb-8 flex-grow">
          {items.map((item, idx) => (
            <li 
              key={idx} 
              className={`flex items-start gap-3 transition-all duration-500 ${isHovered ? 'text-slate-100 translate-x-2' : 'text-slate-400'}`}
              style={{ transitionDelay: isHovered ? `${idx * 60}ms` : '0ms' }}
            >
              <i className={`fas fa-check-circle text-[10px] mt-1.5 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-600'}`}></i>
              <span className="text-sm font-semibold tracking-tight">{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-white/5">
          <Link 
            to="/ai-assessment" 
            className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-all flex items-center justify-between group/link"
          >
            <span>Consult Specialist</span>
            <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' : ''}`}>
              <i className="fas fa-arrow-right text-[12px]"></i>
            </div>
          </Link>
        </div>
      </div>
      <div 
        className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-[80px] transition-opacity duration-1000 pointer-events-none
          ${isHovered ? 'opacity-40' : 'opacity-0'}`}
        style={{ backgroundColor: glowColor }}
      ></div>
    </div>
  );
};

const Services: React.FC = () => {
  const copilotAssetUrl = "https://raw.githubusercontent.com/Audcomp/Audcomp/refs/heads/main/copilot_architecture.png";

  const serviceCategories = [
    {
      title: "Managed IT Services",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      accent: "bg-aud-blue",
      glowColor: "#5c7cff",
      items: ["Managed IT Support", "24/7 Expert Help Desk", "Backup & Disaster Recovery", "DAAS (Device as a Service)", "Strategic IT Procurement"]
    },
    {
      title: "ZeroTrust Defense",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      accent: "bg-aud-orange",
      glowColor: "#f7941d",
      items: ["Identity Governance & MFA", "SOC & MDR Monitoring", "Penetration Testing", "Micro-Segmentation", "Security Awareness Training", "Threat Hunting"]
    },
    {
      title: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      accent: "bg-blue-400",
      glowColor: "#60a5fa",
      items: ["Microsoft Office 365", "Azure Infrastructure", "Hybrid Cloud Logic", "Cloud-Native Backup", "Teams & Collaboration"]
    },
    {
      title: "Professional Services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      accent: "bg-indigo-600",
      glowColor: "#4f46e5",
      items: ["Virtual CIO (vCIO)", "Consulting & Architecture", "Implementation & Migration", "Structured Cabling", "Network Design"]
    }
  ];

  const workshopTiers = [
    {
      duration: "2 Hours",
      title: "The Agentic Briefing",
      desc: "Executive-level discovery to demystify autonomous AI agents. We explore high-level feasibility for your specific business vertical.",
      features: ["AI Capabilities Roadmap", "Risk & Security Overview", "ROI Potential Analysis"],
      cta: "Schedule Briefing",
      borderColor: "border-slate-200",
      accentColor: "text-aud-blue",
      icon: "fa-bolt-lightning",
      glow: "rgba(92,124,255,0.08)"
    },
    {
      duration: "1-2 Days",
      title: "The Strategy Blueprint",
      desc: "Intensive technical workshop mapping your existing data silos to agentic workflows. Leave with a concrete execution plan.",
      features: ["Custom Workflow Mapping", "Data Readiness Audit", "Prototype Architecture"],
      cta: "Start Blueprinting",
      borderColor: "border-slate-200",
      accentColor: "text-aud-orange",
      icon: "fa-chess-knight",
      glow: "rgba(247,148,29,0.08)"
    },
    {
      duration: "Full Engagement",
      title: "The Implementation",
      desc: "End-to-end development of bespoke AI agents integrated into your M365 environment or private cloud infrastructure.",
      features: ["Custom LLM Integration", "Agent Governance Framework", "Deployment & Monitoring"],
      cta: "Book Consultation",
      borderColor: "border-slate-200",
      accentColor: "text-emerald-600",
      icon: "fa-microchip",
      glow: "rgba(16,185,129,0.08)"
    }
  ];

  return (
    <div className="min-h-screen indigo-gradient selection:bg-blue-500/30 overflow-x-hidden">
      <SEO 
        title="Technical Infrastructures & AI Solutions" 
        description="Explore Audcomp's comprehensive IT solutions: Managed IT, ZeroTrust Defense, Azure Cloud, and Microsoft Co-Pilot enablement."
      />
      
      <div className="fixed top-[-10%] right-[-10%] w-[1000px] h-[1000px] rounded-full pointer-events-none z-0 glow-sphere blur-[150px] bg-blue-600/5"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none z-0 glow-sphere blur-[150px] bg-aud-orange/5"></div>

      <section className="relative pt-48 pb-24 lg:pt-64 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded bg-aud-blue text-white tracking-widest uppercase shadow-[0_0_15px_rgba(92,124,255,0.4)]">Solutions Portfolio</span>
            <span className="text-xs font-bold text-slate-400 tracking-tight">Enterprise Infrastructure</span>
          </div>
          <h1 className="text-6xl lg:text-9xl font-black tracking-tighter text-gradient mb-12 leading-[0.9]">
            Critical <span className="italic text-aud-orange">Capabilities.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
            Deploying resilient managed support, ZeroTrust cyber defense, and production-ready AI solutions tailored for the Canadian enterprise landscape.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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

      {/* Hero Section: Microsoft Co-Pilot */}
      <section className="relative z-10 px-6 pb-48">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-[5rem] p-12 lg:p-28 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative border-white/20 group hover:border-white/40 transition-all duration-1000">
            <div className="lg:w-1/2 relative z-10 text-left">
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 mb-12 shadow-2xl backdrop-blur-xl group-hover:rotate-[360deg] transition-all duration-1000">
                <i className="fas fa-wand-magic-sparkles text-aud-orange text-3xl animate-pulse"></i>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 leading-[1.05]">
                Microsoft <br />
                <span className="text-aud-blue">Co-Pilot</span> Enablement
              </h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium max-w-lg">
                Future-proof your workforce with production-grade AI integration. We handle the security guardrails, data governance, and strategic deployment of Microsoft's transformative AI companion.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {[
                  { icon: 'fa-shield-halved', label: 'Security Guardrails' },
                  { icon: 'fa-database', label: 'Data Governance' },
                  { icon: 'fa-user-check', label: 'Adoption Training' },
                  { icon: 'fa-chart-network', label: 'ROI Analysis' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/90 font-bold text-lg">
                    <div className="w-10 h-10 rounded-xl bg-aud-orange/10 border border-aud-orange/20 flex items-center justify-center text-aud-orange group-hover:bg-aud-orange group-hover:text-white transition-all duration-500">
                      <i className={`fas ${item.icon} text-[14px]`}></i>
                    </div>
                    <span className="text-sm tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/ai-assessment" className="bg-white text-[#0d0e25] px-12 py-6 rounded-2xl font-black text-lg hover:bg-aud-orange hover:text-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 group/btn">
                  <span>Book AI Demo</span>
                  <i className="fas fa-play text-sm group-hover/btn:translate-x-1 transition-transform"></i>
                </Link>
                <button className="glass-panel text-white px-12 py-6 rounded-2xl font-black border-white/10 hover:bg-white/5 transition-all">
                  Readiness Audit
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
              <div className="relative glass-panel border-white/20 p-4 rounded-[4.5rem] bg-slate-900/40 backdrop-blur-3xl overflow-hidden shadow-2xl min-h-[450px] flex items-center justify-center">
                <div 
                  className="relative w-full h-[400px] rounded-[3.5rem] overflow-hidden bg-center bg-cover bg-no-repeat transition-all duration-[4000ms] group-hover:scale-105"
                  style={{ backgroundImage: `url(${copilotAssetUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e25]/60 via-[#0d0e25]/10 to-transparent"></div>
                  <div className="absolute top-8 left-8 p-4 glass-panel border-white/10 rounded-2xl flex items-center gap-3 animate-bounce shadow-2xl backdrop-blur-xl">
                    <div className="w-2.5 h-2.5 rounded-full bg-aud-orange animate-ping"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Core Integrated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic AI Workshops Section - CLEAN WHITE BACKGROUND */}
      <section className="relative z-10 px-6 py-40 bg-white text-slate-900 rounded-t-[5rem] shadow-[0_-50px_100px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full mb-8">
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-aud-orange text-white uppercase tracking-widest">Training & Strategy</span>
              <span className="text-xs font-bold text-slate-500 tracking-tight">Agentic Intelligence</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter mb-10 leading-[0.9] text-slate-900">
              Agentic AI <span className="text-aud-blue italic">Workshops.</span>
            </h2>
            <p className="text-slate-600 text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
              Moving beyond standard chat interfaces. We identify, architect, and deploy custom autonomous agentic workflows for the modern enterprise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {workshopTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-50 p-10 lg:p-14 rounded-[4rem] border ${tier.borderColor} flex flex-col justify-between hover:scale-[1.02] transition-all duration-700 group relative overflow-hidden h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className={`w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center ${tier.accentColor} text-2xl group-hover:bg-aud-blue group-hover:text-white transition-all duration-500`}>
                      <i className={`fas ${tier.icon}`}></i>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">{tier.duration}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{tier.title}</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed text-base font-medium">{tier.desc}</p>
                  
                  <ul className="space-y-5 mb-12">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-800 font-bold text-sm">
                        <div className="w-6 h-6 rounded-lg bg-aud-blue/5 flex items-center justify-center text-aud-blue border border-aud-blue/10">
                           <i className="fas fa-check text-[10px]"></i>
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-8 border-t border-slate-200">
                  <Link 
                    to="/ai-assessment" 
                    className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black text-sm uppercase tracking-widest text-center block hover:bg-aud-blue transition-all duration-500 shadow-xl"
                  >
                    {tier.cta}
                  </Link>
                </div>
                
                {/* Decorative Subtle Background Glow */}
                <div 
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[60px] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: tier.glow }}
                ></div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-slate-900 text-white rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
             <div className="relative z-10">
               <h4 className="text-4xl font-black mb-4 tracking-tight">Accelerate your <span className="text-aud-orange">AI Maturity.</span></h4>
               <p className="text-slate-400 text-lg font-medium max-w-xl">Our specialists conduct a preliminary readiness audit to recommend the workshop tier that matches your current data architecture and business goals.</p>
             </div>
             <Link to="/ai-assessment" className="relative z-10 bg-white text-slate-900 px-12 py-6 rounded-2xl font-black text-lg hover:bg-aud-orange hover:text-white transition-all whitespace-nowrap shadow-xl flex items-center gap-4 group">
                <span>Start Readiness Audit</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
             </Link>
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
