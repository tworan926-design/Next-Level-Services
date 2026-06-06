import { Container } from './ui/Container';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { ArrowRight, Calculator, Loader2 } from 'lucide-react';

export function SavingsCalculator() {
  const [step, setStep] = useState(1);
  const [bill, setBill] = useState('100');
  const [isCalculating, setIsCalculating] = useState(false);

  const estimatedSavings = Math.round(parseInt(bill) * 0.35 * 12); // Assuming ~35% savings per year

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setStep(2);
    }, 1500);
  };

  return (
    <section id="calculator" className="py-24 bg-[#0a0f1d] relative overflow-hidden border-b border-white/5">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
      </div>

      <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-3">Interactive Calculator</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">See How Much You Could Be Saving</h3>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Most Americans overpay for their internet. Use our interactive calculator to see your estimated potential savings by switching to a better plan or provider.
          </p>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Instant estimation
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Based on real local plans
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              100% free and no obligation
            </li>
          </ul>
        </div>

        <div className="bg-[#020617] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(37,99,235,0.1)] relative">
          <div className="absolute -top-6 -right-6 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <Calculator className="w-7 h-7" />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
                onSubmit={handleCalculate}
              >
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Current Internet Provider</label>
                  <select required className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer font-medium text-slate-300 text-base appearance-none">
                    <option value="">Select your provider</option>
                    <option value="spectrum">Spectrum</option>
                    <option value="xfinity">Xfinity / Comcast</option>
                    <option value="att">AT&T</option>
                    <option value="verizon">Verizon</option>
                    <option value="cox">Cox</option>
                    <option value="optimum">Optimum</option>
                    <option value="centurylink">CenturyLink</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current Monthly Bill</label>
                    <span className="font-bold text-emerald-400 text-lg">${bill}</span>
                  </div>
                  <input 
                    type="range" 
                    min="40" 
                    max="200" 
                    step="5"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                    <span>$40</span>
                    <span>$200+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Zip Code</label>
                  <input required type="text" pattern="[0-9]{5}" title="Five digit zip code" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-white text-base" placeholder="Enter 5-digit zip code" />
                </div>

                <button 
                  type="submit" 
                  disabled={isCalculating}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 group disabled:opacity-80"
                >
                  {isCalculating ? (
                    <>Searching Local Deals... <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Calculate Savings <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center py-6"
              >
                <h4 className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Estimated Potential Savings</h4>
                <div className="text-6xl font-extrabold text-white mb-2 tracking-tighter">
                   <span className="text-emerald-400">$</span>{estimatedSavings}
                </div>
                <p className="text-slate-400 mb-8 font-medium">Per year on average based on your inputs.</p>
                
                <div className="bg-white/5 rounded-2xl p-6 mb-6 text-left border border-white/10">
                  <h5 className="font-bold text-white mb-4">Complete your free review:</h5>
                  <form className="space-y-4">
                    <input required type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none text-white" placeholder="First & Last Name" />
                    <input required type="tel" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none text-white" placeholder="Phone Number" />
                    <label className="flex items-start gap-2 text-[10px] text-slate-500 mt-2">
                      <input type="checkbox" required className="mt-0.5 rounded bg-slate-800 border-white/10 text-blue-600 focus:ring-0" />
                      <span>By clicking, you agree to receive SMS communications. Message & data rates may apply.</span>
                    </label>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl uppercase tracking-widest text-xs transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2">
                      Claim Your Savings <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
                <button onClick={() => setStep(1)} className="text-blue-400 text-sm font-semibold hover:underline">
                  Recalculate
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
