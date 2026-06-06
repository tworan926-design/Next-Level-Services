import { motion } from 'motion/react';
import { Shield, Phone, Clock, ThumbsUp } from 'lucide-react';
import { Container } from './ui/Container';

export function TopBar() {
  return (
    <div className="bg-[#020617] text-slate-400 py-2 border-b border-white/5 hidden sm:block tracking-widest uppercase">
      <Container className="flex justify-between items-center text-[10px] font-bold">
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-slate-300">
            <Shield className="w-3.5 h-3.5 text-blue-500" /> Authorized Retailer
          </span>
          <span className="flex items-center gap-1.5 text-yellow-400">
            <ThumbsUp className="w-3.5 h-3.5 fill-current" /> 5.0 Star Google Rating
          </span>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-500" /> Mon-Sat: 10AM - 4PM
          </span>
          <a href="#contact" className="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-blue-500" /> Call for Free Consultation
          </a>
        </div>
      </Container>
    </div>
  );
}
