
import React from 'react';
import { CheckCircle2, UserCheck, Timer, CalendarClock, BellRing, ChevronRight } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <div className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">WhatsApp Automation Systems</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          We build practical automation that handles student inquiries reliably, 24/7.
        </p>
      </div>

      {/* Who This Is For */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-emerald-400 mb-8 uppercase tracking-widest border-b border-white/5 pb-4">Who This Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Coaching Institutes", desc: "Handling high-volume entrance exam and course inquiries." },
            { title: "EdTech Businesses", desc: "Scaling online course sales and student support." },
            { title: "D2C Brands", desc: "Using WhatsApp for direct sales and automated customer support." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-emerald-400 mb-8 uppercase tracking-widest border-b border-white/5 pb-4">Problems We Solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Missed WhatsApp enquiries during peak hours",
            "Delayed replies outside office hours (nights/weekends)",
            "No systematic follow-up process for cold leads",
            "Counsellor overload from unqualified or repetitive queries"
          ].map((problem, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-900/50 p-6 rounded-xl border border-white/5">
              <div className="w-2 h-2 rounded-full bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              <span className="text-slate-300 font-medium">{problem}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our System */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-emerald-400 mb-8 uppercase tracking-widest border-b border-white/5 pb-4">Our WhatsApp Automation System</h2>
        <div className="space-y-4">
          {[
            { icon: <Timer />, title: "Instant reply to every enquiry", desc: "The system acknowledges every message within seconds." },
            { icon: <UserCheck />, title: "Smart qualification questions", desc: "Asks relevant details (name, course, location) before notifying staff." },
            { icon: <CalendarClock />, title: "Automated follow-ups", desc: "Reminds leads who haven't responded within a set timeframe." },
            { icon: <BellRing />, title: "Human handoff when required", desc: "Notifies counsellors immediately when a lead is ready to talk." },
            { icon: <CheckCircle2 />, title: "Admin alerts & visibility", desc: "Full logs of every conversation for management oversight." }
          ].map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-6 glass p-8 rounded-2xl border-l-4 border-l-emerald-500">
              <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-400">
                {step.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-emerald-400 mb-8 uppercase tracking-widest border-b border-white/5 pb-4">Outcomes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Faster replies across all enquiries",
            "Zero missed enquiries during off-hours",
            "Reduced manual workload for admission teams",
            "Clear enquiry tracking and history"
          ].map((outcome, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-300">{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all shadow-xl shadow-emerald-500/20">
          Book Free WhatsApp Audit <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Solutions;
