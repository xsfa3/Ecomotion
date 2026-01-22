import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t('contact.title')}
          </h2>
          <p className="text-primary-foreground/80">
            {t('contact.hours')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
              <Phone className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="font-semibold mb-2">{t('contact.phone')}</h3>
            <p className="text-xl font-bold mb-1">+30 210 512 4910</p>
            <p className="text-sm text-primary-foreground/70">
              24/7 Support
            </p>
          </div>

          {/* Email */}
          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
              <Mail className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="font-semibold mb-2">{t('contact.email')}</h3>
            <p className="text-xl font-bold mb-1">info@freehosting.gr</p>
            <p className="text-sm text-primary-foreground/70">
              Response within 24h
            </p>
          </div>

          {/* Live Chat */}
          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
              <MessageCircle className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <Button 
              variant="secondary" 
              className="mt-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
