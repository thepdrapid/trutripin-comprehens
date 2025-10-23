import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { List, X, MagnifyingGlass } from '@phosphor-icons/react';
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      scrolled 
        ? "border-b border-border/40 liquid-glass shadow-2xl shadow-primary/10" 
        : "border-b border-border/20 bg-background/20 backdrop-blur-md"
    )}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
              <div className="relative w-12 h-12 rounded-full holographic-border flex items-center justify-center">
                <img src={logoImage} alt="TruTrip.in Logo" className="h-9 w-9 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-serif text-2xl font-bold text-holographic">
                TruTrip.in
              </div>
              <div className="text-xs text-muted-foreground tracking-wider">LIQUID TRAVEL</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'relative px-5 py-2.5 text-sm font-medium rounded-2xl transition-all duration-300 group',
                  isActive(item.path)
                    ? 'text-primary-foreground'
                    : 'text-foreground/90 hover:text-foreground'
                )}
              >
                {isActive(item.path) && (
                  <>
                    <span className="absolute inset-0 holographic-border rounded-2xl shadow-lg shadow-primary/40" />
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl shimmer-overlay" />
                  </>
                )}
                {!isActive(item.path) && (
                  <span className="absolute inset-0 liquid-glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <span className="relative z-10 text-sm">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden lg:block">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                  <Input
                    type="search"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 liquid-glass border-border/40 focus:border-primary/60 placeholder:text-muted-foreground/60"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchOpen(false)}
                    className="hover:bg-muted/40"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                  className="hover:bg-muted/40 relative group"
                >
                  <MagnifyingGlass className="h-5 w-5" weight="bold" />
                  <span className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              )}
            </div>
            
            <Button 
              className="hidden lg:inline-flex relative group overflow-hidden rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-all duration-500" 
              size="default"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent shimmer-overlay" />
              <span className="relative z-10 font-semibold text-primary-foreground">Book Travel</span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-muted/60 relative group">
                  <List className="h-6 w-6" weight="bold" />
                  <span className="absolute inset-0 rounded-lg bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] liquid-glass border-border/30">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full holographic-border flex items-center justify-center">
                      <img src={logoImage} alt="TruTrip.in Logo" className="h-8 w-8 object-contain" />
                    </div>
                    <div className="font-serif text-xl font-bold text-holographic">
                      TruTrip.in
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
                
                <form onSubmit={handleSearch} className="mb-6">
                  <Input
                    type="search"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="liquid-glass border-border/40 focus:border-primary/60"
                  />
                </form>

                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'relative px-4 py-3 text-base font-medium rounded-2xl transition-all duration-300',
                        isActive(item.path)
                          ? 'text-primary-foreground'
                          : 'text-foreground/80 hover:text-foreground'
                      )}
                    >
                      {isActive(item.path) && (
                        <span className="absolute inset-0 holographic-border rounded-2xl" />
                      )}
                      {!isActive(item.path) && (
                        <span className="absolute inset-0 liquid-glass rounded-2xl opacity-0 hover:opacity-100 transition-opacity" />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  ))}
                  <Button className="mt-4 w-full relative group overflow-hidden rounded-2xl shadow-lg shadow-primary/30" size="lg">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent shimmer-overlay" />
                    <span className="relative z-10 font-semibold">Book Travel</span>
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
