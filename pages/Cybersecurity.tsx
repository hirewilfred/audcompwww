
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Cybersecurity: React.FC = () => {
  return (
    <div className="min-h-screen indigo-gradient selection:bg-orange-500/30 overflow-x-hidden">
      <SEO 
        title="ZeroTrust Defense" 
        description="Military-grade Zero Trust architecture, identity verification, and real-time threat mitigation for critical infrastructure."
      />
      
      {/* Background Accents */}
      <div className="fixed top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none z-0 glow-sphere blur-[120px] bg-orange-600/10"></div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-[0.03] grayscale"
          alt="Data Center Background"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-aud-orange text-white uppercase tracking-widest">Enterprise</span>
            <span className="text-xs font-medium text-slate-400 tracking-tight">ZeroTrust Architecture</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-gradient mb-8 leading-[1.1]">
            Never Trust. <br /><span className="italic text-aud-orange">Always Verify.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Standard perimeter defense is obsolete. Audcomp’s ZeroTrust service assumes breach and verifies every request, ensuring your critical data remains vaulted behind identity-centric security.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/ai-assessment" className="bg-white text-[#0d0e25] px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-aud-orange hover:text-white transition-all flex items-center justify-center gap-3 group">
              <span>Book a Security Demo</span>
              <i className="fas fa-shield-halved group-hover:rotate-12 transition-transform"></i>
            </Link>
            <button className="glass-panel text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              Consult a Specialist
            </button>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-60">
             <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-white">
               <i className="fas fa-check-circle text-aud-orange"></i>
               SOC 2 TYPE II
             </div>
             <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-white">
               <i className="fas fa-check-circle text-aud-orange"></i>
               NIST COMPLIANT
             </div>
             <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-white">
               <i className="fas fa-check-circle text-aud-orange"></i>
               ISO 27001 READY
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Identity Governance", icon: "fa-fingerprint", desc: "Granular access controls and Multi-Factor Authentication (MFA) across all enterprise entry points." },
            { title: "Micro-Segmentation", icon: "fa-network-wired", desc: "Isolating workloads to prevent lateral movement of threats within your private or public cloud." },
            { title: "Continuous Monitoring", icon: "fa-eye", desc: "AI-driven behavioral analysis that detects anomalies in user patterns before they result in data exfiltration." },
            { title: "Endpoint Detection (EDR)", icon: "fa-microchip", desc: "Securing every device that touches your network with real-time response and automated isolation." },
            { title: "Data Loss Prevention", icon: "fa-vault", desc: "Ensuring sensitive intellectual property is encrypted, audited, and never leaves authorized zones." },
            { title: "Threat Hunting", icon: "fa-radar", desc: "Proactive, human-led investigations into the dark web and your own infrastructure for hidden indicators of compromise." }
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-10 rounded-[3rem] border-white/5 hover:border-aud-orange/30 transition-all group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-aud-orange/5 rounded-bl-[80px] flex items-center justify-center pt-2 pl-4">
                <i className={`fas ${feature.icon} text-aud-orange/20 text-3xl group-hover:scale-110 transition-transform`}></i>
              </div>
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-aud-orange/10 flex items-center justify-center text-aud-orange shadow-inner">
                  <i className={`fas ${feature.icon} text-xl`}></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">{feature.desc}</p>
              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Active Protection</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image CTA Section */}
      <section className="bg-white text-slate-900 relative z-20 rounded-t-[5rem] py-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-aud-blue mb-6 block">Defense in depth</span>
             <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">Sleep better knowing your data is <span className="italic text-aud-orange">vaulted.</span></h2>
             <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
               We combine three decades of enterprise IT experience with the latest ZeroTrust frameworks to create a security posture that doesn't just block attacks—it renders them useless.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-aud-orange transition-all shadow-xl">
                 Get a Free Security Audit
               </button>
               <button className="bg-slate-100 text-slate-500 px-10 py-5 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                 Download Framework PDF
               </button>
             </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 rounded-[4rem] blur-[60px] opacity-20 bg-aud-orange group-hover:opacity-40 transition-all duration-1000"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out" 
                alt="Secure Infrastructure"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-aud-orange text-white w-32 h-32 rounded-full flex flex-col items-center justify-center p-4 text-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <i className="fas fa-lock mb-2"></i>
              <span className="text-[10px] font-black uppercase leading-tight">Identity First Security</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
