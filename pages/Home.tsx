
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
      accent: "bg-[#5c7cff]",
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4628c7007?q=80&w=2000&auto=format&fit=crop"
    },
    {
      badge: "Cyber Defense Experts",
      title: "Military-grade protection for digital assets",
      desc: "Zero-trust architecture and real-time threat mitigation. We protect your enterprise from AI-driven cyber attacks before they strike.",
      ctaPrimary: "Secure Your Network",
      ctaLink: "/cybersecurity",
      accent: "bg-aud-orange",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
    },
    {
      badge: "Managed IT Partner",
      title: "Seamless 24/7 Managed IT Services",
      desc: "Proactive monitoring, cloud management, and full-spectrum support. Engineering resilient digital systems for over three decades.",
      ctaPrimary: "Explore Managed IT",
      ctaLink: "/managed-it",
      accent: "bg-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop"
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
      
      {/* Dynamic Immersive Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${idx === currentHeroSlide ? 'opacity-40 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-1'}`}
          >
            <img src={slide.bgImage} alt="" className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e25] via-[#0d0e25]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e25] to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Reworked Hero Section - Full Width Immersive */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="max-w-3xl">
            <div className="relative overflow-hidden h-[380px] sm:h-[340px] lg:h-[420px]">
              {heroSlides.map((slide, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${idx === currentHeroSlide ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-sm pointer-events-none'}`}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-md">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${slide.accent} text-white uppercase tracking-widest shadow-lg`}>
                      {idx === 0 ? 'AI' : idx === 1 ? 'SEC' : 'IT'}
                    </span>
                    <span className="text-xs font-bold text-slate-200 tracking-tight uppercase tracking-widest">{slide.badge}</span>
                  </div>
                  
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-10 tracking-tighter text-gradient">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className="inline-block mr-4">
                        {word === "weeks" || word === "assets" || word === "Services" ? (
                          <span className={`italic ${idx === 1 ? 'text-aud-orange' : idx === 2 ? 'text-emerald-500' : 'text-aud-blue'}`}>{word}</span>
                        ) : word}
                      </span>
                    ))}
                  </h1>
                  
                  <p className="text-xl text-slate-300 max-w-xl mb-12 leading-relaxed font-medium drop-shadow-sm">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link 
                to={heroSlides[currentHeroSlide].ctaLink} 
                className={`px-10 py-5 rounded-2xl font-black text-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 text-center flex items-center justify-center gap-3 ${currentHeroSlide === 1 ? 'bg-aud-orange hover:bg-orange-500' : currentHeroSlide === 2 ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-white text-[#0d0e25] hover:bg-slate-100'} text-white group`}
              >
                <span>{heroSlides[currentHeroSlide].ctaPrimary}</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link to="/services" className="glass-panel text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all text-center border-white/20 backdrop-blur-xl">
                View Solutions
              </Link>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex gap-4 mt-20">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentHeroSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentHeroSlide ? `w-12 ${heroSlides[i].accent}` : 'w-6 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section (WHITE) */}
      <section className="bg-white text-slate-900 relative z-20 pt-32 pb-32 rounded-t-[5rem] shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-aud-blue/5 text-aud-blue font-black text-[10px] uppercase tracking-[0.3em] mb-8">Why Audcomp?</span>
              <h2 className="text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-10">
                38+ Years of <br /><span className="text-aud-blue italic">Technical Legacy.</span>
              </h2>
              <div className="space-y-8 text-xl text-slate-500 leading-relaxed font-medium">
                <p>Since 1986, we've delivered solutions that exceed expectations.</p>
                <p>Our team specializes in designing custom, reliable IT frameworks for modern enterprise needs across Canada.</p>
              </div>
            </div>
            <div className="relative glass-panel bg-slate-50 p-16 rounded-[4rem] border-slate-100 shadow-2xl overflow-hidden group">
               <div className="absolute top-0 right-0 w-40 h-40 bg-aud-blue/5 rounded-bl-[120px] flex items-center justify-center pt-2 pl-4">
                  <i className="fas fa-award text-aud-blue/10 text-7xl"></i>
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-8xl font-black text-slate-200 group-hover:text-aud-orange transition-colors">25</span>
                    <div className="h-16 w-px bg-slate-200"></div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">CDN Magazine</p>
                      <p className="text-sm font-bold text-slate-900">Top Ranked Partner</p>
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">Recognized as a Top 25 Solution Provider for over a decade.</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Section (DARK) */}
      <section className="relative z-20 py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 group glass-panel rounded-[3.5rem] p-12 flex flex-col justify-between min-h-[450px] border-white/10 hover:border-white/20 transition-all relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                alt="AI Strategy"
              />
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aud-blue mb-4 block">Strategic AI</span>
                <h3 className="text-5xl font-black mb-6 text-white tracking-tighter">AI Consulting & Deployment</h3>
                <p className="text-slate-400 text-xl max-w-md font-medium leading-relaxed">Bridging raw data and intelligence. We build and deploy custom LLMs for high-security environments.</p>
              </div>
              <Link to="/ai-assessment" className="relative z-10 flex items-center gap-4 font-black text-aud-blue text-lg group/btn mt-8">
                <span>Explore AI Strategy</span>
                <div className="w-12 h-12 rounded-full border border-aud-blue flex items-center justify-center group-hover/btn:bg-aud-blue group-hover/btn:text-white transition-all">
                  <i className="fas fa-arrow-right text-sm"></i>
                </div>
              </Link>
            </div>
            <div className="group rounded-[3.5rem] p-12 text-white flex flex-col justify-between border border-white/10 relative overflow-hidden bg-slate-900/50 backdrop-blur-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                alt="Cyber Defense"
              />
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aud-orange mb-4 block">Cyber Defense</span>
                <h3 className="text-3xl font-black mb-6 tracking-tighter">ZeroTrust Protection</h3>
                <p className="text-slate-400 text-base mb-8 font-medium leading-relaxed">Military-grade audits and real-time mitigation for mission-critical digital assets.</p>
              </div>
              <Link to="/cybersecurity" className="relative z-10 bg-white text-slate-900 w-16 h-16 rounded-3xl flex items-center justify-center hover:bg-aud-orange hover:text-white transition-all duration-500 shadow-2xl">
                <i className="fas fa-lock text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Testimonials Section (WHITE) */}
      <section className="bg-white text-slate-900 relative z-20 pt-32 pb-40 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6 block">Operational Trust</span>
            <h2 className="text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">Verified <span className="text-aud-blue italic">Partner Impact.</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {partners.map((partner, i) => (
              <div key={i} className="h-full bg-slate-50 rounded-[4rem] p-12 border border-slate-100 flex flex-col justify-between hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-4">
                <p className="text-slate-600 leading-relaxed italic mb-16 text-xl font-medium">"{partner.quote}"</p>
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-4xl font-normal text-slate-900 mb-2" style={{ fontFamily: 'Dancing Script, cursive, serif' }}>{partner.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">{partner.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Carousel (DARK) */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aud-blue mb-4 block">Upcoming Roadshow</span>
              <h2 className="text-6xl font-black text-white tracking-tighter leading-[0.9]">Industry <span className="italic text-aud-orange">Events.</span></h2>
            </div>
            <div className="flex gap-6">
              <button onClick={prevEvent} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all">
                <i className="fas fa-chevron-left text-sm"></i>
              </button>
              <button onClick={nextEvent} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all">
                <i className="fas fa-chevron-right text-sm"></i>
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] gap-10" style={{ transform: `translateX(calc(-${currentEventIndex * 100}% - ${currentEventIndex * 2.5}rem))` }}>
              {events.map((event, i) => (
                <div key={i} className="min-w-full md:min-w-[calc(33.333%-1.66rem)] group">
                  <div className="glass-panel rounded-[4rem] overflow-hidden border border-white/5 h-full flex flex-col hover:border-white/20 transition-all duration-700 shadow-2xl">
                    <div className="h-72 relative overflow-hidden">
                      <img 
                        src={event.image} 
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1500ms]"
                        alt={event.title}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} mix-blend-multiply`}></div>
                    </div>
                    <div className="p-12 flex flex-col flex-grow">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6">{event.date}</p>
                      <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{event.title}</h3>
                      <p className="text-slate-500 text-base mb-12 flex-grow font-medium leading-relaxed">{event.description}</p>
                      <div className="pt-6 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counter Footer (DARK) */}
      <section className="pb-32 px-6 relative z-10 border-t border-white/5 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
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
