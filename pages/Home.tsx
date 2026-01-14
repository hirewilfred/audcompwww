
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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

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

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, numericPart, isDate, startValue]);

  return (
    <div ref={elementRef} className="text-center">
      <p className="text-3xl font-bold mb-1">
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
      accent: "text-aud-blue",
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4628c7007?q=80&w=2000&auto=format&fit=crop", // Futuristic Data/AI visualization
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
    },
    {
      badge: "Cyber Defense Experts",
      title: "Military-grade protection for digital assets",
      desc: "Zero-trust architecture and real-time threat mitigation. We protect your enterprise from AI-driven cyber attacks before they strike.",
      ctaPrimary: "Secure Your Network",
      ctaLink: "/cybersecurity",
      color: "orange",
      accent: "text-aud-orange",
      bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop", // Abstract security/matrix visual
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      badge: "Managed IT Partner",
      title: "Seamless 24/7 Managed IT Services",
      desc: "Proactive monitoring, cloud management, and full-spectrum support. Engineering resilient digital systems for over three decades.",
      ctaPrimary: "Explore Managed IT",
      ctaLink: "/managed-it",
      color: "emerald",
      accent: "text-emerald-400",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop", // Clean datacenter/server visual
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const events = [
    {
      title: "Distributech (DTECH26)",
      date: "Feb 2-5, 2026",
      location: "San Diego, CA",
      description: "Mission-critical grid automation and AI-driven distribution testing.",
      logo: "DTECH",
      color: "from-blue-600/20 to-indigo-900/40"
    },
    {
      title: "ARC Industry Forum",
      date: "Feb 9-12, 2026",
      location: "Orlando, FL",
      description: "How AI is driving the future of industrial supply-chain management.",
      logo: "ARC",
      color: "from-orange-600/20 to-orange-900/40"
    },
    {
      title: "S4x26 Cyber Expo",
      date: "Feb 23-26, 2026",
      location: "Miami, FL",
      description: "The world's premier OT security event for critical infrastructure.",
      logo: "S4x26",
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
    },
    {
      name: "Strategy Review",
      role: "Global Operations",
      avatar: "https://i.pravatar.cc/150?u=pri",
      quote: "Audcomp greatly exceeded our expectations.",
      type: "video",
      videoThumb: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800"
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
    <div className="min-h-screen indigo-gradient selection:bg-blue-500/30 overflow-x-hidden">
      <SEO 
        title="Managed IT & AI Consulting Hamilton" 
        description="Audcomp: Your partner for resilient IT, cybersecurity, and advanced AI infrastructure."
      />
      
      {/* Dynamic Background Image Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${idx === currentHeroSlide ? 'opacity-30' : 'opacity-0'}`}
          >
            <img 
              src={slide.bgImage} 
              alt="" 
              className="w-full h-full object-cover scale-110 blur-[2px]" 
            />
            <div className="absolute inset-0 bg-[#0d0e25]/60"></div>
          </div>
        ))}
      </div>

      {/* Dynamic Background Glows */}
      <div className={`fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 glow-sphere blur-[100px] transition-colors duration-1000 ${
        currentHeroSlide === 0 ? 'bg-blue-600/20' : currentHeroSlide === 1 ? 'bg-orange-600/15' : 'bg-emerald-600/15'
      }`}></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 text-left min-h-[500px] flex flex-col justify-center">
            <div className="relative overflow-hidden h-[300px] sm:h-[260px] lg:h-[320px]">
              {heroSlides.map((slide, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    idx === currentHeroSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      idx === 1 ? 'bg-aud-orange' : idx === 2 ? 'bg-emerald-500' : 'bg-[#5c7cff]'
                    } text-white`}>
                      {idx === 0 ? 'AI' : idx === 1 ? 'SEC' : 'IT'}
                    </span>
                    <span className="text-xs font-medium text-slate-400 tracking-tight">{slide.badge}</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-gradient">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={word.toLowerCase() === 'resilient' || word.toLowerCase() === 'military-grade' || word.toLowerCase() === 'seamless' ? 'italic' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  
                  <p className="text-lg text-slate-400 max-w-lg mb-12 leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                to={heroSlides[currentHeroSlide].ctaLink} 
                className={`px-8 py-4 rounded-xl font-bold shadow-2xl transition-all duration-500 text-center ${
                  currentHeroSlide === 1 ? 'bg-aud-orange' : currentHeroSlide === 2 ? 'bg-emerald-600' : 'bg-white text-[#0d0e25]'
                } text-white hover:opacity-90`}
              >
                {heroSlides[currentHeroSlide].ctaPrimary}
              </Link>
              <Link to="/services" className="glass-panel text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center">
                View Solutions
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="mt-16 flex gap-4">
              {heroSlides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentHeroSlide(i)}
                  className="group flex flex-col gap-2"
                >
                  <div className={`h-1 rounded-full transition-all duration-500 ${i === currentHeroSlide ? 'w-12 bg-white' : 'w-6 bg-white/20'}`}></div>
                  <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-opacity duration-500 ${i === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}>
                    {['AI Strategy', 'Cyber Defense', 'Managed IT'][i]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative group w-full">
            <div className={`absolute -inset-1 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-1000 bg-gradient-to-r ${
              currentHeroSlide === 0 ? 'from-blue-500 to-indigo-600' : 
              currentHeroSlide === 1 ? 'from-orange-500 to-red-600' : 
              'from-emerald-500 to-teal-600'
            }`}></div>
            <div className="relative glass-panel rounded-[2rem] overflow-hidden border border-white/10 p-2 h-[500px]">
              <div className="bg-[#0f112a] rounded-[1.8rem] h-full relative overflow-hidden">
                
                {/* Dashboard Elements */}
                <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full bg-slate-900/40 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur border border-white/10 flex items-center justify-center">
                        <i className={`fas ${currentHeroSlide === 0 ? 'fa-brain' : currentHeroSlide === 1 ? 'fa-shield-halved' : 'fa-server'} text-xs text-white`}></i>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Status Monitor</p>
                        <p className="text-sm font-bold text-white">{heroSlides[currentHeroSlide].badge}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${
                        currentHeroSlide === 0 ? 'bg-blue-500' : currentHeroSlide === 1 ? 'bg-aud-orange' : 'bg-emerald-500'
                      }`}></div>
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <div className="glass-panel p-6 rounded-2xl border-white/5 backdrop-blur-md">
                      <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Live Throughput</p>
                      <p className="text-3xl font-bold text-white">4.2ms</p>
                      <div className="mt-4 flex gap-1 h-8 items-end">
                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                          <div key={i} className={`flex-1 rounded-t transition-colors duration-500 ${
                            currentHeroSlide === 0 ? 'bg-blue-500/40' : currentHeroSlide === 1 ? 'bg-aud-orange/40' : 'bg-emerald-500/40'
                          }`} style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border-white/5 backdrop-blur-md">
                      <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">System Integrity</p>
                      <p className="text-3xl font-bold text-white">100%</p>
                      <div className="mt-4 flex flex-col gap-2">
                         <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className={`h-full transition-all duration-1000 ${
                             currentHeroSlide === 0 ? 'bg-blue-500' : currentHeroSlide === 1 ? 'bg-aud-orange' : 'bg-emerald-500'
                           }`} style={{ width: '100%' }}></div>
                         </div>
                         <p className="text-[8px] text-slate-500 font-bold uppercase">All nodes active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section: 38+ Years of Excellence */}
      <section className="bg-white text-slate-900 relative z-20 pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-aud-blue/5 text-aud-blue font-bold text-[10px] uppercase tracking-[0.2em] mb-6">Why Us?</span>
              <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8">
                Delivering IT Solutions For Over <span className="text-aud-blue italic">38+ Years.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
                <p>
                  Since 1986, Audcomp has delivered IT Services and Solutions that not only meet clients’ ever-changing needs, but also exceed their expectations.
                </p>
                <p>
                  Our team of professionals specialize in designing and implementing custom, reliable, and cost-effective IT Services for every business need.
                </p>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <Link to="/services" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-aud-blue transition-all text-center">
                  Our Service Portfolio
                </Link>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center">
                    <i className="fas fa-play text-aud-blue text-xs"></i>
                  </div>
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Our Vision</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-aud-orange/10 rounded-full blur-3xl"></div>
              <div className="relative glass-panel bg-slate-50 p-10 lg:p-16 rounded-[3rem] border-slate-100 shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-aud-blue/5 rounded-bl-[100px] flex items-center justify-center pt-2 pl-4">
                  <i className="fas fa-award text-aud-blue/20 text-5xl"></i>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-7xl font-black text-slate-200 group-hover:text-aud-orange transition-colors duration-500">25</span>
                    <div className="h-10 w-px bg-slate-200"></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Top CDN Rank</p>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">
                    Recognized among the top 25 on CDN’s annual Top 100 Solutions Providers list for over a decade.
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Stability</p>
                      <p className="text-sm font-bold text-slate-700">Established 1986</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Presence</p>
                      <p className="text-sm font-bold text-slate-700">Coast to Coast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Testimonials Section */}
      <section className="bg-[#fcfcfc] text-slate-900 relative z-20 pt-24 pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 block">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-normal tracking-tight leading-[1.1] text-slate-900">
              Don't take our word for it!<br/>
              <span className="font-light text-slate-700">Hear it from our partners.</span>
            </h2>
          </div>

          <div className="flex flex-nowrap lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-12 scrollbar-hide lg:overflow-visible">
            {partners.map((partner, i) => (
              <div key={i} className={`min-w-[320px] lg:min-w-0 flex-shrink-0 relative group ${partner.type === 'video' ? 'lg:scale-105 z-10' : ''}`}>
                {partner.type === 'video' ? (
                  <div className="relative h-full rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src={partner.videoThumb} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition-transform cursor-pointer">
                        <i className="fas fa-play text-white ml-1"></i>
                      </div>
                    </div>

                    <div className="absolute top-6 left-6">
                       <div className="w-10 h-10 rounded-full bg-aud-blue flex items-center justify-center text-white font-bold text-xs">A</div>
                    </div>

                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-xl italic font-serif mb-1" style={{ fontFamily: 'Dancing Script, cursive, serif' }}>{partner.name}</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">{partner.role}</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
                    <div>
                      <div className="w-10 h-10 rounded-full mb-8 bg-slate-50 flex items-center justify-center border border-slate-100">
                        <i className="fas fa-quote-left text-aud-blue text-xs"></i>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm mb-12 italic">
                        "{partner.quote}"
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-normal text-slate-900 mb-1" style={{ fontFamily: 'Dancing Script, cursive, serif' }}>{partner.name}</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{partner.role}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="bg-white text-slate-900 relative z-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 group bg-slate-50 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-aud-blue/5">
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  <i className="fas fa-microchip text-aud-blue text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4">AI Consulting & Deployment</h3>
                <p className="text-slate-500 text-lg max-w-md">
                  Bridge the gap between raw data and business intelligence. We design, train, and deploy custom LLMs.
                </p>
              </div>
              <Link to="/ai-assessment" className="flex items-center gap-3 font-bold text-aud-blue group/btn">
                <span>Explore AI Strategy</span>
                <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-2 transition-transform"></i>
              </Link>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between transition-all duration-500 border border-transparent hover:border-white/10">
              <h3 className="text-2xl font-bold mb-4">Cyber Defense</h3>
              <p className="text-slate-400 text-sm mb-8">
                Military-grade security audits and real-time threat mitigation.
              </p>
              <Link to="/cybersecurity" className="bg-white text-slate-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-aud-orange hover:text-white transition-colors">
                <i className="fas fa-lock"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Carousel */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-slate-400 max-w-md">Join us at the intersection of OT security, industrial automation, and enterprise AI.</p>
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
            <div 
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] gap-8"
              style={{ transform: `translateX(calc(-${currentEventIndex * 100}% - ${currentEventIndex * 2}rem))` }}
            >
              {events.map((event, i) => (
                <div key={i} className="min-w-full md:min-w-[calc(33.333%-1.33rem)] group">
                  <div className={`glass-panel rounded-[2.5rem] overflow-hidden border border-white/5 h-full flex flex-col hover:border-white/20 transition-all duration-500`}>
                    <div className={`h-60 bg-gradient-to-br ${event.color} relative flex items-center justify-center p-12`}>
                      <div className="text-4xl font-black text-white/90 bg-white/5 px-6 py-4 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
                        {event.logo}
                      </div>
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{event.date}</p>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-slate-500 text-sm mb-12 flex-grow">{event.description}</p>
                      <button className="flex items-center justify-between group/link">
                        <span className="text-sm font-bold text-white">Register Now</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-black transition-all">
                          <i className="fas fa-arrow-right text-xs"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto glass-panel rounded-[4rem] p-12 lg:p-24 text-center border-white/10 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight text-gradient">Build your tech fortress</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ai-assessment" className="bg-[#5c7cff] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:bg-blue-600 transition-all">
              Launch Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Counter Footer */}
      <section className="pb-20 px-6 relative z-10">
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
