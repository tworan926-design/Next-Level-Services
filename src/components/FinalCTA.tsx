import { Container } from './ui/Container';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-blue-600 to-emerald-400 blur-[120px] opacity-20 rounded-full animate-pulse" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#0a0f1d]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            See How Much You Could Save Today
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Stop overpaying for internet. Find a better plan in minutes and keep more money in your pocket every single month.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#calculator" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-5 rounded-xl text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Get Your Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-white/30 text-[10px] font-bold tracking-widest hidden sm:block uppercase">OR</span>
            <a href="tel:#" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold px-8 py-5 rounded-xl text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" /> Call an Expert
            </a>
          </div>
          
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-8 font-bold">
            100% Free Service &bull; No Hidden Fees &bull; Secure Consultation
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
