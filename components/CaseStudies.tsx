
import React from 'react';
import { MessageSquare, Bell, ArrowRight, Share2, AlertCircle } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-24">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Real WhatsApp Automation Implementations</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          We build practical WhatsApp automation systems focused on solving real operational problems.
        </p>
      </div>

      {/* Pilot Implementation Card */}
      <section className="mb-24">
        <div className="glass p-8 md:p-12 rounded-[3rem] border-emerald-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-6 py-2 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl">
            Pilot Implementation
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">BaSu Lac Studio</h2>
                <p className="text-slate-500 font-medium">D2C Luxury Decor Brand</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">The Problem</h3>
                  <p className="text-slate-300 leading-relaxed italic">
                    "We were overwhelmed with repetitive queries about order status and losing customers because we couldn't reply fast enough to cart abandonment."
                  </p>
                </div>

                <div>
                  <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">System Built</h3>
                  <ul className="space-y-3">
                    {[
                      "Automated Cart Recovery workflows",
                      "Instant Order Status lookup via WhatsApp",
                      "Automated Material Care Guide delivery",
                      "Real-time support handoff logic for custom orders"
                    ].map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">Outcome</h3>
                  <p className="text-white font-medium">
                    Automated 80% of routine manual support tickets and eliminated response delay for cart recovery triggers.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900 rounded-3xl p-6 border border-white/5 h-full min-h-[300px] flex flex-col justify-center items-center text-center">
                <MessageSquare className="w-16 h-16 text-slate-700 mb-6" />
                <p className="text-slate-500 text-sm font-medium px-4">
                  Actual WhatsApp flow screenshots and logic architecture available during the audit session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal System Section */}
      <section className="mb-24 py-16 bg-slate-900/50 rounded-[3rem] border border-white/5">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-3 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
            <AlertCircle className="w-4 h-4" />
            <span>Internal Automation System</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6">How We Use It</h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            We use the same WhatsApp automation system on our own website to capture, qualify, and route enquiries in real time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-slate-950 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-emerald-400" /> Bot Flow Logic
                </h3>
                <div className="space-y-3 text-xs font-mono text-slate-500">
                  <div className="p-2 border border-white/10 rounded">1. Incoming Message Detection</div>
                  <div className="p-2 border border-white/10 rounded ml-4">2. Check Office Hours</div>
                  <div className="p-2 border border-white/10 rounded ml-8">3. Ask for Institute/Brand Type</div>
                  <div className="p-2 border border-white/10 rounded ml-12">4. Route to Founder/Specialist</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-950 rounded-2xl border border-white/5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Bell className="w-4 h-4 text-emerald-400" /> Admin Alert Logic
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                When you book an audit, our internal system instantly:
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>• Creates a lead entry in our system</li>
                <li>• Notifies our team on a private WhatsApp channel</li>
                <li>• Sends an automated confirmation to your WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <p className="text-slate-500 mb-8">Want a system like this?</p>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center justify-center gap-3 transition-all">
          Book a Free Audit <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
