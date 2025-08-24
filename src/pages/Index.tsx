import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Index = () => {
  const { t, ready, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log('INDEX: i18n ready:', ready, 'language:', i18n.language);

  const changeLanguage = (lng: string) => {
    console.log('CHANGING LANGUAGE TO:', lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setIsDropdownOpen(false);
  };

  const getCurrentFlag = () => {
    const currentLang = i18n.language?.startsWith('pl') ? 'pl' : 'en';
    return currentLang === 'pl' ? '🇵🇱' : '🇺🇸';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Direct Language Switcher - No imports needed */}
      <div className="absolute top-4 right-4 z-[9999]">
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md hover:bg-gray-50 flex items-center gap-2"
            style={{ minWidth: '120px' }}
          >
            <span>🌐</span>
            <span>{getCurrentFlag()}</span>
            <span className="text-sm">{i18n.language?.startsWith('pl') ? 'Polski' : 'English'}</span>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-[10000]" style={{ minWidth: '140px' }}>
              <button 
                onClick={() => changeLanguage('en')}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-3 first:rounded-t-lg"
              >
                <span>🇺🇸</span>
                <span>English</span>
              </button>
              <button 
                onClick={() => changeLanguage('pl')}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-3 last:rounded-b-lg"
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
          <h1 className="text-4xl font-bold mb-4">
            {ready ? t('welcome') : 'Welcome to Your Blank App'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {ready ? t('subtitle') : 'Start building your amazing project here!'}
          </p>
          <div className="mt-4 text-sm opacity-60">
            i18n ready: {ready ? 'Yes' : 'No'} | Language: {i18n.language}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
