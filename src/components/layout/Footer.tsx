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
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="font-serif text-xl font-bold text-primary mb-4">
                TruTrip<span className="text-accent">.in</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Simplifying business and leisure travel worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/corporate"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Corporate Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/visa"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Visa Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Travel Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    MICE Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4">Partners</h3>
              <ul className="space-y-2">
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
              <h3 className="font-semibold text-sm mb-4">Airline Partners</h3>
              <ul className="space-y-2">
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

        <Separator className="my-8" />

        <div className="py-8 space-y-4">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Refund & Cancellation
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Accessibility Statement
            </a>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="py-6 space-y-4 text-xs text-muted-foreground">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {currentYear} TruTrip.in. All rights reserved.</p>
            <p>Last updated {currentDate}</p>
          </div>

          <div className="space-y-2">
            <p>
              <strong>Payment Compliance:</strong> PCI DSS SAQ-A compliant with
              hosted payment processing.
            </p>
            <p>
              <strong>Data Protection:</strong> Compliant with GDPR (EU), CPRA
              (California), DPDP (India), and PDPA (Singapore).
            </p>
            <p>
              <strong>Accessibility:</strong> WCAG 2.2 Level AA target
              compliance for inclusive access.
            </p>
            <p>
              <strong>Visa Disclaimer:</strong> Visa requirements and
              regulations may change. Always verify current requirements with
              official government sources before travel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
