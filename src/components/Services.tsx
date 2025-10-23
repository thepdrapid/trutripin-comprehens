import { Card } from '@/components/ui/card';
import { Airplane, Buildings, CarProfile, IdentificationCard, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Airplane,
    title: 'Flight Booking',
    description: 'Access to global airlines with competitive pricing and real-time availability',
    gradient: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary',
    glowColor: 'shadow-primary/30'
  },
  {
    icon: Buildings,
    title: 'Hotel Reservations',
    description: 'Extensive network of hotels worldwide, from budget to luxury accommodations',
    gradient: 'from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
    glowColor: 'shadow-secondary/30'
  },
  {
    icon: CarProfile,
    title: 'Transport Solutions',
    description: 'Seamless ground transportation including car rentals and airport transfers',
    gradient: 'from-accent/20 to-accent/5',
    iconColor: 'text-accent',
    glowColor: 'shadow-accent/30'
  },
  {
    icon: IdentificationCard,
    title: 'Visa Assistance',
    description: 'Expert guidance and support for visa applications across multiple countries',
    gradient: 'from-primary/15 to-secondary/10',
    iconColor: 'text-primary',
    glowColor: 'shadow-primary/20'
  },
  {
    icon: ShieldCheck,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage to protect your journey and give you peace of mind',
    gradient: 'from-secondary/15 to-accent/10',
    iconColor: 'text-secondary',
    glowColor: 'shadow-secondary/20'
  },
  {
    icon: Sparkle,
    title: 'Holiday Packages',
    description: 'Curated experiences for honeymoons, family trips, and adventure tours',
    gradient: 'from-accent/15 to-primary/10',
    iconColor: 'text-accent',
    glowColor: 'shadow-accent/20'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-6 py-2 rounded-full glass-card">
              <span className="text-sm font-semibold gradient-text">
                COMPREHENSIVE SOLUTIONS
              </span>
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Integrated Travel <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Everything you need for a perfect journey, powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="card-elevated group p-8 h-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-6"
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} border border-border/30 group-hover:border-primary/50 transition-colors`}>
                      <service.icon size={40} weight="duotone" className={`${service.iconColor} group-hover:scale-110 transition-transform`} />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.div
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <span>→</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
