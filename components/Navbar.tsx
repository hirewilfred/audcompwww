
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d0e25]/80 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/Audcomp/Audcomp/refs/heads/main/Audcomp_Logo_White_Horizontal.png" 
                alt="Audcomp Logo" 
                className="h-7 md:h-8 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('span');
                    fallback.className = "text-xl font-bold tracking-tight text-white";
                    fallback.innerText = "Audcomp";
                    parent.appendChild(fallback);
                  }
                }}
              />
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/services" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Services</Link>
              <Link to="/managed-it" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Partners</Link>
              <Link to="/cybersecurity" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Cyber</Link>
              <Link to="/about" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">About</Link>
              <Link to="/ai-assessment" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">AI Resources</Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-400 hover:text-white text-sm font-medium px-4">Log in</button>
            <Link to="/ai-assessment" className="bg-[#5c7cff] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all">
              Book a demo
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0e25] border-t border-white/10 py-6 px-6 space-y-6 shadow-2xl">
          <Link to="/services" className="block text-slate-300 text-lg" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/managed-it" className="block text-slate-300 text-lg" onClick={() => setIsOpen(false)}>Partners</Link>
          <Link to="/cybersecurity" className="block text-slate-300 text-lg" onClick={() => setIsOpen(false)}>Cyber</Link>
          <Link to="/about" className="block text-slate-300 text-lg" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/ai-assessment" className="block text-aud-orange font-bold text-lg" onClick={() => setIsOpen(false)}>AI Consulting</Link>
          <div className="flex flex-col gap-4 pt-4">
            <button className="text-white border border-white/20 py-3 rounded-xl font-bold">Log in</button>
            <Link to="/" className="bg-[#5c7cff] text-white py-3 rounded-xl font-bold text-center" onClick={() => setIsOpen(false)}>Book a demo</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
