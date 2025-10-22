import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Briefcase, Users, CheckCircle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const corporateFeatures = [
  'Automated policy compliance and approval workflows',
  'Real-time expense tracking and reporting',
  'Dedicated account management',
  'Integration with major GDS systems',
  'Custom travel policies and budgets',
  'Advanced analytics and insights'
];

const leisureFeatures = [
  'Romantic honeymoon packages',
  'Family-friendly vacation planning',
  'Adventure and eco-tourism experiences',
  'Customizable itineraries',
  'Local expertise and recommendations',
  'Flexible booking and payment options'
];

export function Solutions() {
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
            Tailored Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're traveling for business or pleasure, we have you covered
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="corporate" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="corporate" className="text-lg py-3">
                <Briefcase size={20} className="mr-2" />
                Corporate Travel
              </TabsTrigger>
              <TabsTrigger value="leisure" className="text-lg py-3">
                <Users size={20} className="mr-2" />
                Leisure Travel
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="corporate">
              <Card className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Briefcase size={40} weight="duotone" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-card-foreground">
                      Enterprise Travel Management
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Streamline your corporate travel with our comprehensive management platform
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {corporateFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="leisure">
              <Card className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Users size={40} weight="duotone" className="text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-card-foreground">
                      Unforgettable Experiences
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Create lasting memories with our curated leisure travel packages
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {leisureFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle size={24} weight="fill" className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
