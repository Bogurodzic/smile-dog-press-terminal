import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-10 px-3 gap-2 bg-background border border-border hover:bg-accent">
          <Globe className="h-4 w-4" />
          <span className="text-base">{getCurrentFlag()}</span>
          <span className="hidden sm:inline text-sm">{getCurrentLanguage()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px] bg-popover border border-border shadow-md">
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