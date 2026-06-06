import { useState } from 'react';
import { Container } from './ui/Container';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How are you able to save me money?", a: "We monitor internet service pricing and hidden promotional offers nationwide. Providers often have unadvertised deals or retention offers that the general public doesn't know about. We match your location with these exclusive quotes." },
  { q: "Is this service really free?", a: "Yes! There is absolutely no charge to you. If we find you a better deal and you sign up through us, the internet provider pays us a commission. You get a lower bill, and we get paid by them." },
  { q: "Do I have to switch providers?", a: "Not necessarily. Often, we can help you get a better rate or more speed from your current provider by identifying new promotional codes or loyalty offers." },
  { q: "What is this 'free phone' promotion?", a: "In certain areas, internet providers bundle their service with cellular offers. Qualifying customers switching to a new home internet plan may receive a free smartphone as a sign-on bonus. Availability depends on your zip code." },
  { q: "Will I lose internet during the switch?", a: "Usually no. If you switch to a new provider, we recommend keeping your old service active until the new equipment is installed and working perfectly. It's a seamless transition." },
  { q: "Do I have to sign a long-term contract?", a: "Most of the top plans we find offer month-to-month pricing with no long-term contracts. If a plan requires a contract (which usually guarantees a lower locked-in rate), we will disclose that upfront." },
  { q: "How fast will my new internet be?", a: "This depends on your address, but our goal is to find you speeds that meet or exceed your current plan for less money. Many clients upgrade from standard cable to high-speed Fiber (1000+ Mbps)." },
  { q: "How long does a consultation take?", a: "A phone consultation typically takes less than 10 minutes. We simply check your address, review the best local offers, and present your options clearly and transparently." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#020617]">
      <Container className="max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-3">Common Questions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Everything You Need to Know</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index} 
              className={`border rounded-3xl overflow-hidden transition-colors ${openIndex === index ? 'border-blue-500/50 bg-blue-600/10' : 'border-white/10 hover:border-blue-500/30 hover:bg-white/5'}`}
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-white text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-blue-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
