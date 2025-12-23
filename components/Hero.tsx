
import React from 'react';
import { Rocket, MousePointer2 } from 'lucide-react';

interface HeroProps {
  setView: (view: 'home' | 'solutions' | 'case-studies') => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-8">
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Operational WhatsApp Systems for Education</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 text-balance">
            Stop Missing Coaching <br />
            <span className="gradient-text">Enquiries on WhatsApp</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed">
            Instant WhatsApp replies, automated follow-ups, and smart handoff to your counsellors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-500/20">
              Book Free WhatsApp Audit
              <MousePointer2 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView('solutions')}
              className="px-10 py-5 glass hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all border border-white/10"
            >
              How it Works
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Instant WhatsApp Response", value: "< 2s" },
            { label: "Automated Enquiry Handling", value: "24/7" },
            { label: "No Missed Leads", value: "Reliable" },
            { label: "Counsellor Handoff", value: "Smart" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl glass border border-white/5">
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
