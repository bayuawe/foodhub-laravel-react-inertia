import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from './Card';

export default function MetricCard({
    title,
    value,
    trend,
    trendColor = 'text-green-600',
    icon: Icon,
    iconBgColor = 'bg-primary/10'
}) {
    return (
        <div className="bg-muted rounded-card pt-5 px-3 pb-3">
            <h3 className="text-foreground text-lg font-bold ml-3 mb-4">{title}</h3>
            <Card>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-foreground text-4xl font-extrabold mb-1">{value}</p>
                        <p className={`${trendColor} text-sm font-medium flex items-center gap-1`}>
                            {trend}
                        </p>
                    </div>
                    {Icon && (
                        <div className={`w-16 h-16 ${iconBgColor} rounded-icon flex items-center justify-center`}>
                            <Icon className="w-7 h-7 text-foreground" />
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
