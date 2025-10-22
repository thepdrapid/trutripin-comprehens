import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartLine, Lightning, Database, ShieldCheck } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const technologies = [
  {
    icon: Database,
    title: 'GDS Integration',
    systems: ['Amadeus', 'Sabre', 'Galileo'],
    description: 'Connected to major Global Distribution Systems for real-time inventory'
  },
  {
    icon: Lightning,
    title: 'AI-Powered',
    systems: ['Smart Pricing', 'Recommendations', 'Automation'],
    description: 'Intelligent algorithms optimize pricing and personalize experiences'
  },
  {
    icon: ChartLine,
    title: 'Real-Time Analytics',
    systems: ['Dashboards', 'Reports', 'Insights'],
    description: 'Comprehensive data visualization and business intelligence'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant',
    systems: ['PCI DSS', 'GDPR', 'ISO 27001'],
    description: 'Enterprise-grade security and regulatory compliance'
  }
];

export function Technology() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Technology & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by cutting-edge technology and industry-leading integrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-border bg-card">
                <tech.icon size={48} weight="duotone" className="text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-card-foreground">{tech.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.systems.map((system) => (
                    <Badge key={system} variant="secondary" className="text-sm">
                      {system}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
