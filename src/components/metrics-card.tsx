import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';
import { MetricItem, MetricsCardProps } from '@/types/metrics';

/**
 * Get the badge variant based on the status
 */
const getBadgeVariant = (status: MetricItem['status']) => {
  switch (status) {
    case 'good':
      return 'bg-green-100 text-green-800 hover:bg-green-100';
    case 'okay':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
    case 'poor':
      return 'bg-red-100 text-red-800 hover:bg-red-100';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

/**
 * Get the status label text based on the status
 */
const getStatusLabel = (status: MetricItem['status']) => {
  switch (status) {
    case 'good':
      return 'GOOD';
    case 'okay':
      return 'OKAY';
    case 'poor':
      return 'POOR';
    default:
      return 'N/A';
  }
};

/**
 * A card component that displays metrics with trend lines
 */
export function MetricsCard({ metrics, className }: MetricsCardProps) {
  return (
    <Card className={cn('w-full max-w-4xl mx-auto shadow-sm py-0', className)}>
      <CardContent className="px-3 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <div key={metric.title} className="flex flex-col">
              <div className="flex items-center justify-between mb-0">
                <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
                <Badge
                  className={cn(
                    'text-xs font-medium rounded-full px-1 py-0.5',
                    getBadgeVariant(metric.status)
                  )}
                >
                  {getStatusLabel(metric.status)}
                </Badge>
              </div>
              <div className="h-11 w-full flex">
                <div className="flex-1/5">
                  <div className="text-3xl font-bold mb-0">{metric.score}</div>
                </div>
                <div className="flex-4/5">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metric.trend}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                      <XAxis
                          dataKey="timestamp"
                          hide
                          domain={['dataMin', 'dataMax']}
                      />
                      <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                      <Tooltip
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.375rem',
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.5rem',
                          }}
                          formatter={(value) => [value, 'Score']}
                          labelFormatter={() => ''}
                      />
                      <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 4, stroke: '#3b82f6', strokeWidth: 2, fill: '#fff' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
