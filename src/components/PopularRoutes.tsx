import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const popularRoutes = [
  { from: 'IKEA', to: 'KTEL', duration: '1h 12m', price: '€0.60', frequency: '1h' },
  { from: 'Stathmos', to: 'KTEL', duration: '1h 15m', price: '€0.60', frequency: '30 min' },
  { from: 'ermou', to: 'Euosmos', duration: '45m', price: '€0.60', frequency: '1h' },
  { from: 'Καλαμαριά', to: 'Μετρό', duration: '39m', price: '€0.60', frequency: '45 min' },
  { from: 'Κορδελιό', to: 'Σταθμος', duration: '25m', price: '€0.60', frequency: '1h 30m' },
  { from: 'Κτελ', to: 'Κατω Τουμπα', duration: '30m', price: '€0.60', frequency: '2h' },
];

interface PopularRoutesProps {
  onRouteClick: (from: string, to: string) => void;
}

export const PopularRoutes = ({ onRouteClick }: PopularRoutesProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-secondary/30" id="routes">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            {t('popular.subtitle')}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t('popular.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularRoutes.map((route, index) => (
            <div
              key={index}
              onClick={() => onRouteClick(route.from, route.to)}
              className="group bg-card rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground">{route.from}</span>
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span className="font-bold text-foreground">{route.to}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <div className="flex gap-4">
                  <span className="text-muted-foreground">{route.duration}</span>
                  <span className="text-muted-foreground">Every {route.frequency}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">
                  from {route.price}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                >
                  {t('action.viewDetails')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
