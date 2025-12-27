import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar';
import { Menu } from 'lucide-react';

export default function AuthenticatedLayout({ header, children }) {
    const { user, permissions } = usePage().props.auth;
    const { appName } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white flex">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* SIDEBAR */}
            <Sidebar
                user={user}
                permissions={permissions}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* MAIN CONTENT */}
            <main className="flex-1 lg:ml-64 p-4 md:p-5 bg-white min-h-screen overflow-x-hidden w-full">
                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between mb-6 bg-muted rounded-card p-4">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-all duration-200"
                    >
                        <Menu className="w-6 h-6 text-foreground" />
                    </button>
                    <h1 className="text-foreground text-lg font-bold uppercase">{appName}</h1>
                    <div className="w-10"></div>
                </div>

                {children}
            </main>
        </div>
    );
}
