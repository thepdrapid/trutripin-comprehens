import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Airplane,
  Buildings,
  UsersThree,
  ShieldCheck,
  Car,
  MapTrifold,
  Ticket,
  Bed,
} from '@phosphor-icons/react';

const services = [
  {
    icon: Buildings,
    title: 'Corporate & Leisure Travel',
    description:
      'Custom travel packages tailored for both business executives and leisure travelers.',
    features: [
      'Personalized itinerary planning',
      'Group booking management',
      'VIP and premium services',
      'Flexible booking options',
    ],
  },
  {
    icon: Ticket,
    title: 'Ticketing & Reservations',
    description:
      'Comprehensive booking services for all your travel needs across multiple platforms.',
    features: [
      'Flight bookings (domestic & international)',
      'Hotel and accommodation reservations',
      'Rail and bus ticket bookings',
      'Multi-city and complex itineraries',
    ],
  },
  {
    icon: UsersThree,
    title: 'MICE Services',
    description:
      'Complete event management for Meetings, Incentives, Conferences, and Exhibitions.',
    features: [
      'Venue selection and booking',
      'Delegate travel coordination',
      'Event logistics planning',
      'On-site support and management',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Visa & Travel Insurance',
    description:
      'Expert guidance and comprehensive protection for stress-free international travel.',
    features: [
      'Visa application assistance',
      'Documentation support',
      'Travel insurance plans',
      'Emergency assistance coverage',
    ],
  },
  {
    icon: Car,
    title: 'Ground Transportation',
    description:
      'Reliable transportation solutions for seamless local and long-distance travel.',
    features: [
      'Airport transfers',
      'Car rentals (economy to luxury)',
      'Chauffeur services',
      'Local tour transportation',
    ],
  },
  {
    icon: MapTrifold,
    title: 'Destination Management',
    description:
      'Curated experiences and expert local knowledge for unforgettable journeys.',
    features: [
      'FIT (Free Independent Traveler) packages',
      'Group tour coordination',
      'Cultural experience curation',
      'Local guide services',
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-background/20 text-white hover:bg-background/30">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              End-to-End Travel Solutions for Every Need
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              From flights and hotels to complex corporate travel programs, we
              handle every detail so you can focus on your journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" weight="duotone" />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
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
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Airplane className="w-7 h-7 text-primary" weight="duotone" />
                </div>
                <CardTitle className="text-xl mb-2">150+</CardTitle>
                <CardDescription>Destinations Worldwide</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bed className="w-7 h-7 text-primary" weight="duotone" />
                </div>
                <CardTitle className="text-xl mb-2">10,000+</CardTitle>
                <CardDescription>Hotel Partners</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-primary" weight="duotone" />
                </div>
                <CardTitle className="text-xl mb-2">24/7</CardTitle>
                <CardDescription>Customer Support</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Every traveler and organization is unique. Let us create a
                tailored travel solution that fits your specific needs and
                budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link to="/contact">Request a Custom Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/corporate">Explore Corporate Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
