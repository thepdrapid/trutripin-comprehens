import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Vision } from '@/components/Vision';
import { Solutions } from '@/components/Solutions';
import { Technology } from '@/components/Technology';
import { GlobalNetwork } from '@/components/GlobalNetwork';
import { Sustainability } from '@/components/Sustainability';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Vision />
      <Solutions />
      <Technology />
      <GlobalNetwork />
      <Sustainability />
      <ContactCTA />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;