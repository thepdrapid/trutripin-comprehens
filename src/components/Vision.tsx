import { motion } from 'framer-motion';
import { Target, Lightbulb } from '@phosphor-icons/react';

export function Vision() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <Lightbulb size={40} weight="duotone" className="text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Our Vision
              </h2>
            </div>
            <p className="text-2xl md:text-3xl text-foreground/90 font-medium leading-relaxed">
              To be a one-stop, cost-efficient, and reliable global travel platform that combines{' '}
              <span className="text-primary font-semibold">technology</span>,{' '}
              <span className="text-primary font-semibold">compliance</span>, and{' '}
              <span className="text-primary font-semibold">personalized experiences</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-lg text-muted-foreground">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">Global</div>
              <div className="text-lg text-muted-foreground">Network Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg text-muted-foreground">Customer Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
