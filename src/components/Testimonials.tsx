import { Container } from './ui/Container';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      location: "Austin, TX",
      quote: "Definitely recommend this company for anybody looking to save money on their internet. I saved on my internet and got a free phone."
    },
    {
      name: "Michael R.",
      location: "Denver, CO",
      quote: "I thought I was getting a good deal until I spoke with Next Level Services. They found me a fiber plan that is 3x faster and $40 cheaper per month."
    },
    {
      name: "The Martinez Family",
      location: "Charlotte, NC",
      quote: "Extremely professional and truly free. They handled the comparison, explained the fine print, and made switching providers entirely painless."
    }
  ];

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-3">Real Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Trusted by Families Nationwide</h3>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-slate-400 font-medium">5.0 Star Google Rating Based on Real Client Experiences</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              key={index} 
              className="bg-[#0a0f1d] p-8 rounded-3xl border border-white/5 shadow-2xl relative pt-12"
            >
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-serif text-4xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                "
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed font-medium">
                "{test.quote}"
              </p>
              <div>
                <h5 className="font-bold text-white">{test.name}</h5>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">{test.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
