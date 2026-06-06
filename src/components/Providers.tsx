import { Container } from './ui/Container';
import { motion } from 'motion/react';
import { Wifi, Plus } from 'lucide-react';

export function Providers() {
  const providers = [
    { name: "AT&T", type: "Fiber & DSL", speed: "Up to 5 Gbps", color: "bg-blue-600" },
    { name: "XFINITY", type: "Cable & Fiber", speed: "Up to 2 Gbps", color: "bg-red-600" },
    { name: "SPECTRUM", type: "Cable", speed: "Up to 1 Gbps", color: "bg-slate-800" },
    { name: "VERIZON", type: "Fiber", speed: "Up to 2 Gbps", color: "bg-black" },
  ];

  return (
    <section className="py-24 bg-[#020617] border-b border-white/5">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-3">Top Providers</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Compare Deals from the Nation's Best</h3>
          <p className="text-slate-400 text-lg">We check systems across all major ISPs simultaneously to quickly find you unadvertised rates and optimal speeds.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
          {providers.map((p, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-6 text-center hover:shadow-2xl hover:border-blue-500/30 hover:bg-white/[0.02] transition-all group cursor-pointer"
            >
              <div className={`w-12 h-12 mx-auto ${p.color} rounded-2xl mb-4 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <Wifi className="w-6 h-6" />
              </div>
              <h4 className="font-bold tracking-tight text-white mb-1">{p.name}</h4>
              <p className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-widest">{p.type}</p>
              <p className="text-xs text-blue-400 font-bold">{p.speed}</p>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex bg-transparent border border-white/10 border-dashed rounded-3xl p-6 flex-col items-center justify-center text-center hover:border-blue-500/30 hover:bg-white/[0.02] transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 shadow-sm mb-3 group-hover:scale-110 transition-transform bg-[#0a0f1d]">
              <Plus className="w-5 h-5 text-slate-500" />
            </div>
            <h4 className="font-bold text-slate-500 text-xs tracking-wide">And many local providers</h4>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
