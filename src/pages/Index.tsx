import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Index = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    setCurrentLang(i18n.language || 'en');
  }, [i18n.language]);

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
    setCurrentLang(lng);
    localStorage.setItem('i18nextLng', lng);
    setIsDropdownOpen(false);
  };

  const getCurrentFlag = () => {
    return currentLang === 'pl' ? '🇵🇱' : '🇺🇸';
  };

  const getCurrentLanguageName = () => {
    return currentLang === 'pl' ? 'Polski' : 'English';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-card border border-border rounded-lg px-4 py-2 shadow-md hover:bg-accent flex items-center gap-2 text-foreground"
          >
            <span>🌐</span>
            <span>{getCurrentFlag()}</span>
            <span className="text-sm">{getCurrentLanguageName()}</span>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[140px]">
              <button 
                onClick={() => changeLanguage('en')}
                className="w-full text-left px-4 py-2 hover:bg-accent flex items-center gap-3 rounded-t-lg text-foreground"
              >
                <span>🇺🇸</span>
                <span>English</span>
              </button>
              <button 
                onClick={() => changeLanguage('pl')}
                className="w-full text-left px-4 py-2 hover:bg-accent flex items-center gap-3 rounded-b-lg text-foreground"
              >
                <span>🇵🇱</span>
                <span>Polski</span>
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            {t('welcome')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Debug Info:</p>
            <p className="text-sm">Current Language: {currentLang}</p>
            <p className="text-sm">i18n Language: {i18n.language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
