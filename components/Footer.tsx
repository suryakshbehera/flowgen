
import React from 'react';
import { MessageSquareCode, Instagram, Twitter, Linkedin, Github, Phone, MapPin, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-500 p-2 rounded-xl">
                <MessageSquareCode className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Dialogic<span className="text-emerald-500">.</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Premium WhatsApp automation agency specialized in hyper-scaling operations for coaching institutes and D2C brands.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <User className="w-4 h-4 text-emerald-500" />
                <span>Founded by Dialogic Ops Team</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+91 99999 00000</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Coaching Institutes</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">D2C E-commerce</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">AI CRM Integration</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Lead Qualification</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Refund Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Social Connect</h4>
            <p className="text-slate-500 text-sm mb-6">Follow our journey on social platforms.</p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-slate-500 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-500 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-500 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-500 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">© 2024 Dialogic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
