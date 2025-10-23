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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')] bg-cover bg-center opacity-10" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <img src={logo} alt="TruTrip.in Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain relative z-10" />
            </motion.div>
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
              TruTrip.in
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 backdrop-blur-sm mb-6"
          >
            <Sparkle size={20} weight="fill" className="text-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">Next-Generation Travel Platform</span>
          </motion.div>
          
          <p className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Travel Beyond <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Imagination</span>
          </p>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the fusion of cutting-edge technology and personalized service on your journey across the globe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="relative group overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold text-lg px-10 py-7 shadow-2xl shadow-primary/40 hover:shadow-3xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105 border-0"
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
              <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-card/60 hover:bg-card/80 text-foreground border-border/50 backdrop-blur-xl font-semibold text-lg px-10 py-7 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors p-4 rounded-full bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 hover:bg-card/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={24} weight="bold" />
      </motion.button>
    </section>
  );
}
