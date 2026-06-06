import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { Container } from './ui/Container';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-[#020617] py-5 border-b border-transparent'}`}>
      <Container className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
            <Zap className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">NEXT LEVEL <span className="text-blue-500">SERVICES</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-slate-400">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <a href="#calculator" className="hover:text-white transition-colors">Savings Calculator</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center">
          <a href="#calculator" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
            Check My Savings
          </a>
        </div>

        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#0a0f1d] border-t border-white/5 shadow-2xl py-4 flex flex-col md:hidden text-white"
        >
          <a href="#how-it-works" className="px-6 py-3 text-slate-300 font-bold uppercase tracking-widest text-xs hover:bg-white/5 hover:text-blue-400 text-center" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#benefits" className="px-6 py-3 text-slate-300 font-bold uppercase tracking-widest text-xs hover:bg-white/5 hover:text-blue-400 text-center" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
          <a href="#calculator" className="px-6 py-3 text-slate-300 font-bold uppercase tracking-widest text-xs hover:bg-white/5 hover:text-blue-400 text-center" onClick={() => setMobileMenuOpen(false)}>Savings Calculator</a>
          <a href="#faq" className="px-6 py-3 text-slate-300 font-bold uppercase tracking-widest text-xs hover:bg-white/5 hover:text-blue-400 text-center" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <div className="px-6 pt-4 pb-2">
            <a href="#calculator" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs" onClick={() => setMobileMenuOpen(false)}>
              Check My Savings
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
