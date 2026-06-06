import { Container } from './ui/Container';
import { Star, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustBar() {
  const items = [
    { icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />, text: "5.0 Stars on Google" },
    { icon: <ShieldCheck className="w-6 h-6 text-primary-500" />, text: "Free No-Obligation Consultation" },
    { icon: <CheckCircle2 className="w-6 h-6 text-primary-500" />, text: "Compare Top Providers" },
    { icon: <Clock className="w-6 h-6 text-primary-500" />, text: "Fast Response Times" }
  ];

  return (
    <div className="bg-white/[0.02] border-y border-white/5 py-6 sm:py-8 shadow-sm">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          {items.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 justify-center group"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:bg-blue-500/10 transition-colors">
                <div className="w-5 h-5 flex items-center justify-center">
                   {item.icon}
                </div>
              </div>
              <div>
                 <span className="block text-[11px] font-bold tracking-widest uppercase text-white leading-tight mb-0.5">{item.text}</span>
                 <span className="block text-[10px] text-slate-500 tracking-wide">Next Level Services</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
