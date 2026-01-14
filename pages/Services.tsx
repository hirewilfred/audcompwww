
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{ title: string; items: string[]; icon: string; accentColor: string }> = ({ title, items, icon, accentColor }) => (
  <div className="glass-panel p-8 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${accentColor} text-white shadow-lg`}>
      <i className={`fas ${icon} text-xl`}></i>
    </div>
    <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>
    <ul className="space-y-3 mb-8 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
          <i className="fas fa-check text-[10px] mt-1 text-aud-blue"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="pt-6 border-t border-white/5">
      <Link to="/ai-assessment" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center justify-between group/link">
        Consult Specialist <i className="fas fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
      </Link>
    </div>
  </div>
);

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Managed IT Services",
      icon: "fa-server",
      accent: "bg-aud-blue",
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
      icon: "fa-shield-halved",
      accent: "bg-aud-orange",
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
      icon: "fa-cloud",
      accent: "bg-blue-400",
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
      icon: "fa-user-tie",
      accent: "bg-indigo-600",
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
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 glow-sphere blur-[100px] bg-blue-600/10"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0 glow-sphere blur-[100px] bg-aud-orange/5"></div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-aud-blue text-white">PORTFOLIO</span>
            <span className="text-xs font-medium text-slate-400 tracking-tight">Full-Spectrum Capabilities</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gradient mb-8">
            Technical <span className="italic text-aud-orange">Infrastructure.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            From managed support and military-grade cyber defense to cloud migration and AI enablement for the modern enterprise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((cat, i) => (
              <ServiceCard 
                key={i} 
                title={cat.title} 
                items={cat.items} 
                icon={cat.icon} 
                accentColor={cat.accent} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service: Co-Pilot */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-[3.5rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative border-white/5">
            <div className="lg:w-1/2 relative z-10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-8">
                <i className="fas fa-wand-magic-sparkles text-aud-orange"></i>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Microsoft Co-Pilot Enablement</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Ready your organization for the next generation of productivity. We handle the data governance, licensing, and implementation of Microsoft's powerful AI assistant.
              </p>
              <ul className="space-y-4 mb-12">
                {['Security & Compliance Review', 'Data Readiness Assessment', 'Custom Training Programs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-medium">
                    <div className="w-6 h-6 rounded-full bg-aud-orange/20 flex items-center justify-center text-aud-orange">
                      <i className="fas fa-plus text-[8px]"></i>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-aud-orange hover:text-white transition-all shadow-xl">
                Start Co-Pilot Readiness
              </button>
            </div>
            
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-1 rounded-[2.5rem] blur opacity-20 bg-aud-orange"></div>
              <div className="relative glass-panel border-white/10 p-4 rounded-[2.5rem] bg-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800" 
                  alt="AI and Productivity" 
                  className="rounded-[2rem] opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Integrated in Services */}
      <section className="bg-white text-slate-900 relative z-20 rounded-t-[4rem] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">Partner Success</span>
            <h2 className="text-5xl font-bold tracking-tight">Verified <span className="text-aud-blue italic">Impact.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: "Jeff", 
                role: "COO", 
                quote: "Audcomp Managed Services (AMS) has been a wonderful addition to our business operations. With the help of their team, and their proactive maintenance approach, we have seen the reliability, security, and performance of our network increase with each month." 
              },
              { 
                name: "Jen", 
                role: "VP of Information Technology", 
                quote: "I am very impressed with the service I receive from Audcomp. Their commitment to excellence is evident in every product we’ve purchased, and their knowledgeable and friendly team ensures a seamless experience." 
              },
              { 
                name: "Kellie", 
                role: "President and CEO", 
                quote: "We chose Audcomp as our partner for IT Managed Service back in 2018 and would recommend Audcomp to any business looking for a reliable and effective Managed Service Provider." 
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
                <p className="text-slate-600 leading-relaxed italic mb-10">"{t.quote}"</p>
                <div>
                  <p className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'Dancing Script, cursive, serif' }}>{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">{t.role}</p>
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
