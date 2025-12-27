import { Link } from '@inertiajs/react';
import { ShieldAlert, AlertTriangle, FileQuestion, ArrowLeft } from 'lucide-react';

export default function Error({ status }) {
    const title = {
        503: '503: Service Unavailable',
        500: '500: Server Error',
        404: '404: Page Not Found',
        403: '403: Forbidden',
    }[status];

    const description = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }[status];

    const icon = {
        503: <AlertTriangle className="w-24 h-24 text-primary" />,
        500: <AlertTriangle className="w-24 h-24 text-red-500" />,
        404: <FileQuestion className="w-24 h-24 text-blue-500" />,
        403: <ShieldAlert className="w-24 h-24 text-orange-500" />,
    }[status];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-foreground p-4">
            <div className="bg-white p-8 rounded-card shadow-lg max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    {icon}
                </div>

                <h1 className="text-3xl font-bold mb-4 text-foreground">{title || 'Error'}</h1>
                <p className="text-gray-600 mb-8">{description}</p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-button hover:bg-[#276874]/90 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Go Home
                </Link>
            </div>
        </div>
    );
}
