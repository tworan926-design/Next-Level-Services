import { Container } from './ui/Container';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function Comparison() {
  const points = [
    { label: "Finds the absolute lowest advertised price", us: true, them: true },
    { label: "Uncovers hidden, unadvertised promotional deals", us: true, them: false },
    { label: "Understands fine print and contract traps", us: true, them: false },
    { label: "Includes free consultation & expert advice", us: true, them: false },
    { label: "Access to hardware bonuses (e.g. Free Phones)", us: true, them: false },
    { label: "Saves hours of researching and calling providers", us: true, them: false },
  ];

  return (
    <section className="py-24 bg-[#0a0f1d] relative border-b border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-3">Why Work With Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">The Smart Way to Shop for Internet</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#020617] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="p-6 sm:p-8 bg-white/5 flex items-end">
              <h4 className="font-bold tracking-tight text-white text-lg">Features</h4>
            </div>
            <div className="p-6 sm:p-8 bg-blue-600 text-center text-white relative shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
              <h4 className="font-bold tracking-tight text-lg sm:text-lg mt-1">Next Level Services</h4>
              <p className="text-blue-200 text-[10px] tracking-widest uppercase font-bold mt-1">100% Free Service</p>
            </div>
            <div className="p-6 sm:p-8 text-center text-slate-400 bg-white/5">
              <h4 className="font-bold text-sm sm:text-lg">Doing it Yourself</h4>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {points.map((point, index) => (
              <div key={index} className="grid grid-cols-3 hover:bg-white/[0.02] transition-colors">
                <div className="p-4 sm:p-6 flex items-center text-sm font-medium text-slate-300">
                  {point.label}
                </div>
                <div className="p-4 sm:p-6 flex items-center justify-center bg-blue-900/10">
                  {point.us ? (
                    <Check className="w-6 h-6 text-emerald-400 stroke-[3]" />
                  ) : (
                    <X className="w-5 h-5 text-slate-600" />
                  )}
                </div>
                <div className="p-4 sm:p-6 flex items-center justify-center bg-white/[0.02]">
                  {point.them ? (
                    <Check className="w-5 h-5 text-slate-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500/50 stroke-[3]" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-white/5 text-center border-t border-white/10">
            <a href="#calculator" className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
              Get Started for Free
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
