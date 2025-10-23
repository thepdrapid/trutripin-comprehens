import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import {
  Phone,
  Envelope,
  MapPin,
  Clock,
} from '@phosphor-icons/react';

const offices = [
  {
    name: 'India Headquarters',
    address: 'Mumbai, Maharashtra, India',
    phone: '+91 22 1234 5678',
    email: 'india@trutripin.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM IST',
  },
  {
    name: 'USA Branch (TruTrip LLC)',
    address: 'New York, NY, United States',
    phone: '+1 (555) 123-4567',
    email: 'usa@trutripin.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
  },
];

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully!', {
      description: 'Our team will get back to you within 24 hours.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      purpose: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-background/20 text-white hover:bg-background/30">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We're Here to Help You Travel Better
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Have questions about our services? Need assistance with your
              booking? Our team of travel experts is ready to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of Inquiry *</Label>
                  <Select
                    value={formData.purpose}
                    onValueChange={(value) =>
                      setFormData({ ...formData, purpose: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="booking">Travel Booking</SelectItem>
                      <SelectItem value="corporate">
                        Corporate Solutions
                      </SelectItem>
                      <SelectItem value="visa">Visa Assistance</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <Card key={office.name}>
                      <CardHeader>
                        <CardTitle className="text-xl mb-4">
                          {office.name}
                        </CardTitle>
                        <CardContent className="p-0 space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin
                              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                              weight="duotone"
                            />
                            <p className="text-sm text-muted-foreground">
                              {office.address}
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone
                              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                              weight="duotone"
                            />
                            <a
                              href={`tel:${office.phone}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-start gap-3">
                            <Envelope
                              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                              weight="duotone"
                            />
                            <a
                              href={`mailto:${office.email}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {office.email}
                            </a>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock
                              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                              weight="duotone"
                            />
                            <p className="text-sm text-muted-foreground">
                              {office.hours}
                            </p>
                          </div>
                        </CardContent>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">
                    24/7 Support Helpline
                  </CardTitle>
                  <CardDescription className="text-white/80 text-base mb-4">
                    For urgent travel assistance or emergencies
                  </CardDescription>
                  <div className="space-y-2">
                    <a
                      href="tel:+18001234567"
                      className="block text-2xl font-bold hover:text-white/80 transition-colors"
                    >
                      +1 (800) 123-4567
                    </a>
                    <p className="text-sm text-white/80">
                      Available 24 hours a day, 7 days a week
                    </p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to Talk to an Expert?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a call with one of our travel consultants to discuss your
            specific needs and get personalized recommendations.
          </p>
          <Button size="lg">Schedule a Consultation</Button>
        </div>
      </section>
    </div>
  );
}
