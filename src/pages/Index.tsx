import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  const { t, ready } = useTranslation();

  console.log('Index component rendering, i18n ready:', ready);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Simple test button to verify positioning */}
      <div className="absolute top-4 left-4 z-50">
        <div className="bg-red-500 text-white px-2 py-1 rounded text-xs">
          Test Position
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{ready ? t('welcome') : 'Welcome to Your Blank App'}</h1>
          <p className="text-xl text-muted-foreground">{ready ? t('subtitle') : 'Start building your amazing project here!'}</p>
          <div className="mt-4 text-sm text-muted-foreground">
            i18n ready: {ready ? 'Yes' : 'No'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
