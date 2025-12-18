'use client';

import * as React from 'react';
import * as d3Shape from 'd3-shape';
import { motion } from 'framer-motion';

interface SkillData {
  label: string;
  value: number;
  color: string;
}

const data: SkillData[] = [
  { label: 'Frontend', value: 45, color: '#3b82f6' }, // blue-500
  { label: 'Backend', value: 30, color: '#a855f7' }, // purple-500
  { label: 'DevOps', value: 15, color: '#ec4899' }, // pink-500
  { label: 'Design', value: 10, color: '#f97316' }, // orange-500
];

export function SkillNetwork() {
  const width = 300;
  const height = 300;
  const radius = Math.min(width, height) / 2;

  const arc = d3Shape
    .arc()
    .innerRadius(radius * 0.6)
    .outerRadius(radius - 1);

  const pie = d3Shape
    .pie()
    .padAngle(0.05)
    .sort(null)
    .value((d: unknown) => (d as SkillData).value);

  const arcs = pie(data);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h3 className="mb-6 text-2xl font-semibold">Skill Distribution</h3>
      <div className="relative">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <g transform={`translate(${width / 2},${height / 2})`}>
            {arcs.map((d: unknown, i: number) => (
              <motion.path
                key={i}
                d={arc(d) || undefined}
                fill={(d as { data: SkillData }).data.color}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }}
                stroke="none"
              />
            ))}
          </g>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold">100%</span>
          <span className="text-sm text-muted-foreground">Dedication</span>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm font-medium">{item.label}</span>
            <span className="text-xs text-muted-foreground">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
