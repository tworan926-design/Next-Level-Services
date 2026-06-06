import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Container } from './ui/Container';

export function Hero() {
  return (
    <section className="relative bg-[#020617] text-white overflow-hidden py-16 lg:py-24">
      {/* Background ambient light */}
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
      
      <Container className="relative relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-xs font-bold mb-6 text-blue-400 tracking-widest uppercase">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Stop Overpaying For Internet Today
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Fastest Internet</span> <br className="hidden lg:block"/> at the Lowest Price.
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
            We help you compare top internet providers in your area, lower your monthly bill, and unlock hidden promotional offers like free phones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#calculator" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Check My Savings <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:#" className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all">
              Call for Free Quote
            </a>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-300 italic">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              </div>
              <span>100% Free Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
              </div>
              <span>Expert Guidance</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto lg:mx-0 bg-[#0a0f1d] border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-center whitespace-nowrap">
            Get Your Free Quote
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 text-center mt-2">See how much you could save</h3>
          <p className="text-slate-500 text-xs text-center mb-6">Enter your details for an instant free quote.</p>
          
          <form className="space-y-4 text-white" onSubmit={(e) => { e.preventDefault(); window.location.href = '#calculator'; }}>
            <div>
              <label className="text-[10px] text-slate-500 font-bold uppercase mb-1.5 block tracking-widest">Your Name</label>
              <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="text-[10px] text-slate-500 font-bold uppercase mb-1.5 block tracking-widest">Zip Code</label>
              <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="e.g. 90210" />
            </div>
            <div>
              <label className="text-[10px] text-slate-500 font-bold uppercase mb-1.5 block tracking-widest">Current Provider</label>
              <select className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none text-slate-300">
                <option value="">Select current provider</option>
                <option value="spectrum">Spectrum</option>
                <option value="xfinity">Xfinity / Comcast</option>
                <option value="att">AT&T</option>
                <option value="verizon">Verizon Fios</option>
                <option value="other">Other / Not sure</option>
              </select>
            </div>
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
              Get My Free Estimate <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-[10px] text-center text-slate-500 mt-4 leading-tight">
              Secure, no-obligation consultation.
            </p>
          </form>
        </motion.div>

      </Container>
    </section>
  );
}
