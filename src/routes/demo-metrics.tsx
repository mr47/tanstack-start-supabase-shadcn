import React from 'react';
import { MetricsCard } from '@/components/metrics-card';
import type { MetricItem } from '@/types/metrics';
import {createFileRoute} from "@tanstack/react-router";

/**
 * Demo page for the MetricsCard component
 */

export const Route = createFileRoute('/demo-metrics')({
  component: DemoMetricsPage,
})
function DemoMetricsPage() {
  // Sample data for the metrics
  const demoMetrics: MetricItem[] = [
    {
      title: 'Read Score',
      score: 80,
      status: 'good',
      trend: Array.from({ length: 10 }, (_, i) => ({
        value: 75 + Math.floor(Math.random() * 10),
        timestamp: i,
      })),
    },
    {
      title: 'Engagement',
      score: 81,
      status: 'good',
      trend: Array.from({ length: 10 }, (_, i) => ({
        value: 76 + Math.floor(Math.random() * 10),
        timestamp: i,
      })),
    },
    {
      title: 'Sentiment',
      score: 79,
      status: 'okay',
      trend: Array.from({ length: 10 }, (_, i) => ({
        value: 74 + Math.floor(Math.random() * 10),
        timestamp: i,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Metrics Dashboard</h1>
        <MetricsCard metrics={demoMetrics} />

        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Usage Example</h2>
          <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm">
            {`import { MetricsCard } from '@/components/metrics-card';

const metrics = [
  {
    title: 'Read Score',
    score: 80,
    status: 'good',
    trend: [
      { value: 75, timestamp: 1 },
      { value: 78, timestamp: 2 },
      // ... more data points
    ],
  },
  // ... more metrics
];

<MetricsCard metrics={metrics} />`}
          </pre>
        </div>
      </div>
    </div>
  );
}
