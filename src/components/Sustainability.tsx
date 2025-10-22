import { Card } from '@/components/ui/card';
import { Leaf, TreeEvergreen, Recycle, SunHorizon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const commitments = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Partners',
    description: 'Collaborating with sustainable hotels and transport providers'
  },
  {
    icon: TreeEvergreen,
    title: 'Carbon Offset Programs',
    description: 'Supporting environmental initiatives with every booking'
  },
  {
    icon: Recycle,
    title: 'Sustainable Practices',
    description: 'Promoting responsible tourism and reducing waste'
  },
  {
    icon: SunHorizon,
    title: 'Green Future',
    description: 'Committed to a sustainable travel industry'
  }
];

export function Sustainability() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Leaf size={40} weight="duotone" className="text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Commitment to Sustainability
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in responsible travel that protects our planet for future generations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full bg-card border-green-200/50 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <commitment.icon size={32} weight="duotone" className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{commitment.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{commitment.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
