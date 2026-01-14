
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const leadership = [
    {
      name: "Kellie",
      role: "President & CEO",
      bio: "Leading Audcomp's strategic vision since its inception, fostering a culture of excellence and innovation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Jeff",
      role: "Chief Operating Officer",
      bio: "Optimizing operational efficiency and service delivery across all Audcomp business units.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Jen",
      role: "VP of Information Technology",
      bio: "Architecting the technical frameworks that power Canadian enterprises and AI initiatives.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen indigo-gradient selection:bg-blue-500/30 overflow-x-hidden">
      <SEO 
        title="Our Story & Mission" 
        description="Founded in 1986, Audcomp is a Top 100 Service Provider. Learn about our mission to empower businesses through tailored IT and AI solutions."
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 lg:pt-64 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10">
            <span className="text-[10px] font-black px-2 py-0.5 rounded bg-aud-blue text-white uppercase tracking-widest">Est. 1986</span>
            <span className="text-xs font-bold text-slate-400">Engineering the Future</span>
          </div>
          <h1 className="text-6xl lg:text-9xl font-black tracking-tighter text-gradient mb-12 leading-[0.9]">
            A Legacy of <br /><span className="italic text-aud-orange">Excellence.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
            For nearly four decades, Audcomp has been the backbone of IT infrastructure for Canadian enterprises, evolving from a hardware pioneer to an AI-driven solutions leader.
          </p>
        </div>
      </section>

      {/* History Grid (Dark) */}
      <section className="relative z-10 px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[4rem] blur-[80px] opacity-10 bg-aud-blue group-hover:opacity-20 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" 
                className="relative rounded-[3.5rem] border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Our History"
              />
              <div className="absolute bottom-8 right-8 glass-panel p-6 rounded-3xl border-white/10 backdrop-blur-xl animate-bounce shadow-2xl">
                <p className="text-aud-orange font-black text-2xl">Top 100</p>
                <p className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Service Provider</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Built on <span className="text-aud-blue">Trust</span>, Powered by Innovation.</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Featured among the top 100 service providers for over a decade, Audcomp offers best-in-class Managed IT, Cybersecurity, Cloud, and Professional Services. 
                Our journey began in Hamilton, Ontario, with a simple mission: to provide reliable technology to local businesses.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-4xl font-black text-white mb-2">38+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Years in Business</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-2">10+ Yrs</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Top 100 Industry Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy (White Section) */}
      <section className="bg-white text-slate-900 relative z-20 rounded-t-[5rem] py-32 lg:py-48 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aud-blue mb-4 block">Our Mission</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">Empowering through <span className="italic text-aud-orange">Tailored Solutions.</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  Our Mission is to empower businesses to operate confidently and more efficiently by providing tailored IT solutions. Our team of dedicated professionals is committed to developing and implementing reliable, cost-effective solutions for businesses of all sizes – no matter the scope of the need. 
                </p>
                <p className="text-slate-900 text-xl font-black mt-6">We are more than a service provider. We are your partner.</p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center gap-8 group">
                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-aud-blue group-hover:scale-110 transition-transform">
                  <i className="fas fa-handshake text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-lg">Partner-Centric Approach</h4>
                  <p className="text-slate-500 text-sm font-medium">Your success is the metric of our performance.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aud-blue mb-4 block">Our Philosophy</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">Rooted in <span className="italic">Service.</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  Our beliefs and values are the heart of how we operate. The Audcomp philosophy guides how we approach every client relationship and project. Though we are one of the largest IT services providers in Ontario, we have not forgotten our small business roots.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {['Reliability', 'Integrity', 'Local Focus', 'Enterprise Scale'].map((val, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-900 font-black tracking-tight">
                      <div className="w-2 h-2 rounded-full bg-aud-orange"></div>
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section (Dark) */}
      <section className="relative z-10 py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aud-blue mb-4 block">Executive Team</span>
              <h2 className="text-6xl font-black text-white tracking-tighter leading-[0.9]">Meet the <span className="italic text-aud-orange">Visionaries.</span></h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {leadership.map((member, i) => (
              <div key={i} className="glass-panel p-8 rounded-[3.5rem] border-white/5 hover:border-white/20 transition-all group">
                <div className="h-80 relative rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src={member.image} 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e25]/80 via-transparent to-transparent"></div>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>
                <p className="text-aud-orange font-bold text-xs uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section (White) */}
      <section className="bg-white text-slate-900 relative z-20 py-32 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel bg-slate-900 rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative group border-none">
            <div className="lg:w-1/2 text-white">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-aud-orange mb-6 block">The Modern Necessity</span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">Modern IT is <br /><span className="text-aud-blue italic">Non-Negotiable.</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 font-medium">
                Managed IT services are a crucial part of any modern business. With technology advancing at an unprecedented pace, it's essential to have reliable IT infrastructure that keeps up with the demands of your organization. 
              </p>
              <div className="flex gap-6">
                <Link to="/services" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-aud-orange hover:text-white transition-all">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-aud-blue/20 blur-[100px] rounded-full"></div>
               <div className="relative p-12 glass-panel border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-3xl text-center">
                  <i className="fas fa-microchip text-aud-orange text-6xl mb-8 animate-pulse"></i>
                  <h3 className="text-2xl font-black text-white mb-4">Enterprise Grade</h3>
                  <p className="text-slate-400 text-sm font-medium">Scaling Hamilton's innovation to national levels since 1986.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white text-slate-900 relative z-20 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-8">Ready to build the <span className="text-aud-blue">next chapter?</span></h2>
          <p className="text-xl text-slate-600 mb-12 font-medium">Join over 1,000 Canadian organizations that trust Audcomp with their technical legacy.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/ai-assessment" className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-black hover:bg-aud-blue transition-all shadow-xl">
              Partner With Us
            </Link>
            <Link to="/services" className="bg-slate-100 text-slate-500 px-12 py-6 rounded-2xl font-bold hover:bg-slate-200 transition-all">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
