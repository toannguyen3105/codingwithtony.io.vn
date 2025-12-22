import { useTranslations } from 'next-intl';
import { FileQuestion } from 'lucide-react';

import { StatusPage } from '@/components/ui/status-page';

export default function NotFound() {
  const t = useTranslations('ErrorPages.notFound');

  return (
    <StatusPage
      icon={<FileQuestion className="h-24 w-24" />}
      title={t('title')}
      description={t('description')}
      actionLabel={t('action')}
      actionHref="/"
    />
  );
}
