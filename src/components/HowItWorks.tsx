import { Container } from './ui/Container';
import { motion } from 'motion/react';
import { MapPin, SlidersHorizontal, DollarSign } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-400" />,
      title: "Step 1: Check Availability",
      description: "Enter your zip code so we can analyze all the internet providers available in your specific area instantly."
    },
    {
      icon: <SlidersHorizontal className="w-8 h-8 text-blue-400" />,
      title: "Step 2: Compare Plans",
      description: "We compare speeds, pricing, and hidden promotional offers across providers to find you the best possible deal."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
      title: "Step 3: Start Saving",
      description: "Select your preferred plan. We handle the process or guide you on exactly what to say to lower your bill immediately."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#020617] border-b border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">How To Lower Your Internet Bill in 3 Simple Steps</h3>
          <p className="text-lg text-slate-400">We do the heavy lifting of researching, comparing, and finding promotional offers so you don't have to.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-emerald-500/20 z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              key={index} 
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-[#0a0f1d] shadow-[0_0_30px_rgba(37,99,235,0.15)] flex items-center justify-center border-4 border-[#020617] mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="bg-blue-500/10 border border-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-slate-400 leading-relaxed max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
