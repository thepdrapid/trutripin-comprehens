import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Airplane,
  Buildings,
  FileText,
  ShieldCheck,
  Globe,
  ChartLine,
  Clock,
  Users,
} from '@phosphor-icons/react';

const services = [
  {
    icon: Buildings,
    title: 'Corporate Travel Management',
    description:
      'Automate policies, approvals, and expense integration for seamless business travel.',
    link: '/corporate',
  },
  {
    icon: Airplane,
    title: 'Leisure & Group Travel',
    description:
      'Custom holiday packages with global options for unforgettable experiences.',
    link: '/services',
  },
  {
    icon: FileText,
    title: 'Visa & Documentation',
    description:
      'Expert help for fast, compliant visa processing across 150+ destinations.',
    link: '/visa',
  },
  {
    icon: ChartLine,
    title: 'Technology Solutions',
    description:
      'Travel management software, API integration, and AI-driven tools.',
    link: '/corporate',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Risk Management',
    description: 'Real-time alerts and 24/7 support for traveler safety.',
    link: '/services',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Worldwide presence with local expertise and support.',
    link: '/about',
  },
];

const partners = [
  'AirAsia',
  'Singapore Airlines',
  'GMR Group',
  'Amadeus',
  'Sabre',
  'Galileo',
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-background/20 text-white hover:bg-background/30">
              All-in-One Travel Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simplify Business and Leisure Travel with TruTrip.in
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Your complete travel solution for bookings, corporate automation,
              visa support, and risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              End-to-End Travel Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From corporate travel management to leisure packages, we handle
              every aspect of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} to={service.link}>
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">24/7 Support</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global Network, Local Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With offices in India and the USA, plus partnerships worldwide,
                we deliver local insights backed by global infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Round-the-Clock Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team is always available to assist you wherever you are.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Travel Advisors</h3>
                    <p className="text-sm text-muted-foreground">
                      Seasoned professionals who understand your travel needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-sm text-muted-foreground">
                  Countries Supported
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">
                  Customer Support
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <p className="text-sm text-muted-foreground">
                  Travelers Served
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We work with industry leaders to bring you the best service
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-xl font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Travel Experience?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who trust TruTrip.in for their
            business and leisure journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Get Started</Link>
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
