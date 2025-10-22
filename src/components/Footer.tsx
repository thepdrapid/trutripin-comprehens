import { Airplane } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Airplane size={32} weight="fill" className="text-accent" />
            <div>
              <div className="text-xl font-bold">TruTrip.in</div>
              <div className="text-sm text-background/70">Travel in Style</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-sm text-background/70 mb-2">
              Part of the TruTrip family of companies
            </div>
            <div className="text-xs text-background/50">
              © {new Date().getFullYear()} TruTrip.in. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
