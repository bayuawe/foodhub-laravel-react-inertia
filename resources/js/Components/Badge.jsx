export default function Badge({ children, variant = 'default', className = '' }) {
    const variants = {
        default: 'bg-gray-100 text-gray-800',
        success: 'bg-success-light text-success-dark',
        info: 'bg-info-light text-info-dark',
        warning: 'bg-warning-light text-warning-dark',
        error: 'bg-error-light text-error-dark',
        alert: 'bg-alert-light text-alert-dark',
    };

    const variantClass = variants[variant] || variants.default;

    return (
        <span className={`${variantClass} text-xs font-medium px-2 py-1 rounded-full ${className}`}>
            {children}
        </span>
    );
}
