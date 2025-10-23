import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  MagnifyingGlass,
  CheckCircle,
  ShieldCheck,
  Clock,
  Globe,
} from '@phosphor-icons/react';

const services = [
  {
    icon: FileText,
    title: 'Documentation Support',
    description:
      'Expert guidance on required documents for visa applications across all countries.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Country-Specific Guidance',
    description:
      'Detailed visa requirements and processes for over 150 destinations worldwide.',
  },
  {
    icon: CheckCircle,
    title: 'Application Review',
    description:
      'Thorough checking of your visa application before submission to minimize rejections.',
  },
  {
    icon: Clock,
    title: 'Real-Time Tracking',
    description:
      'Stay updated on your visa application status with our tracking system.',
  },
  {
    icon: ShieldCheck,
    title: 'Travel Insurance',
    description:
      'Comprehensive coverage options for medical, trip cancellation, and emergencies.',
  },
  {
    icon: Globe,
    title: 'Pre-Departure Advice',
    description:
      'Essential travel tips, health requirements, and customs information.',
  },
];

const popularDestinations = [
  { name: 'United States', type: 'B1/B2 Tourist Visa' },
  { name: 'United Kingdom', type: 'Standard Visitor Visa' },
  { name: 'Canada', type: 'Visitor Visa / eTA' },
  { name: 'Schengen Area', type: 'Schengen Visa' },
  { name: 'Australia', type: 'Visitor Visa (subclass 600)' },
  { name: 'Singapore', type: 'Tourist Visa / e-Visa' },
  { name: 'Dubai (UAE)', type: 'Tourist Visa' },
  { name: 'Thailand', type: 'Tourist Visa / Visa on Arrival' },
];

const processSteps = [
  {
    step: 1,
    title: 'Consultation',
    description: 'We assess your travel plans and visa requirements.',
  },
  {
    step: 2,
    title: 'Documentation',
    description: 'We guide you through collecting necessary documents.',
  },
  {
    step: 3,
    title: 'Application',
    description: 'We help prepare and review your visa application.',
  },
  {
    step: 4,
    title: 'Submission',
    description: 'We submit your application and track its progress.',
  },
  {
    step: 5,
    title: 'Approval',
    description: 'Receive your visa and final travel preparation advice.',
  },
];

export function VisaPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-background/20 text-white hover:bg-background/30">
              Visa & Travel Support
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simplify Every Visa Application
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Navigate complex visa requirements with confidence. Our experts
              guide you through every step of the application process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Visa Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporting travelers with 150+ destination visa requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" weight="duotone" />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Five simple steps from consultation to approval
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="h-8 w-0.5 bg-border ml-6 mt-4" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in visas for these high-demand countries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularDestinations.map((destination) => (
              <Card key={destination.name} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{destination.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {destination.type}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Don't see your destination? We support 150+ countries worldwide.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us for Other Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Important Visa Disclaimer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Visa requirements and regulations may change without
                  notice.</strong> While we strive to provide accurate and
                  up-to-date information, we strongly recommend verifying current
                  requirements with official government sources before travel.
                </p>
                <p>
                  TruTrip.in provides visa assistance and documentation support
                  but does not guarantee visa approval. Approval decisions are
                  made solely by consular authorities of destination countries.
                </p>
                <p>
                  Processing times may vary based on nationality, destination,
                  and current embassy workload. Always apply well in advance of
                  your intended travel date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Visa Application?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our visa experts handle the complexities while you focus on
            planning your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Apply for Visa Assistance</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
