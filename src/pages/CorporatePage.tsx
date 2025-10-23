import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChartLine,
  Code,
  Database,
  Sparkle,
  Lightning,
  MegaphoneSimple,
} from '@phosphor-icons/react';

const solutions = [
  {
    icon: ChartLine,
    title: 'Travel Management Platforms',
    description:
      'AI-powered corporate booking tools that streamline travel planning and expense management.',
    features: [
      'Automated policy enforcement',
      'Real-time approval workflows',
      'Expense integration (SAP, Oracle)',
      'Predictive analytics and reporting',
    ],
  },
  {
    icon: Code,
    title: 'API Integration Services',
    description:
      'Seamless connectivity with major GDS systems and travel suppliers for real-time inventory.',
    features: [
      'Amadeus, Sabre, Galileo integration',
      'Hotel and car rental APIs',
      'Custom supplier connections',
      'White-label booking engines',
    ],
  },
  {
    icon: Database,
    title: 'Custom CRM Solutions',
    description:
      'Tailored customer relationship management systems designed for travel agencies and operators.',
    features: [
      'Client profile management',
      'Booking history tracking',
      'Automated communication',
      'Sales pipeline management',
    ],
  },
  {
    icon: Lightning,
    title: 'Dynamic Pricing Tools',
    description:
      'Advanced algorithms for competitive pricing and revenue optimization.',
    features: [
      'Real-time inventory monitoring',
      'Market intelligence analytics',
      'Automated price adjustments',
      'Demand forecasting',
    ],
  },
  {
    icon: MegaphoneSimple,
    title: 'TBuzz Media Services',
    description:
      'Comprehensive digital marketing and content creation for travel businesses.',
    features: [
      'Social media campaigns',
      'Content strategy and creation',
      'Brand development',
      'Performance marketing',
    ],
  },
  {
    icon: Sparkle,
    title: 'AI-Driven Automation',
    description:
      'Intelligent automation tools to reduce manual work and improve efficiency.',
    features: [
      'Chatbot support integration',
      'Automated itinerary generation',
      'Smart recommendation engine',
      'Process optimization',
    ],
  },
];

const integrations = [
  'Amadeus GDS',
  'Sabre GDS',
  'Galileo GDS',
  'Travelport',
  'SAP Concur',
  'Oracle',
];

export function CorporatePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-background/20 text-white hover:bg-background/30">
              Corporate Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology That Powers Smarter Travel
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Leverage Travtek Travel Solutions and cutting-edge platforms to
              transform your corporate travel management and operational
              efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built by Travtek Travel Solutions, our technology stack delivers
              unmatched performance and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card key={solution.title} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" weight="duotone" />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with industry-leading platforms
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Travtek Travel Solutions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for Travel Professionals
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our sister company, Travtek Travel Solutions, specializes in
                developing robust technology platforms specifically designed for
                the travel industry.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From small agencies to large enterprises, our solutions scale
                with your business and adapt to your unique workflows.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">
                  Uptime Guarantee
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">
                  Agency Partners
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">&lt;200ms</div>
                <p className="text-sm text-muted-foreground">
                  API Response Time
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">ISO</div>
                <p className="text-sm text-muted-foreground">
                  Certified Secure
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Modernize Your Travel Operations?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can transform your
            business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Get a Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
