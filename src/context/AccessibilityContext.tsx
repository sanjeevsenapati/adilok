import React, { createContext, useContext, useState, useEffect } from 'react';

export type FontScale = 'sm' | 'base' | 'lg';

interface AccessibilityContextType {
  fontScale: FontScale;
  setFontScale: (scale: FontScale) => void;
  highContrast: boolean;
  setHighContrast: (contrast: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (motion: boolean) => void;
  resetAccessibility: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontScale, setFontScale] = useState<FontScale>('base');
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    const saved = localStorage.getItem('adilok_high_contrast');
    return saved !== null ? saved === 'true' : true; // High contrast is default
  });
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-scale-sm', 'font-scale-base', 'font-scale-lg');
    root.classList.add(`font-scale-${fontScale}`);

    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    localStorage.setItem('adilok_high_contrast', String(highContrast));
  }, [fontScale, highContrast, reducedMotion]);

  const resetAccessibility = () => {
    setFontScale('base');
    setHighContrast(true); // Default setting
    setReducedMotion(false);
    localStorage.setItem('adilok_high_contrast', 'true');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontScale,
        setFontScale,
        highContrast,
        setHighContrast,
        reducedMotion,
        setReducedMotion,
        resetAccessibility,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
