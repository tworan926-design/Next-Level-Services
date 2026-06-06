import { Container } from './ui/Container';
import { motion } from 'motion/react';
import { TrendingDown, Zap, Search, Users, Gift, BadgeCheck } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <TrendingDown className="w-7 h-7 text-white" />,
      title: "Lower Monthly Bills",
      description: "Stop paying the 'loyalty tax'. We consistently find plans that save our typical customers hundreds of dollars a year."
    },
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: "Faster Internet Options",
      description: "Get more speed for less money. We'll identify fiber or high-speed cable options you might not know exist at your address."
    },
    {
      icon: <Search className="w-7 h-7 text-white" />,
      title: "Easy Provider Comparison",
      description: "No more juggling dozen browser tabs. We present a clear, side-by-side comparison of local providers."
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: "Expert Guidance",
      description: "Speak with a real internet savings expert who understands the industry pricing games and how to beat them."
    },
    {
      icon: <Gift className="w-7 h-7 text-white" />,
      title: "Potential Promotional Offers",
      description: "Many customers qualify for massive sign-up bonuses, including prepaid visa cards and even free smartphones."
    },
    {
      icon: <BadgeCheck className="w-7 h-7 text-white" />,
      title: "100% Free Consultation",
      description: "Our service costs you absolutely nothing. We get paid by providers for bringing them new business, not by you."
    }
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-[#020617]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Unlock the Best Value for Your Home</h3>
          <p className="text-lg text-slate-400">The internet service industry relies on customers setting and forgetting their bills. We're here to change that.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="bg-[#0a0f1d] rounded-3xl p-8 hover:bg-slate-900/80 hover:shadow-2xl transition-all border border-white/5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
