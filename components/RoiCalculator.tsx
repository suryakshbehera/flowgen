
import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Info, Users, Zap } from 'lucide-react';

const RoiCalculator: React.FC = () => {
  const [enquiries, setEnquiries] = useState(300);
  const [convRate, setConvRate] = useState(5);
  const [avgFee, setAvgFee] = useState(25000);
  const [replyTime, setReplyTime] = useState(1.12); // R factor: Default 1-3 hours

  const results = useMemo(() => {
    const Cn = convRate / 100;
    const Fr = 1.08;
    let Cnew = Cn * replyTime * Fr;
    
    // Cap at 25%
    if (Cnew > 0.25) Cnew = 0.25;

    const currentEnrollments = enquiries * Cn;
    const newEnrollments = enquiries * Cnew;
    const deltaEnrollments = Math.floor(newEnrollments - currentEnrollments);
    
    // Revenue lift
    const revenueLift = Math.max(0, deltaEnrollments * avgFee);
    const lowerBound = revenueLift * 0.7;
    const upperBound = revenueLift * 1.1;

    return {
      deltaEnrollments,
      revenueLift,
      lowerBound,
      upperBound
    };
  }, [enquiries, convRate, avgFee, replyTime]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleValidate = () => {
    const auditSection = document.getElementById('audit');
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4">
            <Calculator className="w-4 h-4" />
            <span>Revenue Opportunity Analysis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Calculate Your <span className="gradient-text">Recoverable Revenue</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Discover how much revenue is currently being lost due to delayed responses and missed follow-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Inputs */}
          <div className="lg:col-span-7 space-y-8 glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Monthly WhatsApp Enquiries</label>
                  <span className="text-emerald-400 font-mono font-bold">{enquiries}</span>
                </div>
                <input 
                  type="range" min="10" max="5000" step="10"
                  value={enquiries}
                  onChange={(e) => setEnquiries(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Current Conversion Rate (%)</label>
                  <span className="text-emerald-400 font-mono font-bold">{convRate}%</span>
                </div>
                <input 
                  type="range" min="1" max="25" step="0.5"
                  value={convRate}
                  onChange={(e) => setConvRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider">Average Fee (₹)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
                  <input 
                    type="number"
                    value={avgFee}
                    onChange={(e) => setAvgFee(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-white/10 p-4 pl-10 rounded-xl focus:border-emerald-500 outline-none transition-all text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Current Reply Speed</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Instant", value: 1.00 },
                    { label: "5-30m", value: 1.05 },
                    { label: "1-3h", value: 1.12 },
                    { label: "Later", value: 1.20 }
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => setReplyTime(item.value)}
                      className={`py-3 px-2 rounded-xl border text-xs font-bold transition-all ${
                        replyTime === item.value 
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/10' 
                        : 'bg-slate-950/50 border-white/5 text-slate-500 hover:border-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-1 rounded-[2.5rem] shadow-2xl shadow-emerald-500/20">
              <div className="bg-slate-950 p-8 md:p-10 rounded-[2.4rem] h-full flex flex-col items-center text-center">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Estimated Monthly Opportunity</p>
                <div className="text-3xl md:text-4xl font-black text-white">
                  {formatCurrency(results.lowerBound)} – {formatCurrency(results.upperBound)}
                </div>
                <p className="text-slate-500 text-xs mt-2 font-medium">Based on faster replies and automated follow-ups.</p>
                
                <div className="w-full h-px bg-white/5 my-8"></div>

                <div className="grid grid-cols-1 gap-6 w-full mb-10 text-left">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/10 p-2 rounded-lg shrink-0">
                      <Users className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-none">+{results.deltaEnrollments} additional enrollments / month</div>
                      <div className="text-slate-500 text-xs mt-1">Conservative monthly growth estimate</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/10 p-2 rounded-lg shrink-0">
                      <Zap className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-none">Recoverable Loss</div>
                      <div className="text-slate-500 text-xs mt-1">Based on recoverable missed enquiries</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleValidate}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-emerald-500/20"
                >
                  Validate These Numbers <ArrowRight className="w-5 h-5" />
                </button>

                <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-wider font-medium text-center">
                  <Info className="w-3 h-3 shrink-0" />
                  <span>Estimates are based on reply speed and follow-up improvements. Actual results may vary by institute.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
