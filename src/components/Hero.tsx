import { Button } from '@/components/ui/button';
import { ArrowDown } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import logo from '@/assets/images/1080x1080-PNG.png';

export function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')] bg-cover bg-center opacity-20" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={logo} alt="TruTrip.in Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
              TruTrip.in
            </h1>
          </div>
          
          <p className="text-3xl md:text-4xl font-semibold text-white/95 mb-4 tracking-tight">
            Travel in Style
          </p>
          
          <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-3xl mx-auto font-light">
            Your one-stop, cost-efficient, and reliable global travel platform combining technology, compliance, and personalized experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold text-lg px-8 py-6">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={32} weight="bold" />
      </motion.button>
    </section>
  );
}
