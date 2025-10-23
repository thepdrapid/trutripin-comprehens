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
  Sparkle,
} from '@phosphor-icons/react';

const services = [
  {
    icon: Buildings,
    title: 'Corporate Travel Management',
    description:
      'Automate policies, approvals, and expense integration for seamless business travel.',
    link: '/corporate',
    gradient: 'from-primary/20 to-secondary/20',
  },
  {
    icon: Airplane,
    title: 'Leisure & Group Travel',
    description:
      'Custom holiday packages with global options for unforgettable experiences.',
    link: '/services',
    gradient: 'from-secondary/20 to-accent/20',
  },
  {
    icon: FileText,
    title: 'Visa & Documentation',
    description:
      'Expert help for fast, compliant visa processing across 150+ destinations.',
    link: '/visa',
    gradient: 'from-accent/20 to-primary/20',
  },
  {
    icon: ChartLine,
    title: 'Technology Solutions',
    description:
      'Travel management software, API integration, and AI-driven tools.',
    link: '/corporate',
    gradient: 'from-primary/20 via-accent/20 to-secondary/20',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Risk Management',
    description: 'Real-time alerts and 24/7 support for traveler safety.',
    link: '/services',
    gradient: 'from-secondary/20 to-primary/20',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Worldwide presence with local expertise and support.',
    link: '/about',
    gradient: 'from-accent/20 via-primary/20 to-secondary/20',
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
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 liquid-glass border-primary/30 text-primary-foreground px-6 py-2 text-sm font-semibold backdrop-blur-xl shadow-lg shadow-primary/20">
              <Sparkle className="w-4 h-4 mr-2 inline" weight="fill" />
              All-in-One Holographic Travel Platform
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-holographic">Simplify Travel</span>
              <br />
              <span className="text-foreground/90">Beyond Reality</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of business and leisure travel with our liquid glass interface, 
              immersive booking, and holographic support systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/services">
                <Button
                  size="lg"
                  className="relative group overflow-hidden rounded-3xl px-10 py-7 text-lg font-semibold shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-500 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent shimmer-overlay" />
                  <span className="relative z-10 text-primary-foreground">Explore Services</span>
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative group overflow-hidden liquid-glass rounded-3xl px-10 py-7 text-lg font-semibold border-primary/30 hover:border-primary/60 text-foreground shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 glass-reflection">Book Now</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-holographic">End-to-End</span>
              <span className="text-foreground"> Travel Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From corporate travel management to leisure packages, we handle
              every aspect of your journey with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} to={service.link}>
                  <div className="perspective-card h-full group">
                    <Card className="h-full holographic-border liquid-glass hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
                      <CardHeader className="p-8">
                        <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          <Icon className="w-8 h-8 text-primary relative z-10" weight="duotone" />
                        </div>
                        <CardTitle className="text-2xl mb-4 text-foreground group-hover:text-holographic transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    </Card>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 liquid-glass border-secondary/30 text-secondary-foreground px-4 py-2">
                24/7 Holographic Support
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-holographic">Global Network,</span>
                <br />
                <span className="text-foreground">Local Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                With offices in India and the USA, plus partnerships worldwide,
                we deliver local insights backed by global infrastructure and liquid technology.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl holographic-border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-primary" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Round-the-Clock Support</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our team is always available to assist you wherever you are, with immersive holographic guidance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl holographic-border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-secondary" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Travel Advisors</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Seasoned professionals who understand your travel needs and leverage AI-driven insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 text-center holographic-border liquid-glass perspective-card hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl font-bold text-holographic mb-3">150+</div>
                <p className="text-sm text-muted-foreground">
                  Countries Supported
                </p>
              </Card>
              <Card className="p-8 text-center holographic-border liquid-glass perspective-card hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: '50ms' }}>
                <div className="text-5xl font-bold text-holographic mb-3">24/7</div>
                <p className="text-sm text-muted-foreground">
                  Customer Support
                </p>
              </Card>
              <Card className="p-8 text-center holographic-border liquid-glass perspective-card hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
                <div className="text-5xl font-bold text-holographic mb-3">50K+</div>
                <p className="text-sm text-muted-foreground">
                  Travelers Served
                </p>
              </Card>
              <Card className="p-8 text-center holographic-border liquid-glass perspective-card hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: '150ms' }}>
                <div className="text-5xl font-bold text-holographic mb-3">98%</div>
                <p className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-holographic">Trusted</span>
              <span className="text-foreground"> Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We work with industry leaders to bring you the best service
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="text-2xl font-semibold text-muted-foreground/60 hover:text-holographic transition-all duration-500 cursor-pointer hover:scale-110"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 holographic-border opacity-20" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-holographic">Ready to Transform</span>
            <br />
            <span className="text-foreground">Your Travel Experience?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied travelers who trust TruTrip.in for their
            business and leisure journeys in our liquid holographic ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="relative group overflow-hidden rounded-3xl px-12 py-7 text-lg font-semibold shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-500 hover:scale-110"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent shimmer-overlay" />
                <span className="relative z-10 text-primary-foreground">Get Started</span>
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="relative group overflow-hidden liquid-glass rounded-3xl px-12 py-7 text-lg font-semibold border-primary/30 hover:border-primary/60 text-foreground shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-110"
              >
                <span className="relative z-10 glass-reflection">View All Services</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
