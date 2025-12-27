import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    // if (links.length <= 3) return null; // Don't show if there's only Previous, Next and 1 page (or less)

    return (
        <div className="flex flex-wrap items-center gap-2">
            {links.map((link, index) => (
                <div key={index}>
                    {link.url ? (
                        <Link
                            href={link.url}
                            className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${link.active
                                ? 'bg-primary text-white'
                                : 'border border-border hover:border-primary text-foreground'
                                }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            className="px-3 py-2 border border-border rounded-lg text-sm text-gray-400 cursor-not-allowed"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></span>
                    )}
                </div>
            ))}
        </div>
    );
}
