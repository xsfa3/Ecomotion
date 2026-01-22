import { useState, useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { greekCities } from '@/data/greekCities';
import { useLanguage } from '@/contexts/LanguageContext';

interface CityAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  iconColor?: string;
}

// ✅ Named export (must match import in HeroSection.tsx)
export const CityAutocomplete = ({
  value,
  onChange,
  placeholder,
  iconColor = 'text-muted-foreground',
}: CityAutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState(greekCities);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (inputValue: string) => {
    onChange(inputValue);
    const filtered = greekCities.filter(
      (city) =>
        city.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        city.nameEn.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCities(filtered);
    setIsOpen(true);
  };

  const handleSelect = (cityName: string) => {
    onChange(cityName);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <MapPin
        className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${iconColor}`}
      />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="pl-10 h-12 bg-secondary/50 border-0 focus:bg-card"
      />
      {isOpen && filteredCities.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card rounded-lg shadow-lg border border-border max-h-60 overflow-y-auto z-50 animate-scale-in">
          {filteredCities.slice(0, 8).map((city) => (
            <button
              key={city.nameEn}
              type="button"
              onClick={() => handleSelect(city.name)}
              className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center gap-3 border-b border-border/50 last:border-0"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <div>
                <div className="font-medium text-foreground">
                  {language === 'el' ? city.name : city.nameEn}
                </div>
                <div className="text-xs text-muted-foreground">{city.region}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
