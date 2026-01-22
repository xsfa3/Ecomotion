import { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight, Search, ArrowLeftRight, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { CityAutocomplete } from './CityAutocomplete';
import { generateRoutes, BusLine } from '@/data/greekCities';
import { TransportModeSelector, TransportMode } from './TransportModeSelector';

interface HeroSectionProps {
  onSearch: (routes: BusLine[], from: string, to: string) => void;
}

// Dev stations with coordinates for major Greek cities
const ktelStations = [
  { city: 'Αχέπα', name: 'DEV Κηφισού', lat: 38.0063, lng: 23.7063 },
  { city: 'IKEA', name: 'DEV Λιοσίων', lat: 38.0089, lng: 23.7244 },
  { city: 'Diagora', name: 'DEV Μακεδονία', lat: 40.6545, lng: 22.9059 },
  { city: 'Stauros', name: 'DEV Αχαΐας', lat: 38.2544, lng: 21.7346 },
  { city: 'Ηράκλειο', name: 'DEV Ηρακλείου', lat: 35.3413, lng: 25.1383 },
  { city: 'Λάρισα', name: 'DEV Λάρισας', lat: 39.6401, lng: 22.4142 },
  { city: 'Βόλος', name: 'DEV Μαγνησίας', lat: 39.3649, lng: 22.9419 },
  { city: 'Ιωάννινα', name: 'DEV Ιωαννίνων', lat: 39.6650, lng: 20.8528 },
];

export const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const { t } = useLanguage();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [transportMode, setTransportMode] = useState<TransportMode>('bus');
  const [userLocation, setUserLocation] = useState<string>('');

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    if (transportMode === 'bus') {
      if (from && to && from !== to) {
        const routes = generateRoutes(from, to, transportMode);
        onSearch(routes, from, to);
        document.getElementById('timetable')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openGoogleMapsToNearestKTEL = (travelMode: 'walking' | 'bicycling') => {
    // Try to get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Search for nearest KTEL station
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=DEV+σταθμός&travelmode=${travelMode}`;
          window.open(mapsUrl, '_blank');
        },
        () => {
          // If location denied, just search for KTEL stations
          const mapsUrl = `https://www.google.com/maps/search/DEV+σταθμός?travelmode=${travelMode}`;
          window.open(mapsUrl, '_blank');
        }
      );
    } else {
      const mapsUrl = `https://www.google.com/maps/search/DEV+σταθμός`;
      window.open(mapsUrl, '_blank');
    }
  };

  const openDirectionsToKTEL = (station: typeof ktelStations[0], travelMode: 'walking' | 'bicycling') => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}&destination_place_id=${encodeURIComponent(station.name)}&travelmode=${travelMode}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24" id="search">
      {/* Background Pattern - Greek key pattern inspired */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-primary-foreground/80 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Search Card */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl shadow-xl p-4 md:p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Transport Mode Selector */}
            <div className="mb-4">
              <TransportModeSelector selected={transportMode} onChange={setTransportMode} />
            </div>
            
            {/* Bus Mode - Full Search */}
            {transportMode === 'bus' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {/* From */}
                  <div className="relative">
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {t('search.from')}
                    </label>
                    <CityAutocomplete
                      value={from}
                      onChange={setFrom}
                      placeholder="Αθήνα"
                      iconColor="text-muted-foreground"
                    />
                  </div>

                  {/* Swap Button - Mobile */}
                  <div className="flex md:hidden justify-center -my-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={handleSwap}
                      className="rounded-full bg-secondary"
                    >
                      <ArrowLeftRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* To */}
                  <div className="relative">
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {t('search.to')}
                    </label>
                    <CityAutocomplete
                      value={to}
                      onChange={setTo}
                      placeholder="Θεσσαλονίκη"
                      iconColor="text-accent"
                    />
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {t('search.date')}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="date"
                        defaultValue={new Date().toISOString().split('T')[0]}
                        className="pl-10 h-12 bg-secondary/50 border-0 focus:bg-card"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="relative">
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {t('search.time')}
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="time"
                        defaultValue="08:00"
                        className="pl-10 h-12 bg-secondary/50 border-0 focus:bg-card"
                      />
                    </div>
                  </div>
                </div>

                {/* Passengers + Search */}
                <div className="flex flex-col sm:flex-row gap-4 items-end">
                  <div className="flex-1">
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {t('search.passengers')}
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <select className="w-full h-12 pl-10 pr-4 rounded-lg bg-secondary/50 border-0 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="1">1 {t('search.passengers')}</option>
                        <option value="2">2 {t('search.passengers')}</option>
                        <option value="3">3 {t('search.passengers')}</option>
                        <option value="4">4 {t('search.passengers')}</option>
                      </select>
                    </div>
                  </div>
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="w-full sm:w-auto gap-2"
                    onClick={handleSearch}
                  >
                    <Search className="h-5 w-5" />
                    {t('search.findRoutes')}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </>
            )}

            {/* Bicycle/Walking Mode - Find Nearest KTEL */}
            {(transportMode === 'bicycle' || transportMode === 'walking') && (
              <div className="text-center py-6">
                <div className="mb-6">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t('search.findNearestKTEL')}
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {t('search.nearestKTELDesc')}
                  </p>
                </div>

                <Button
                  variant="hero"
                  size="xl"
                  className="gap-2"
                  onClick={() => openGoogleMapsToNearestKTEL(transportMode === 'walking' ? 'walking' : 'bicycling')}
                >
                  <Navigation className="h-5 w-5" />
                  {t('search.getDirections')}
                  <ExternalLink className="h-4 w-4" />
                </Button>

                {/* Quick access to major KTEL stations */}
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">{t('search.orSelectStation')}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {ktelStations.slice(0, 6).map((station) => (
                      <Button
                        key={station.name}
                        variant="outline"
                        size="sm"
                        className="gap-1"
                        onClick={() => openDirectionsToKTEL(station, transportMode === 'walking' ? 'walking' : 'bicycling')}
                      >
                        <MapPin className="h-3 w-3" />
                        {station.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
