import { Button } from '@/components/ui/button';
import { EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your Travel Experience?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join thousands of satisfied travelers who trust TruTrip.in for their journey needs. 
            Let our experts help you plan your next adventure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              <EnvelopeSimple size={24} className="mr-2" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold text-lg px-8 py-6"
            >
              <Phone size={24} className="mr-2" />
              Request a Callback
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white/90">
            <div className="flex flex-col items-center gap-2">
              <EnvelopeSimple size={32} weight="duotone" />
              <div className="font-medium">Email Us</div>
              <div className="text-sm text-white/70">contact@trutrip.in</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone size={32} weight="duotone" />
              <div className="font-medium">Call Us</div>
              <div className="text-sm text-white/70">24/7 Support Available</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin size={32} weight="duotone" />
              <div className="font-medium">Visit Us</div>
              <div className="text-sm text-white/70">India & USA Offices</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
