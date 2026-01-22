import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ColorMode = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  colorMode: ColorMode;
  setColorMode: (m: ColorMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [colorMode, setColorMode] = useState<ColorMode>('normal');

  /* darkmode */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  /* colormodes */
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(
      'color-normal',
      'color-protanopia',
      'color-deuteranopia',
      'color-tritanopia'
    );

    root.classList.add(`color-${colorMode}`);
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        colorMode,
        setColorMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
};
