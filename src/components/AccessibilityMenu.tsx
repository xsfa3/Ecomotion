import { Moon, Sun, Eye, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';

const colorModes = [
  { id: 'normal', labelKey: 'accessibility.normal' },
  { id: 'protanopia', labelKey: 'accessibility.protanopia' },
  { id: 'deuteranopia', labelKey: 'accessibility.deuteranopia' },
  { id: 'tritanopia', labelKey: 'accessibility.tritanopia' },
] as const;

export const AccessibilityMenu = () => {
  const {
    theme,
    setTheme,
    colorMode,
    setColorMode,
    narratorEnabled,
    setNarratorEnabled,
  } = useTheme();

  const { t } = useLanguage();

  const handleThemeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const handleColorMode = (mode: string) => setColorMode(mode);
  const handleNarratorToggle = (value: boolean) => setNarratorEnabled(value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label={t('accessibility.title')}
        >
          <Eye className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

<DropdownMenuContent
  align="end"
  sideOffset={8}
  className="
    w-64
    z-50
    !bg-[#0f172a]
    !text-white
    !backdrop-blur-none
    border border-slate-700
    shadow-2xl
    rounded-xl
  "
>


        <DropdownMenuLabel>{t('accessibility.title')}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Theme Toggle */}
        <DropdownMenuItem asChild>
          <button onClick={handleThemeToggle} className="
  w-full
  flex
  items-center
  gap-2
  px-2
  py-1.5
  rounded-md
  hover:bg-muted
  focus:bg-muted
">
            {theme === 'dark' ? (
              <>
                <Sun className="h-4 w-4" />
                {t('accessibility.lightMode')}
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                {t('accessibility.darkMode')}
              </>
            )}
          </button>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs">{t('accessibility.colorblind')}</DropdownMenuLabel>

        {/* Color Modes */}
        {colorModes.map((mode) => (
          <DropdownMenuItem asChild key={mode.id}>
            <button
            onClick={() => setColorMode(mode.id)}
              className={`flex items-center gap-2 w-full text-left ${
                colorMode === mode.id ? 'bg-secondary' : ''
              }`}
            >
              <div
                className={`h-3 w-3 rounded-full border ${
                  colorMode === mode.id ? 'bg-primary' : ''
                }`}
              />
              {t(mode.labelKey)}
            </button>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* Narrator Toggle */}
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            <span className="text-sm">{t('accessibility.narrator')}</span>
          </div>
          <Switch
            checked={narratorEnabled}
            onCheckedChange={handleNarratorToggle}
            aria-label={t('accessibility.narrator')}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
