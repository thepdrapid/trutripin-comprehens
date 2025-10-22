import { Card } from '@/components/ui/card';
import { Airplane, Buildings, CarProfile, IdentificationCard, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Airplane,
    title: 'Flight Booking',
    description: 'Access to global airlines with competitive pricing and real-time availability',
    color: 'text-blue-600'
  },
  {
    icon: Buildings,
    title: 'Hotel Reservations',
    description: 'Extensive network of hotels worldwide, from budget to luxury accommodations',
    color: 'text-purple-600'
  },
  {
    icon: CarProfile,
    title: 'Transport Solutions',
    description: 'Seamless ground transportation including car rentals and airport transfers',
    color: 'text-green-600'
  },
  {
    icon: IdentificationCard,
    title: 'Visa Assistance',
    description: 'Expert guidance and support for visa applications across multiple countries',
    color: 'text-orange-600'
  },
  {
    icon: ShieldCheck,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage to protect your journey and give you peace of mind',
    color: 'text-red-600'
  },
  {
    icon: Sparkle,
    title: 'Holiday Packages',
    description: 'Curated experiences for honeymoons, family trips, and adventure tours',
    color: 'text-pink-600'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Integrated Travel Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a perfect journey, all in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card h-full">
                <service.icon size={48} weight="duotone" className={`${service.color} mb-4`} />
                <h3 className="text-2xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
