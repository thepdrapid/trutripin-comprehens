import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import logo from '@/assets/images/1080x1080-PNG.png';

export function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')] bg-cover bg-center opacity-5" />
      
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-6 mb-8 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
              <img src={logo} alt="TruTrip.in Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain relative z-10" />
            </motion.div>
            <h1 className="text-7xl md:text-8xl font-bold gradient-text tracking-tight">
              TruTrip.in
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-6"
          >
            <Sparkle size={20} weight="fill" className="text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Next-Generation Travel Platform</span>
          </motion.div>
          
          <p className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Travel Beyond <span className="gradient-text">Imagination</span>
          </p>
          
          <p className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the fusion of cutting-edge technology and personalized service on your journey across the globe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="relative group overflow-hidden gradient-bg shimmer-effect text-white font-semibold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card text-foreground border-border/50 font-semibold text-lg px-10 py-7 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors p-4 rounded-full glass-card hover:border-primary/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={24} weight="bold" />
      </motion.button>
    </section>
  );
}
