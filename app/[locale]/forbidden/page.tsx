import { useTranslations } from 'next-intl';
import { ShieldAlert } from 'lucide-react';

import { StatusPage } from '@/components/ui/status-page';

export default function ForbiddenPage() {
  const t = useTranslations('ErrorPages.forbidden');

  return (
    <StatusPage
      icon={<ShieldAlert className="h-24 w-24" />}
      title={t('title')}
      description={t('description')}
      actionLabel={t('action')}
      actionHref="/"
    />
  );
}
