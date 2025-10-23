import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="relative liquid-glass border-t border-border/30 mt-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div className="col-span-2 md:col-span-1">
              <div className="font-serif text-2xl font-bold text-holographic mb-4">
                TruTrip.in
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Simplifying business and leisure travel worldwide with liquid glass technology.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/corporate"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    Corporate Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 text-foreground">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/visa"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    Visa Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    Travel Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    MICE Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 text-foreground">Partners</h3>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground">Trustayz</li>
                <li className="text-sm text-muted-foreground">TBuzz Media</li>
                <li className="text-sm text-muted-foreground">
                  Travtek Travel Solutions
                </li>
                <li className="text-sm text-muted-foreground">
                  TruTrip LLC (USA)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 text-foreground">Airline Partners</h3>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground">AirAsia</li>
                <li className="text-sm text-muted-foreground">
                  Singapore Airlines
                </li>
                <li className="text-sm text-muted-foreground">GMR Group</li>
                <li className="text-sm text-muted-foreground">
                  Global Partners
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/30" />

        <div className="py-8 space-y-4">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-border">•</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
            <span className="text-border">•</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-border">•</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Refund & Cancellation
            </a>
            <span className="text-border">•</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Accessibility Statement
            </a>
          </div>
        </div>

        <Separator className="bg-border/30" />

        <div className="py-8 space-y-6 text-xs text-muted-foreground">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-medium">© {currentYear} TruTrip.in. All rights reserved.</p>
            <p className="text-muted-foreground/70">Last updated {currentDate}</p>
          </div>

          <div className="space-y-3 leading-relaxed">
            <p>
              <strong className="text-foreground/70">Payment Compliance:</strong> PCI DSS SAQ-A compliant with
              hosted payment processing.
            </p>
            <p>
              <strong className="text-foreground/70">Data Protection:</strong> Compliant with GDPR (EU), CPRA
              (California), DPDP (India), and PDPA (Singapore).
            </p>
            <p>
              <strong className="text-foreground/70">Accessibility:</strong> WCAG 2.2 Level AA target
              compliance for inclusive access.
            </p>
            <p>
              <strong className="text-foreground/70">Visa Disclaimer:</strong> Visa requirements and
              regulations may change. Always verify current requirements with
              official government sources before travel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
