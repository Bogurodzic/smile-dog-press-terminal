import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, ready } = useTranslation();

  // Add console logging for debugging
  console.log('LanguageSwitcher rendering, i18n ready:', ready, 'current language:', i18n.language);

  const changeLanguage = (lng: string) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const getCurrentFlag = () => {
    const currentLang = i18n.language?.startsWith('pl') ? 'pl' : 'en';
    return currentLang === 'pl' ? '🇵🇱' : '🇺🇸';
  };

  const getCurrentLanguage = () => {
    const currentLang = i18n.language?.startsWith('pl') ? 'pl' : 'en';
    return currentLang === 'pl' ? 'Polski' : 'English';
  };

  // Show loading if i18n is not ready
  if (!ready) {
    return (
      <Button variant="outline" size="sm" className="h-10 px-3 gap-2 bg-background border border-border">
        <Globe className="h-4 w-4" />
        <span>Loading...</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-10 px-3 gap-2 bg-background border border-border hover:bg-accent">
          <Globe className="h-4 w-4" />
          <span className="text-base">{getCurrentFlag()}</span>
          <span className="hidden sm:inline text-sm">{getCurrentLanguage()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px] bg-popover border border-border shadow-md z-[9999]">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')} 
          className="cursor-pointer hover:bg-accent focus:bg-accent"
        >
          <span className="mr-3 text-base">🇺🇸</span>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('pl')} 
          className="cursor-pointer hover:bg-accent focus:bg-accent"
        >
          <span className="mr-3 text-base">🇵🇱</span>
          <span>Polski</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;