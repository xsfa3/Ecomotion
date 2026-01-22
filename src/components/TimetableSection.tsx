import { Bus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BusLine } from '@/data/greekCities';

interface TimetableSectionProps {
  routes: BusLine[];
  from: string;
  to: string;
}

export const TimetableSection = ({ routes, from, to }: TimetableSectionProps) => {
  const { t } = useLanguage();

  if (routes.length === 0) {
    return (
      <section className="py-16 bg-background" id="timetable">
        <div className="container">
          <div className="text-center py-12">
            <Bus className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t('timetable.results')}
            </h2>
            <p className="text-muted-foreground">
              {t('search.noResults')}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background" id="timetable">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('timetable.results')}
          </h2>
          <p className="text-muted-foreground">{from} → {to}</p>
        </div>

        <div className="space-y-4">
          {routes.map((line) => (
            <div key={line.lineNumber} className="bg-card rounded-xl shadow-md p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-primary-foreground font-bold text-xl px-4 py-2 rounded-lg">
                  {line.lineNumber}
                </div>
                <span className="text-muted-foreground text-sm">{t('nav.routes')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {line.times.map((time, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md font-mono text-sm font-medium"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};