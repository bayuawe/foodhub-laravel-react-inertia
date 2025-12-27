export default function Card({ children, className = '', noPadding = false }) {
    return (
        <div className={`bg-white shadow-lg border border-border sm:rounded-card ${noPadding ? '' : 'p-4 sm:p-5'} ${className}`}>
            {children}
        </div>
    );
}
