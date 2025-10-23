import { Airplane, InstagramLogo, TwitterLogo, FacebookLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-card/60 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <Airplane size={32} weight="fill" className="text-primary relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                TruTrip.in
              </div>
              <div className="text-sm text-muted-foreground">Redefining Travel Experience</div>
            </div>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: InstagramLogo, label: 'Instagram' },
              { icon: TwitterLogo, label: 'Twitter' },
              { icon: FacebookLogo, label: 'Facebook' },
              { icon: LinkedinLogo, label: 'LinkedIn' },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="relative group p-3 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon size={20} className="relative z-10 text-foreground/60 group-hover:text-primary transition-colors" />
              </button>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-sm text-muted-foreground mb-2">
              Part of the TruTrip family of companies
            </div>
            <div className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} TruTrip.in. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
