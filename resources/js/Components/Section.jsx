import Card from './Card';

export default function Section({ title, children, action, className = '' }) {
    return (
        <div className={`bg-muted rounded-card pt-5 px-3 pb-3 ${className}`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4 px-3">
                <h3 className="text-foreground text-lg font-bold">{title}</h3>
                {action && (
                    <div className="text-sm">
                        {action}
                    </div>
                )}
            </div>
            <Card>
                {children}
            </Card>
        </div>
    );
}
