import { Bus, Bike, Footprints } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export type TransportMode = 'bus' | 'bicycle' | 'walking';

interface TransportModeSelectorProps {
  selected: TransportMode;
  onChange: (mode: TransportMode) => void;
}

const modes = [
  { id: 'bus' as const, icon: Bus, labelKey: 'mode.bus' },
  { id: 'bicycle' as const, icon: Bike, labelKey: 'mode.bicycle' },
  { id: 'walking' as const, icon: Footprints, labelKey: 'mode.walking' },
];

export const TransportModeSelector = ({ selected, onChange }: TransportModeSelectorProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex gap-2" role="radiogroup" aria-label="Transport mode">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isSelected = selected === mode.id;
        
        return (
          <button
            key={mode.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(mode.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all",
              "border-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              isSelected
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{t(mode.labelKey)}</span>
          </button>
        );
      })}
    </div>
  );
};
