
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Cybersecurity: React.FC = () => {
  return (
    <div className="min-h-screen indigo-gradient selection:bg-orange-500/30 overflow-x-hidden">
      <SEO 
        title="Cyber Defense" 
        description="Military-grade security audits and real-time threat mitigation for critical infrastructure."
      />
      
      {/* Background Accents */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 glow-sphere blur-[100px] bg-orange-600/10"></div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-aud-orange text-white">SEC</span>
            <span className="text-xs font-medium text-slate-400 tracking-tight">Fortress-Grade Defense</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gradient mb-8">
            Cyber <span className="italic text-aud-orange">Resilience.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            In an era of AI-driven threats, simple antivirus isn't enough. Audcomp delivers multi-layered defense to keep your business impenetrable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="flex items-center gap-2 px-6 py-3 glass-panel rounded-xl border-white/10 text-sm font-bold text-white">
               <i className="fas fa-lock text-aud-orange"></i>
               SOC 2 COMPLIANT
             </div>
             <div className="flex items-center gap-2 px-6 py-3 glass-panel rounded-xl border-white/10 text-sm font-bold text-white">
               <i className="fas fa-fingerprint text-aud-orange"></i>
               ZERO TRUST MODEL
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Endpoint Protection", icon: "fa-laptop-code", desc: "Advanced EDR solutions that identify and isolate threats at the source before they can spread." },
            { title: "SOC & MDR Monitoring", icon: "fa-eye", desc: "24/7 continuous surveillance of your digital perimeter for suspicious activity and unauthorized access." },
            { title: "Phishing Simulation", icon: "fa-user-graduate", desc: "Turn your employees into a human firewall with simulated attacks and continuous training." },
            { title: "Vulnerability Audits", icon: "fa-clipboard-check", desc: "Rigorous testing to find and patch holes in your infrastructure before hackers do." },
            { title: "Managed Firewall", icon: "fa-key", desc: "Implementing next-gen traffic filtering and identity management to ensure only authorized users enter." },
            { title: "Incident Response", icon: "fa-ambulance", desc: "A dedicated war-room team ready to jump in and minimize damage during a critical breach." }
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-aud-orange/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-aud-orange/5 rounded-bl-[80px] flex items-center justify-center pt-2 pl-4">
                <i className={`fas ${feature.icon} text-aud-orange/20 text-3xl group-hover:scale-110 transition-transform`}></i>
              </div>
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-aud-orange/10 flex items-center justify-center text-aud-orange">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image CTA Section */}
      <section className="bg-white text-slate-900 relative z-20 rounded-t-[4rem] py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 block">Defense in depth</span>
             <h2 className="text-5xl font-bold tracking-tight mb-8">Sleep better knowing your data is <span className="italic text-aud-orange">vaulted.</span></h2>
             <p className="text-lg text-slate-500 leading-relaxed mb-10">
               We combine the best-in-class security tools with three decades of enterprise IT experience to create a posture that adapts to emerging threats in real-time.
             </p>
             <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-aud-orange transition-all">
               Get a Free Security Audit
             </button>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-1 rounded-[3rem] blur opacity-10 bg-aud-orange"></div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
              className="relative rounded-[3rem] shadow-2xl border border-slate-100" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
