import { HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSection = () => {
  const { t } = useLanguage();

  const faqItems = [
    { question: 'faq.lostItems', answer: 'faq.lostItemsAnswer' },
    { question: 'faq.refund', answer: 'faq.refundAnswer' },
    { question: 'faq.luggage', answer: 'faq.luggageAnswer' },
    { question: 'faq.accessibility', answer: 'faq.accessibilityAnswer' },
  ];

  return (
    <section className="py-16 bg-background" id="faq">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <HelpCircle className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t('faq.title')}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 shadow-sm border-0 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {t(item.question)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {t(item.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
