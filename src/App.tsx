import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { SavingsCalculator } from './components/SavingsCalculator';
import { Testimonials } from './components/Testimonials';
import { Comparison } from './components/Comparison';
import { Providers } from './components/Providers';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] font-sans text-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden overflow-y-auto">
      <TopBar />
      <Navbar />
      
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Benefits />
        <SavingsCalculator />
        <Testimonials />
        <Comparison />
        <Providers />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#020617]/90 backdrop-blur-md border-t border-white/5 z-50 transform transition-transform shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.5)]">
        <a href="#calculator" className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
          Check My Savings Now
        </a>
      </div>
    </div>
  );
}
