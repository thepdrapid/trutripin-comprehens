import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { List, X } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/images/1080x1080-PNG.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Corporate Solutions', path: '/corporate' },
  { name: 'Visa & Travel Support', path: '/visa' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "border-b border-border/50 bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/5" 
        : "border-b border-border/20 bg-card/40 backdrop-blur-md"
    )}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-md group-hover:blur-lg transition-all" />
              <img src={logoImage} alt="TruTrip.in Logo" className="h-10 w-10 object-contain relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-serif text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TruTrip<span className="text-accent">.in</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  isActive(item.path)
                    ? 'text-primary-foreground'
                    : 'text-foreground/80 hover:text-foreground'
                )}
              >
                {isActive(item.path) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg shadow-primary/30" />
                )}
                {!isActive(item.path) && (
                  <span className="absolute inset-0 bg-muted/40 rounded-lg opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm" />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="hidden lg:inline-flex bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105" 
              size="default"
            >
              Book Travel
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-muted/60">
                  <List className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card/95 backdrop-blur-xl border-border/50">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <img src={logoImage} alt="TruTrip.in Logo" className="h-8 w-8 object-contain" />
                    <div className="font-serif text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      TruTrip<span className="text-accent">.in</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-muted/60"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'relative px-4 py-3 text-base font-medium rounded-lg transition-all',
                        isActive(item.path)
                          ? 'text-primary-foreground'
                          : 'text-foreground/80 hover:text-foreground'
                      )}
                    >
                      {isActive(item.path) && (
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg" />
                      )}
                      {!isActive(item.path) && (
                        <span className="absolute inset-0 bg-muted/40 rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  ))}
                  <Button className="mt-4 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg shadow-primary/30" size="lg">
                    Book Travel
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
