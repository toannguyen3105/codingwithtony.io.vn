import { useTranslations } from 'next-intl';
import { Hammer } from 'lucide-react';

import { StatusPage } from '@/components/ui/status-page';

export default function MaintenancePage() {
  const t = useTranslations('ErrorPages.maintenance');

  return (
    <StatusPage
      icon={<Hammer className="h-24 w-24" />}
      title={t('title')}
      description={t('description')}
      actionLabel={t('action')}
      actionHref="/"
    />
  );
}
