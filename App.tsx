
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import RoiCalculator from './components/RoiCalculator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'solutions' | 'case-studies'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden selection:bg-emerald-500/30">
      <Navbar setView={setCurrentView} currentView={currentView} />
      
      <main className="pt-20">
        {currentView === 'home' && (
          <>
            <Hero setView={setCurrentView} />
            <div className="py-12 border-y border-white/5 bg-slate-900/50">
              <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-slate-500 text-sm font-medium tracking-widest uppercase mb-8">
                  Specialized in WhatsApp Automation for Education & Brands
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale transition-all">
                  <span className="text-xl font-bold">EDUVERSE</span>
                  <span className="text-xl font-bold">ACADEMY-X</span>
                  <span className="text-xl font-bold">BASULAC</span>
                  <span className="text-xl font-bold">PREP-PLUS</span>
                </div>
              </div>
            </div>
            
            <section className="py-24 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Operational Efficiency</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
                  Most enquiries come outside office hours. If you reply late, the lead goes cold. We solve this with automated, reliable systems.
                </p>
                <button 
                  onClick={() => setCurrentView('solutions')}
                  className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-8 py-3 rounded-full hover:bg-emerald-500 hover:text-white transition-all font-bold"
                >
                  Explore Our System
                </button>
              </div>
            </section>

            <RoiCalculator />
          </>
        )}

        {currentView === 'solutions' && <Solutions />}
        {currentView === 'case-studies' && <CaseStudies />}
        
        {/* Universal CTA */}
        <section id="audit" className="py-24 bg-gradient-to-b from-slate-950 to-emerald-950/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Want to Stop Missing <span className="text-emerald-400">WhatsApp Enquiries</span>?</h2>
            <p className="text-xl text-slate-400 mb-10">
              Book a free automation audit and see how Dialogic can optimize your inquiry handling.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 mx-auto transition-all shadow-xl shadow-emerald-500/20">
              Book Free WhatsApp Audit
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
