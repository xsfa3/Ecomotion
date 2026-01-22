// src/data/greekCities.ts

// ✅ Named export for city list
export const greekCities = [
  { name: 'Αχέπα', nameEn: 'Axepa', region: 'Axepa' },
  { name: 'ΙΚΕΑ', nameEn: 'ΙΚΕΑ', region: 'ΙΚΕΑ' },
  { name: 'Έυοσμος', nameEn: 'Euosmos', region: 'Euosmos' },
  { name: 'Kordeli;o', nameEn: 'Kordelio', region: 'kordelio' },
  { name: 'Σταθμός', nameEn: 'Stathmos', region: 'Stathmos' },
  { name: 'Μετρο', nameEn: 'Metro', region: 'Metro' },
  { name: 'Ermou', nameEn: 'Ermou', region: 'Ermou' },
  { name: 'Kατω Τουμπα', nameEn: 'Kato Toumpa', region: 'Kato Toumpa' },
  { name: 'Ano Toumpa', nameEn: 'Ano Toumpa', region: 'Ano Toumpa' },
  { name: 'Καλιθέα', nameEn: 'Kalithea', region: 'Kalithea' }
];

export interface BusLine {
  lineNumber: string;
  times: string[];
}

export type TransportMode = 'bus' | 'bicycle' | 'walking';

// Mock route data generator - returns bus lines with their schedules
export const generateRoutes = (from: string, to: string, mode: TransportMode = 'bus'): BusLine[] => {
  if (!from || !to || from === to) return [];
  
  // Generate 2-4 bus lines with random times
  const numLines = 2 + Math.floor(Math.random() * 3);
  const lines: BusLine[] = [];
  
  for (let i = 0; i < numLines; i++) {
    const lineNumber = String(10 + Math.floor(Math.random() * 90));
    const numTimes = 4 + Math.floor(Math.random() * 5);
    const times: string[] = [];
    
    // Generate sorted times throughout the day
    let baseHour = 6 + Math.floor(Math.random() * 3);
    for (let j = 0; j < numTimes; j++) {
      const hour = baseHour + j * 2 + Math.floor(Math.random() * 2);
      const minute = Math.floor(Math.random() * 60);
      if (hour < 24) {
        times.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
      }
    }
    
    lines.push({
      lineNumber,
      times: times.sort(),
    });
  }
  
  return lines;
};

