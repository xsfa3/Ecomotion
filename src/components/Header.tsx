import { useState } from 'react';
import { Menu, X, Bus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AccessibilityMenu } from './AccessibilityMenu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'el', label: 'ΕΛ', full: 'Ελληνικά' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'de', label: 'DE', full: 'Deutsch' },
] as const;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: 'nav.routes', href: '#routes' },
    { key: 'nav.timetables', href: '#timetable' },
    { key: 'nav.tickets', href: '#search' },
    { key: 'nav.help', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Bus className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground leading-tight">Ecomotion</span>
            <span className="text-[10px] text-muted-foreground leading-none">DEV Greece</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Accessibility Menu */}
          <AccessibilityMenu />
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 font-medium">
                {languages.find(l => l.code === language)?.label}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? 'bg-secondary' : ''}
                >
                  <span className="font-medium">{lang.label}</span>
                  <span className="ml-2 text-muted-foreground">{lang.full}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Book Button */}
          <Button variant="accent" size="sm" className="hidden sm:flex">
            {t('action.bookNow')}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <Button variant="accent" className="mt-2 w-full">
              {t('action.bookNow')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
