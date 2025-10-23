import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Target,
  Lightbulb,
  Handshake,
  Leaf,
  GlobeHemisphereWest,
  Sparkle,
} from '@phosphor-icons/react';

const values = [
  {
    icon: Sparkle,
    title: 'Innovation',
    description:
      'We leverage cutting-edge technology to revolutionize travel experiences.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Committed to eco-friendly practices and responsible travel solutions.',
  },
  {
    icon: Handshake,
    title: 'Customer-First',
    description:
      'Your satisfaction is our priority. We go above and beyond for every client.',
  },
  {
    icon: Target,
    title: 'Compliance',
    description:
      'Adhering to the highest standards of data protection and security.',
  },
];

const companies = [
  {
    name: 'TruTrip LLC (USA)',
    description: 'Our mother company headquartered in the United States, driving global operations.',
  },
  {
    name: 'Trustayz',
    description: 'Sister company specializing in accommodation and hospitality solutions.',
  },
  {
    name: 'TBuzz Media',
    description: 'Digital marketing and content creation for travel industry.',
  },
  {
    name: 'Travtek Travel Solutions',
    description: 'Technology platform provider for travel agencies and operators.',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-background/20 text-white hover:bg-background/30">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionizing Global Travel
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              TruTrip.in is transforming how businesses and individuals
              experience travel through technology, expertise, and a commitment
              to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" weight="duotone" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To simplify travel for businesses and individuals worldwide by
                providing comprehensive, technology-driven solutions that ensure
                seamless journeys from planning to return.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe travel should be accessible, efficient, and
                worry-free. Through innovative platforms and dedicated support,
                we're making that vision a reality.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-accent" weight="duotone" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To become the world's most trusted and innovative travel
                platform, connecting people and places through intelligent
                technology and exceptional service.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision a future where travel planning is effortless, where
                every journey is optimized, and where travelers feel supported
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" weight="duotone" />
                    </div>
                    <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GlobeHemisphereWest
                className="w-10 h-10 text-primary"
                weight="duotone"
              />
              <h2 className="text-3xl md:text-4xl font-bold">
                Global Presence
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Part of a worldwide network of travel innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {companies.map((company) => (
              <Card key={company.name}>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">
                    {company.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {company.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  India Headquarters
                </h3>
                <p className="text-muted-foreground">
                  Our main operations center serving the Asia-Pacific region
                  with comprehensive travel solutions and 24/7 support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">USA Branch</h3>
                <p className="text-muted-foreground">
                  TruTrip LLC brings our services to North America, providing
                  local expertise with global capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We're building the future of travel, and we'd love to have you with
            us. Whether you're a traveler or a partner, let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
