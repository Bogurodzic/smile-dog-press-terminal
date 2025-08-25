import { useTranslation } from 'react-i18next';
import LanguagePicker from '@/components/LanguagePicker';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-4 right-4">
        <LanguagePicker />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
          <p className="text-xl text-muted-foreground">{t('subtitle')}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
