
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const AccordionItem: React.FC<{ title: string; icon: string; children: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ title, icon, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isOpen ? 'bg-aud-blue text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-slate-400 group-hover:bg-white/10'}`}>
            <i className={`fas ${icon} text-lg`}></i>
          </div>
          <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-400'}`}>{title}</span>
        </div>
        <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180 text-aud-orange' : 'text-slate-600'}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <div className="pl-16 text-slate-400 leading-relaxed text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

const ManagedIT: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const features = [
    {
      title: "24/7/365 Help Desk Support",
      icon: "fa-headset",
      description: "Our Canadian-based support team is always on standby. Whether it's a minor login issue or a critical system failure, we provide immediate expert assistance to keep your team productive."
    },
    {
      title: "Cloud Infrastructure Management",
      icon: "fa-cloud",
      description: "Scale your business with confidence. We manage your Azure, AWS, or private cloud environments, ensuring optimal performance and cost-efficiency."
    },
    {
      title: "Disaster Recovery & Backup",
      icon: "fa-database",
      description: "Protect your most valuable asset: your data. Our multi-site backup strategy ensures that your business can be back online in minutes, not days."
    },
    {
      title: "Strategic IT Roadmapping",
      icon: "fa-map-signs",
      description: "We act as your Virtual CIO, aligning your IT investments with your 3-5 year business goals to ensure you're always ahead of the curve."
    }
  ];

  return (
    <div className="min-h-screen indigo-gradient selection:bg-blue-500/30 overflow-x-hidden">
      <SEO 
        title="Managed IT Services" 
        description="Comprehensive managed IT support, cloud management, and disaster recovery for businesses across Canada."
      />
      
      {/* Background Accents */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 glow-sphere blur-[100px] bg-blue-600/10"></div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500 text-white">PRO</span>
            <span className="text-xs font-medium text-slate-400 tracking-tight">Enterprise Managed IT</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gradient mb-8">
            Resilient IT <span className="italic">Excellence.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Focus on your business growth while we handle the heavy lifting of your technical infrastructure with 24/7 proactive care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0d0e25] px-10 py-4 rounded-xl font-bold shadow-2xl hover:bg-slate-100 transition-all">
              Request a Quote
            </button>
            <button className="glass-panel text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              View Service Level Agreement
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="glass-panel rounded-[3rem] p-8 lg:p-12 border-white/5">
            <h2 className="text-3xl font-bold text-white mb-8">Service Delivery Framework</h2>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <AccordionItem
                  key={index}
                  title={feature.title}
                  icon={feature.icon}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {feature.description}
                </AccordionItem>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition-all duration-1000 bg-emerald-500"></div>
              <div className="relative glass-panel rounded-[2.5rem] overflow-hidden border-white/10 h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e25] to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-aud-orange font-bold uppercase tracking-widest text-xs mb-2">Operational Uptime</p>
                  <h3 className="text-3xl font-bold">99.9% Guaranteed</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-8 rounded-3xl border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Response Time</p>
                <p className="text-4xl font-bold text-white">15<span className="text-lg text-slate-500">min</span></p>
              </div>
              <div className="glass-panel p-8 rounded-3xl border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Team Expertise</p>
                <p className="text-4xl font-bold text-white">80<span className="text-lg text-slate-500">+</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="bg-white text-slate-900 relative z-20 rounded-t-[4rem] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">Our Process</span>
            <h2 className="text-5xl font-bold tracking-tight">The Audcomp Lifecycle</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-12 z-0"></div>
            {[
              { step: "01", title: "Consult", icon: "fa-comments", desc: "Understanding your unique workflows" },
              { step: "02", title: "Design", icon: "fa-drafting-compass", desc: "Building a scalable tech foundation" },
              { step: "03", title: "Deploy", icon: "fa-rocket", desc: "Seamless implementation without downtime" },
              { step: "04", title: "Maintain", icon: "fa-tools", desc: "Proactive 24/7 care and optimization" }
            ].map(item => (
              <div key={item.step} className="group relative z-10 text-center">
                <div className="text-5xl font-black text-slate-100 mb-6 group-hover:text-aud-blue transition-colors">{item.step}</div>
                <div className="w-20 h-20 bg-white rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all">
                  <i className={`fas ${item.icon} text-2xl text-aud-blue`}></i>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedIT;
