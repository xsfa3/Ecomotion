import { Bus, CreditCard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <Bus className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold">FreeHosting</span>
                <span className="block text-xs text-background/60">DEV Greece</span>
              </div>
            </div>
            <p className="text-background/70 mb-4 max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <CreditCard className="h-4 w-4" />
              <span>{t('footer.payments')}:</span>
              <span className="font-medium">Visa, Mastercard, PayPal, Viva Wallet</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#routes" className="hover:text-background transition-colors">{t('nav.routes')}</a></li>
              <li><a href="#timetable" className="hover:text-background transition-colors">{t('nav.timetables')}</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">{t('nav.help')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2024 FreeHosting. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-background/60">
            <span>Made with ❤️ in Greece 🇬🇷</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
