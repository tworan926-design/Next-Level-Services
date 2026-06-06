import { Container } from './ui/Container';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/5">
      <div className="py-16">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">NEXT LEVEL <span className="text-blue-500">SERVICES</span></span>
            </a>
            <p className="text-[11px] uppercase tracking-widest text-slate-500 leading-relaxed pr-4 font-bold">
              Your trusted partner in finding the fastest internet at the lowest possible prices.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-300">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Our Benefits</a></li>
              <li><a href="#calculator" className="hover:text-blue-400 transition-colors">Savings Calculator</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <a href="tel:#" className="font-bold text-white hover:text-blue-400 transition-colors">(800) NEXT-LVL</a>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">Mon-Sat: 10 AM – 4 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:support@nextlevel.test" className="hover:text-blue-400 transition-colors">support@nextlevel.test</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <span className="leading-relaxed">Available Nationwide<br/>Headquartered in USA</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4 font-bold">Subscribe for the latest internet savings tips and promo alerts.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none text-white transition-colors" />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg transition-colors font-bold tracking-wider uppercase text-xs">
                Join
              </button>
            </form>
          </div>

        </Container>
      </div>
      
      <div className="bg-[#0a0f1d] border-t border-white/5 py-6">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase text-slate-500">
          <p>© {new Date().getFullYear()} Next Level Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
