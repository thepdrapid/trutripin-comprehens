import { Card } from '@/components/ui/card';
import { Globe, Clock, Phone, MapPin } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const networkFeatures = [
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Operations in India with USA branch (TRUTRIP LLC)'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs'
  },
  {
    icon: Phone,
    title: 'Emergency Response',
    description: 'Dedicated emergency support for peace of mind'
  },
  {
    icon: MapPin,
    title: 'Risk Assessment',
    description: 'Real-time alerts and comprehensive travel safety tools'
  }
];

const sisterCompanies = [
  { name: 'Trustayz', focus: 'Hospitality Solutions' },
  { name: 'TBuzz Media', focus: 'Marketing Excellence' },
  { name: 'Travtek Travel Solutions', focus: 'Travel Technology' }
];

export function GlobalNetwork() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Global Network & Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Worldwide coverage backed by our sister companies and expert partners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 border-border bg-card">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon size={32} weight="duotone" className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-card-foreground">
              Our Sister Companies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {sisterCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-semibold text-lg text-primary mb-1">{company.name}</div>
                  <div className="text-sm text-muted-foreground">{company.focus}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
