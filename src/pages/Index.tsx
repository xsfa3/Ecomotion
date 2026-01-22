import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TimetableSection } from '@/components/TimetableSection';
import { PopularRoutes } from '@/components/PopularRoutes';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BusLine, generateRoutes } from '@/data/greekCities';

const IndexContent = () => {
  const [searchResults, setSearchResults] = useState<BusLine[]>([]);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');

  const handleSearch = (routes: BusLine[], from: string, to: string) => {
    setSearchResults(routes);
    setSearchFrom(from);
    setSearchTo(to);
  };

  const handlePopularRouteClick = (from: string, to: string) => {
    const routes = generateRoutes(from, to, 'bus');
    setSearchResults(routes);
    setSearchFrom(from);
    setSearchTo(to);
    document.getElementById('timetable')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection onSearch={handleSearch} />
        <TimetableSection routes={searchResults} from={searchFrom} to={searchTo} />
        <PopularRoutes onRouteClick={handlePopularRouteClick} />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <IndexContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
