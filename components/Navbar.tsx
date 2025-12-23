
import React, { useState } from 'react';
import { MessageSquareCode, Menu, X } from 'lucide-react';

interface NavbarProps {
  setView: (view: 'home' | 'solutions' | 'case-studies') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: 'home' | 'solutions' | 'case-studies') => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNav('home')}
        >
          <div className="bg-emerald-500 p-2 rounded-xl shrink-0">
            <MessageSquareCode className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white">Flowgen<span className="text-emerald-500">.</span></span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNav('solutions')} 
            className={`transition-colors ${currentView === 'solutions' ? 'text-emerald-400' : 'hover:text-emerald-400'}`}
          >
            Solutions
          </button>
          <button 
            onClick={() => handleNav('case-studies')} 
            className={`transition-colors ${currentView === 'case-studies' ? 'text-emerald-400' : 'hover:text-emerald-400'}`}
          >
            Case Studies
          </button>
          <a href="#audit" className="bg-emerald-500 text-white px-6 py-2.5 rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">Free Audit</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-20 left-0 right-0 bg-slate-950 border-b border-white/10 transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
        <div className="flex flex-col p-6 gap-6 font-medium text-slate-300">
          <button onClick={() => handleNav('solutions')} className="text-lg py-2 hover:text-emerald-400 border-b border-white/5 text-left">Solutions</button>
          <button onClick={() => handleNav('case-studies')} className="text-lg py-2 hover:text-emerald-400 border-b border-white/5 text-left">Case Studies</button>
          <a href="#audit" onClick={() => setIsOpen(false)} className="w-full text-center bg-emerald-500 text-white py-4 rounded-xl">Claim Free Audit</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
