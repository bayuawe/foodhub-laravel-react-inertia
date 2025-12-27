import { Link } from '@inertiajs/react';

export default function Button({
    className = '',
    disabled,
    children,
    variant = 'primary',
    size = 'md',
    as = 'button',
    href,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-button cursor-pointer';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-hover border border-transparent',
        secondary: 'bg-white text-foreground border border-border hover:border-primary hover:text-primary',
        danger: 'bg-error text-white hover:bg-error-dark border border-transparent',
        ghost: 'bg-transparent text-gray-600 hover:text-primary hover:bg-gray-100 border border-transparent',
        link: 'bg-transparent text-primary underline hover:text-primary-hover border border-transparent p-0 h-auto',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
        icon: 'p-2',
    };

    const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

    if (as === 'link' || href) {
        return (
            <Link
                href={href}
                className={combinedClassName}
                disabled={disabled}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={combinedClassName}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
