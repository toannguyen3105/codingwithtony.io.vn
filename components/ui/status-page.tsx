'use client';

import React from 'react';

import { Link } from '@/i18n/navigation';

import { Button } from './button';

interface StatusPageProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

export function StatusPage({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: StatusPageProps) {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center p-4">
      {icon && <div className="mb-6 text-muted-foreground">{icon}</div>}
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">{description}</p>
      {actionLabel && (actionHref || onAction) && (
        <Button asChild={!!actionHref} onClick={onAction} size="lg">
          {actionHref ? <Link href={actionHref}>{actionLabel}</Link> : actionLabel}
        </Button>
      )}
    </div>
  );
}
