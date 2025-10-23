import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ImmersiveBackground } from '@/components/layout/ImmersiveBackground';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { CorporatePage } from '@/pages/CorporatePage';
import { VisaPage } from '@/pages/VisaPage';
import { ContactPage } from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative">
        <ImmersiveBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/corporate" element={<CorporatePage />} />
              <Route path="/visa" element={<VisaPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
