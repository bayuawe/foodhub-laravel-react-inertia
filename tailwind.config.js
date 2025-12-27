import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: 'var(--color-primary)',
                'primary-hover': 'var(--color-primary-hover)',
                foreground: 'var(--color-foreground)',
                muted: 'var(--color-muted)',
                border: 'var(--color-border)',
                'accent-lime': 'var(--color-accent-lime)',
                'accent-teal': 'var(--color-accent-teal)',
                'accent-peach': 'var(--color-accent-peach)',
                success: 'var(--color-success)',
                'success-light': 'var(--color-success-light)',
                'success-dark': 'var(--color-success-dark)',
                error: 'var(--color-error)',
                'error-light': 'var(--color-error-light)',
                'error-lighter': 'var(--color-error-lighter)',
                'error-dark': 'var(--color-error-dark)',
                warning: 'var(--color-warning)',
                'warning-light': 'var(--color-warning-light)',
                'warning-dark': 'var(--color-warning-dark)',
                info: 'var(--color-info)',
                'info-light': 'var(--color-info-light)',
                'info-dark': 'var(--color-info-dark)',
                alert: 'var(--color-alert)',
                'alert-light': 'var(--color-alert-light)',
                'alert-dark': 'var(--color-alert-dark)',
                'gray-50': 'var(--color-gray-50)',
                'gray-100': 'var(--color-gray-100)',
                'gray-200': 'var(--color-gray-200)',
                'gray-500': 'var(--color-gray-500)',
                'gray-600': 'var(--color-gray-600)',
                'gray-700': 'var(--color-gray-700)',
            },
            borderRadius: {
                card: 'var(--radius-card)',
                button: 'var(--radius-button)',
                icon: 'var(--radius-icon)',
            }
        },
    },

    plugins: [forms],
};
