/**
 * Represents a single metric data point
 */
export interface MetricDataPoint {
  value: number;
  timestamp: number;
}

/**
 * Represents a single metric item in the metrics card
 */
export interface MetricItem {
  title: string;
  score: number;
  status: 'good' | 'okay' | 'poor';
  trend: MetricDataPoint[];
}

/**
 * Props for the MetricsCard component
 */
export interface MetricsCardProps {
  metrics: MetricItem[];
  className?: string;
}
