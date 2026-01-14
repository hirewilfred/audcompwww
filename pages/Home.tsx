
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AnimatedCounter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const isDate = label.toLowerCase() === 'founded';
  const startValue = isDate ? numericPart - 50 : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let startTimestamp: number | null = null;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easedProgress * (numericPart - startValue) + startValue);
      setDisplayValue(current);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [hasAnimated, numericPart, isDate, startValue]);

  return (
    <div ref={elementRef} className="text-center">
      <p className="text-3xl font-bold mb-1 text-white">
        {displayValue.toLocaleString()}{suffix}
      </p>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
    </div>
  );
};

const Home: React.FC = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    {
      badge: "AI Infrastructure Leader",
      title: "Deploy resilient AI infrastructure in weeks",
      desc: "Custom LLM deployments and predictive analytics for mission-critical operations. Bridge the gap between raw data and business intelligence.",
      ctaPrimary: "Start AI Assessment",
      ctaLink: "/ai-assessment",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4628c7007?q=80&w=2000&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
    },
    {
      badge: "Cyber Defense Experts",
      title: "Military-grade protection for digital assets",
      desc: "Zero-trust architecture and real-time threat mitigation. We protect your enterprise from AI-driven cyber attacks before they strike.",
      ctaPrimary: "Secure Your Network",
      ctaLink: "/cybersecurity",
      color: "orange",
      bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      badge: "Managed IT Partner",
      title: "Seamless 24/7 Managed IT Services",
      desc: "Proactive monitoring, cloud management, and full-spectrum support. Engineering resilient digital systems for over three decades.",
      ctaPrimary: "Explore Managed IT",
      ctaLink: "/managed-it",
      color: "emerald",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const events = [
    {
      title: "Distributech (DTECH26)",
      date: "Feb 2-5, 2026",
      location: "San Diego, CA",
      description: "Mission-critical grid automation and AI-driven distribution testing.",
      image: "https://images.unsplash.com/photo-1540575861501-7ce0e220beff?auto=format&fit=crop&q=80&w=800",
      color: "from-blue-600/20 to-indigo-900/40"
    },
    {
      title: "ARC Industry Forum",
      date: "Feb 9-12, 2026",
      location: "Orlando, FL",
      description: "How AI is driving the future of industrial supply-chain management.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      color: "from-orange-600/20 to-orange-900/40"
    },
    {
      title: "S4x26 Cyber Expo",
      date: "Feb 23-26, 2026",
      location: "Miami, FL",
      description: "The world's premier OT security event for critical infrastructure.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      color: "from-emerald-600/20 to-emerald-900/40"
    }
  ];

  const partners = [
    {
      name: "Jeff",
      role: "COO",
      quote: "Audcomp Managed Services (AMS) has been a wonderful addition to our business operations. With the help of their team, and their proactive maintenance approach, we have seen the reliability and security of our network increase with each month.",
      type: "text"
    },
    {
      name: "Jen",
      role: "VP of Information Technology",
      quote: "I am very impressed with the service I receive from Audcomp. Their commitment to excellence is evident in every product we’ve purchased. I highly recommend Audcomp to anyone seeking premium solutions.",
      type: "text"
    },
    {
      name: "Kellie",
      role: "President and CEO",
      quote: "We chose Audcomp as our partner for IT Managed Service back in 2018 and would recommend Audcomp to any business looking for a reliable and effective Managed Service Provider.",
      type: "text"
    }
  ];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(heroTimer);
  }, [heroSlides.length]);

  const nextEvent = () => setCurrentEventIndex((prev) => (prev + 1) % events.length);
  const prevEvent = () => setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="min-h-screen indigo-gradient selection:bg-blue-500/30 overflow-x-hidden relative">
      <SEO 
        title="Managed IT & AI Consulting Hamilton" 
        description="Audcomp: Your partner for resilient IT, cybersecurity, and advanced AI infrastructure."
      />
      
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${idx === currentHeroSlide ? 'opacity-30' : 'opacity-0'}`}
          >
            <img src={slide.bgImage} alt="" className="w-full h-full object-cover scale-110 blur-[2px]" />
            <div className="absolute inset-0 bg-[#0d0e25]/60"></div>
          </div>
        ))}
      </div>

      {/* Hero Section (DARK) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
          <div className="lg:w-1/2 text-left min-h-[500px] flex flex-col justify-center">
            <div className="relative overflow-hidden h-[300px] sm:h-[260px] lg:h-[320px]">
              {heroSlides.map((slide, idx) => (
                <div key={idx} className={`absolute inset-0 transition-all duration-1000 ${idx === currentHeroSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${idx === 1 ? 'bg-aud-orange' : idx === 2 ? 'bg-emerald-500' : 'bg-[#5c7cff]'} text-white`}>
                      {idx === 0 ? 'AI' : idx === 1 ? 'SEC' : 'IT'}
                    </span>
                    <span className="text-xs font-medium text-slate-400 tracking-tight">{slide.badge}</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-gradient">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-slate-400 max-w-lg mb-12 leading-relaxed">{slide.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to={heroSlides[currentHeroSlide].ctaLink} className={`px-8 py-4 rounded-xl font-bold shadow-2xl transition-all duration-500 text-center ${currentHeroSlide === 1 ? 'bg-aud-orange' : currentHeroSlide === 2 ? 'bg-emerald-600' : 'bg-white text-[#0d0e25]'} text-white hover:opacity-90`}>
                {heroSlides[currentHeroSlide].ctaPrimary}
              </Link>
              <Link to="/services" className="glass-panel text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center">View Solutions</Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative group w-full">
            <div className={`absolute -inset-1 rounded-[2rem] blur opacity-20 transition-all duration-1000 bg-gradient-to-r ${currentHeroSlide === 0 ? 'from-blue-500 to-indigo-600' : currentHeroSlide === 1 ? 'from-orange-500 to-red-600' : 'from-emerald-500 to-teal-600'}`}></div>
            <div className="relative glass-panel rounded-[2rem] overflow-hidden border border-white/10 p-2 h-[500px]">
              <div className="bg-[#0f112a] rounded-[1.8rem] h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center">
                      <i className={`fas ${currentHeroSlide === 0 ? 'fa-brain' : currentHeroSlide === 1 ? 'fa-shield-halved' : 'fa-server'} text-xs text-white`}></i>
                    </div>
                    <p className="text-sm font-bold text-white uppercase tracking-widest">{heroSlides[currentHeroSlide].badge}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${currentHeroSlide === 0 ? 'bg-blue-500' : currentHeroSlide === 1 ? 'bg-aud-orange' : 'bg-emerald-500'}`}></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-panel p-6 rounded-2xl border-white/5">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Throughput</p>
                    <p className="text-3xl font-bold text-white">4.2ms</p>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border-white/5">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Integrity</p>
                    <p className="text-3xl font-bold text-white">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section (WHITE) */}
      <section className="bg-white text-slate-900 relative z-20 pt-24 pb-24 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-aud-blue/5 text-aud-blue font-bold text-[10px] uppercase tracking-[0.2em] mb-6">Why Audcomp?</span>
              <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8">
                38+ Years of <span className="text-aud-blue italic">Technical Legacy.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
                <p>Since 1986, we've delivered solutions that exceed expectations.</p>
                <p>Our team specializes in designing custom, reliable IT frameworks for modern enterprise needs.</p>
              </div>
            </div>
            <div className="relative glass-panel bg-slate-50 p-12 rounded-[3rem] border-slate-100 shadow-xl overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-aud-blue/5 rounded-bl-[100px] flex items-center justify-center pt-2 pl-4">
                  <i className="fas fa-award text-aud-blue/20 text-5xl"></i>
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-7xl font-black text-slate-200 group-hover:text-aud-orange transition-colors">25</span>
                    <div className="h-10 w-px bg-slate-200"></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">CDN Top Rank</p>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">Recognized as a Top 25 Solution Provider for over a decade.</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Section (DARK) - Imagery Focused */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 group glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px] border-white/5 hover:border-white/10 transition-all relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                alt="AI Strategy"
              />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-white">AI Consulting & Deployment</h3>
                <p className="text-slate-400 text-lg max-w-md">Bridging raw data and intelligence. We build and deploy custom LLMs.</p>
              </div>
              <Link to="/ai-assessment" className="relative z-10 flex items-center gap-3 font-bold text-aud-blue group/btn">
                <span>Explore AI Strategy</span>
                <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-2 transition-transform"></i>
              </Link>
            </div>
            <div className="group rounded-[2.5rem] p-10 text-white flex flex-col justify-between border border-white/5 relative overflow-hidden bg-slate-900/50 backdrop-blur">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                alt="Cyber Defense"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Cyber Defense</h3>
                <p className="text-slate-400 text-sm mb-8">Military-grade audits and real-time mitigation.</p>
              </div>
              <Link to="/cybersecurity" className="relative z-10 bg-white text-slate-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-aud-orange hover:text-white transition-colors">
                <i className="fas fa-lock"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Testimonials Section (WHITE) */}
      <section className="bg-white text-slate-900 relative z-20 pt-24 pb-32 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 block">Success Stories</span>
            <h2 className="text-5xl font-bold tracking-tight">Verified <span className="text-aud-blue italic">Partner Impact.</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <div key={i} className="h-full bg-slate-50 rounded-[2rem] p-10 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
                <p className="text-slate-600 leading-relaxed italic mb-12">"{partner.quote}"</p>
                <div>
                  <p className="text-2xl font-normal text-slate-900 mb-1" style={{ fontFamily: 'Dancing Script, cursive, serif' }}>{partner.name}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{partner.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Carousel (DARK) - Imagery Focused */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Industry Events</h2>
              <p className="text-slate-400 max-w-md">Join us at the intersection of security and automation.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevEvent} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <i className="fas fa-chevron-left text-sm"></i>
              </button>
              <button onClick={nextEvent} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <i className="fas fa-chevron-right text-sm"></i>
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-1000 gap-8" style={{ transform: `translateX(calc(-${currentEventIndex * 100}% - ${currentEventIndex * 2}rem))` }}>
              {events.map((event, i) => (
                <div key={i} className="min-w-full md:min-w-[calc(33.333%-1.33rem)] group">
                  <div className="glass-panel rounded-[2.5rem] overflow-hidden border border-white/5 h-full flex flex-col hover:border-white/20 transition-all">
                    <div className="h-60 relative overflow-hidden">
                      <img 
                        src={event.image} 
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        alt={event.title}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} mix-blend-multiply`}></div>
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{event.date}</p>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-slate-500 text-sm mb-12 flex-grow">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counter Footer (DARK) */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Founded", val: "1986" },
            { label: "Avg Uptime", val: "99.9%" },
            { label: "Active Nodes", val: "14.2k" },
            { label: "Team", val: "80+" }
          ].map((s, i) => (
            <AnimatedCounter key={i} value={s.val} label={s.label} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
