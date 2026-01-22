import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'el' | 'de';

interface Translations {
  [key: string]: {
    en: string;
    el: string;
    de: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.routes': { en: 'Routes', el: 'Δρομολόγια', de: 'Routen' },
  'nav.timetables': { en: 'Timetables', el: 'Ωράρια', de: 'Fahrpläne' },
  'nav.tickets': { en: 'Tickets', el: 'Εισιτήρια', de: 'Tickets' },
  'nav.help': { en: 'Help', el: 'Βοήθεια', de: 'Hilfe' },
  
  // Transport modes
  'mode.bus': { en: 'Bus', el: 'Λεωφορείο', de: 'Bus' },
  'mode.bicycle': { en: 'Bicycle', el: 'Ποδήλατο', de: 'Fahrrad' },
  'mode.walking': { en: 'Walking', el: 'Περπάτημα', de: 'Zu Fuß' },
  
  // Accessibility
  'accessibility.title': { en: 'Accessibility', el: 'Προσβασιμότητα', de: 'Barrierefreiheit' },
  'accessibility.darkMode': { en: 'Dark Mode', el: 'Σκούρο Θέμα', de: 'Dunkler Modus' },
  'accessibility.lightMode': { en: 'Light Mode', el: 'Φωτεινό Θέμα', de: 'Heller Modus' },
  'accessibility.colorblind': { en: 'Color Vision', el: 'Χρωματική Όραση', de: 'Farbsicht' },
  'accessibility.normal': { en: 'Normal', el: 'Κανονική', de: 'Normal' },
  'accessibility.protanopia': { en: 'Protanopia', el: 'Πρωτανοπία', de: 'Protanopie' },
  'accessibility.deuteranopia': { en: 'Deuteranopia', el: 'Δευτερανοπία', de: 'Deuteranopie' },
  'accessibility.tritanopia': { en: 'Tritanopia', el: 'Τριτανοπία', de: 'Tritanopie' },
  'accessibility.narrator': { en: 'Screen Reader Mode', el: 'Λειτουργία Αφηγητή', de: 'Bildschirmleser' },
  
  // Hero
  'hero.title': { en: 'Travel Across Greece', el: 'Ταξιδέψτε σε όλη την Ελλάδα', de: 'Reisen Sie durch Griechenland' },
  'hero.subtitle': { en: 'Find your route, check timetables, and book Dev bus tickets instantly', el: 'Βρείτε το δρομολόγιό σας, ελέγξτε τα ωράρια και κλείστε εισιτήρια DEV', de: 'Finden Sie Ihre Route, prüfen Sie Fahrpläne und buchen Sie -Tickets' },
  
  // Search
  'search.from': { en: 'From', el: 'Από', de: 'Von' },
  'search.to': { en: 'To', el: 'Προς', de: 'Nach' },
  'search.date': { en: 'Date', el: 'Ημερομηνία', de: 'Datum' },
  'search.time': { en: 'Time', el: 'Ώρα', de: 'Zeit' },
  'search.findRoutes': { en: 'Find Routes', el: 'Αναζήτηση', de: 'Suchen' },
  'search.passengers': { en: 'Passengers', el: 'Επιβάτες', de: 'Passagiere' },
  'search.noResults': { en: 'No routes found. Try different cities.', el: 'Δεν βρέθηκαν δρομολόγια. Δοκιμάστε άλλες πόλεις.', de: 'Keine Routen gefunden.' },
  'search.findNearest': { en: 'Find Nearest  Station', el: 'Βρείτε τον Πλησιέστερο Σταθμό DEV', de: 'Nächste -Station finden' },
  'search.nearestDesc': { en: 'Get directions to walk or cycle to your nearest  bus station', el: 'Λάβετε οδηγίες για να περπατήσετε ή να ποδηλατήσετε στον πλησιέστερο σταθμό DEV', de: 'Wegbeschreibung zur nächsten -Station' },
  'search.getDirections': { en: 'Get Directions on Google Maps', el: 'Οδηγίες στο Google Maps', de: 'Wegbeschreibung auf Google Maps' },
  'search.orSelectStation': { en: 'Or select a major  station:', el: 'Ή επιλέξτε έναν μεγάλο σταθμό DEV:', de: 'Oder wählen Sie eine -Station:' },
  
  // Timetable
  'timetable.departure': { en: 'Departure', el: 'Αναχώρηση', de: 'Abfahrt' },
  'timetable.arrival': { en: 'Arrival', el: 'Άφιξη', de: 'Ankunft' },
  'timetable.duration': { en: 'Duration', el: 'Διάρκεια', de: 'Dauer' },
  'timetable.stops': { en: 'Stops', el: 'Στάσεις', de: 'Haltestellen' },
  'timetable.price': { en: 'Price', el: 'Τιμή', de: 'Preis' },
  'timetable.available': { en: 'Available', el: 'Διαθέσιμο', de: 'Verfügbar' },
  'timetable.limited': { en: 'Limited', el: 'Περιορισμένο', de: 'Begrenzt' },
  'timetable.results': { en: 'Search Results', el: 'Αποτελέσματα', de: 'Suchergebnisse' },
  
  // Actions
  'action.buyTicket': { en: 'Buy Ticket', el: 'Αγορά', de: 'Kaufen' },
  'action.viewDetails': { en: 'View Details', el: 'Λεπτομέρειες', de: 'Details' },
  'action.bookNow': { en: 'Book Now', el: 'Κράτηση', de: 'Jetzt Buchen' },
  
  // Popular Routes
  'popular.title': { en: 'Popular Routes', el: 'Δημοφιλή Δρομολόγια', de: 'Beliebte Routen' },
  'popular.subtitle': { en: 'Most traveled connections', el: 'Οι πιο δημοφιλείς διαδρομές', de: 'Meistgenutzte Verbindungen' },
  
  // FAQ
  'faq.title': { en: 'Frequently Asked Questions', el: 'Συχνές Ερωτήσεις', de: 'Häufige Fragen' },
  'faq.lostItems': { en: 'Lost Items', el: 'Χαμένα Αντικείμενα', de: 'Fundsachen' },
  'faq.lostItemsAnswer': { en: 'Contact our customer service within 24 hours. We keep items for 30 days.', el: 'Επικοινωνήστε με την εξυπηρέτηση πελατών εντός 24 ωρών. Διατηρούμε τα αντικείμενα για 30 ημέρες.', de: 'Kontaktieren Sie unseren Kundenservice innerhalb von 24 Stunden.' },
  'faq.refund': { en: 'Refund Policy', el: 'Πολιτική Επιστροφών', de: 'Erstattungsrichtlinie' },
  'faq.refundAnswer': { en: 'Full refund up to 24h before departure. 50% refund up to 2h before.', el: 'Πλήρης επιστροφή έως 24 ώρες πριν. 50% επιστροφή έως 2 ώρες πριν.', de: 'Volle Erstattung bis 24h vor Abfahrt.' },
  'faq.luggage': { en: 'Luggage Allowance', el: 'Επιτρεπόμενες Αποσκευές', de: 'Gepäckfreigabe' },
  'faq.luggageAnswer': { en: '2 bags per passenger (max 23kg each). Extra luggage available for purchase.', el: '2 βαλίτσες ανά επιβάτη (μέγ. 23kg). Επιπλέον αποσκευές με χρέωση.', de: '2 Gepäckstücke pro Passagier (max. 23kg).' },
  'faq.accessibility': { en: 'Accessibility', el: 'Προσβασιμότητα', de: 'Barrierefreiheit' },
  'faq.accessibilityAnswer': { en: 'Most vehicles are wheelchair accessible. Please notify us 24h in advance.', el: 'Τα περισσότερα λεωφορεία είναι προσβάσιμα σε ΑΜΕΑ. Παρακαλώ ενημερώστε μας 24 ώρες νωρίτερα.', de: 'Die meisten Fahrzeuge sind rollstuhlgerecht.' },
  
  // Contact
  'contact.title': { en: 'Contact Us', el: 'Επικοινωνία', de: 'Kontakt' },
  'contact.phone': { en: 'Phone', el: 'Τηλέφωνο', de: 'Telefon' },
  'contact.email': { en: 'Email', el: 'Email', de: 'E-Mail' },
  'contact.hours': { en: 'Mon-Sun: 6:00-22:00', el: 'Δευ-Κυρ: 6:00-22:00', de: 'Mo-So: 6:00-22:00' },
  
  // Footer
  'footer.terms': { en: 'Terms of Service', el: 'Όροι Χρήσης', de: 'Nutzungsbedingungen' },
  'footer.privacy': { en: 'Privacy Policy', el: 'Πολιτική Απορρήτου', de: 'Datenschutz' },
  'footer.payments': { en: 'We accept', el: 'Δεχόμαστε', de: 'Wir akzeptieren' },
  'footer.tagline': { en: 'Your trusted partner for comfortable bus travel across Greece.', el: 'Ο αξιόπιστος συνεργάτης σας για άνετα ταξίδια με λεωφορείο σε όλη την Ελλάδα.', de: 'Ihr zuverlässiger Partner für komfortables Busreisen in Griechenland.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};