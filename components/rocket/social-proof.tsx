import { useTranslations } from 'next-intl';
import { Activity, Building2, Cpu, Globe, Mountain, Radio } from 'lucide-react';

import { Marquee } from '@/components/ui/marquee';

const companies = [
  { name: 'Acme Corp', icon: Building2, color: 'text-blue-600' },
  { name: 'Quantum', icon: Cpu, color: 'text-indigo-600' },
  { name: 'Echo Valley', icon: Radio, color: 'text-emerald-600' },
  { name: 'Celestial', icon: Globe, color: 'text-cyan-600' },
  { name: 'Pulse', icon: Activity, color: 'text-rose-600' },
  { name: 'Apex', icon: Mountain, color: 'text-amber-600' },
];

export function SocialProof() {
  const t = useTranslations('SocialProof');

  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <div className="container overflow-hidden">
        <h2 className="mb-10 text-center text-xl font-bold tracking-wide text-gray-900">
          {t('title')}
        </h2>
        <Marquee pauseOnHover className="[--duration:20s]">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 px-8 text-gray-400 transition-colors hover:text-black"
            >
              <company.icon className={`h-8 w-8 ${company.color}`} />
              <span className="text-xl font-semibold">{company.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
