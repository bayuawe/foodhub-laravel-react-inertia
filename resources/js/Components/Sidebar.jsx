import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Utensils,
    X,
    Home,
    ShoppingBag,
    Store,
    ChefHat,
    Settings,
    Users,
    ChevronDown,
    ShieldCheck
} from 'lucide-react';
import Dropdown from '@/Components/Dropdown';

export default function Sidebar({ user, permissions, sidebarOpen, setSidebarOpen }) {
    const { appName } = usePage().props;
    const [foodMenuOpen, setFoodMenuOpen] = useState(false);

    return (
        <aside
            className={`w-64 bg-muted fixed inset-y-0 left-0 flex flex-col z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}
        >
            {/* Logo Section */}
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                            <Utensils className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-foreground text-lg font-bold uppercase">{appName}</h1>
                            <p className="text-foreground text-xs font-normal uppercase">{user?.roles?.[0] || 'User'} Dashboard</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-all duration-200"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-6 py-4 space-y-6 overflow-y-auto">
                <div>
                    <h3 className="text-foreground text-xs font-semibold uppercase tracking-wider mb-3">Main</h3>
                    <div className="space-y-1">
                        <Link href={route('dashboard')} className="group cursor-pointer block">
                            <div className={`flex items-center gap-2.5 px-4 py-3 rounded-card ${route().current('dashboard') ? 'bg-[#276874] text-white' : 'hover:bg-gray-100'}`}>
                                <Home className={`w-5 h-5 ${route().current('dashboard') ? 'text-white' : 'text-gray-600 group-hover:text-primary'}`} />
                                <span className={route().current('dashboard') ? 'text-white' : 'text-foreground group-hover:text-primary'}>
                                    Dashboard
                                </span>
                            </div>
                        </Link>

                        {/* Placeholder for future links */}
                        <a href="#" className="group cursor-pointer block">
                            <div className="flex items-center gap-2.5 px-4 py-3 rounded-card hover:bg-gray-100">
                                <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-primary" />
                                <span className="text-foreground group-hover:text-primary">Orders</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-foreground text-xs font-semibold uppercase tracking-wider mb-3">Management</h3>
                    <div className="space-y-1">
                        <div>
                            <button
                                onClick={() => setFoodMenuOpen(!foodMenuOpen)}
                                className="flex items-center justify-between w-full px-4 py-3 rounded-card hover:bg-gray-50 cursor-pointer transition-all duration-200 group"
                            >
                                <div className="flex items-center gap-2.5">
                                    <Utensils className="w-5 h-5 text-gray-600 group-hover:text-primary" />
                                    <span className="text-foreground group-hover:text-primary">Food Menu</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 text-gray-600 group-hover:text-primary transition-transform duration-200 ${foodMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {foodMenuOpen && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <a href="#" className="group cursor-pointer block">
                                        <div className="px-4 py-2 rounded-card hover:bg-gray-50">
                                            <span className="text-foreground text-sm group-hover:text-primary">All Items</span>
                                        </div>
                                    </a>
                                    <a href="#" className="group cursor-pointer block">
                                        <div className="px-4 py-2 rounded-card hover:bg-gray-50">
                                            <span className="text-foreground text-sm group-hover:text-primary">Add New Item</span>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="#" className="group cursor-pointer block">
                            <div className="flex items-center gap-2.5 px-4 py-3 rounded-card hover:bg-gray-100">
                                <Store className="w-5 h-5 text-gray-600 group-hover:text-primary" />
                                <span className="text-foreground group-hover:text-primary">Restaurants</span>
                            </div>
                        </a>
                        <a href="#" className="group cursor-pointer block">
                            <div className="flex items-center gap-2.5 px-4 py-3 rounded-card hover:bg-gray-100">
                                <ChefHat className="w-5 h-5 text-gray-600 group-hover:text-primary" />
                                <span className="text-foreground group-hover:text-primary">Chefs</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-foreground text-xs font-semibold uppercase tracking-wider mb-3">Settings</h3>
                    <div className="space-y-1">
                        <Link href={route('profile.edit')} className="group cursor-pointer block">
                            <div className="flex items-center gap-2.5 px-4 py-3 rounded-card hover:bg-gray-100">
                                <Settings className="w-5 h-5 text-gray-600 group-hover:text-primary" />
                                <span className="text-foreground group-hover:text-primary">Settings</span>
                            </div>
                        </Link>
                        {permissions.includes('roles-data') && (
                            <Link href={route('roles.index')} className="group cursor-pointer block">
                                <div className={`flex items-center gap-2.5 px-4 py-3 rounded-card ${route().current('roles.*') ? 'bg-[#276874] text-white' : 'hover:bg-gray-100'}`}>
                                    <ShieldCheck className={`w-5 h-5 ${route().current('roles.*') ? 'text-white' : 'text-gray-600 group-hover:text-primary'}`} />
                                    <span className={route().current('roles.*') ? 'text-white' : 'text-foreground group-hover:text-primary'}>
                                        Roles & Permissions
                                    </span>
                                </div>
                            </Link>
                        )}
                        {permissions.includes('users-data') && (
                            <Link href={route('users.index')} className="group cursor-pointer block">
                                <div className={`flex items-center gap-2.5 px-4 py-3 rounded-card ${route().current('users.index') ? 'bg-[#276874] text-white' : 'hover:bg-gray-100'}`}>
                                    <Users className={`w-5 h-5 ${route().current('users.index') ? 'text-white' : 'text-gray-600 group-hover:text-primary'}`} />
                                    <span className={route().current('users.index') ? 'text-white' : 'text-foreground group-hover:text-primary'}>
                                        Users
                                    </span>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* User Profile at Bottom */}
            <div className="px-6 pb-6 mt-auto">
                <Dropdown align="right" width="48">
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md w-full">
                            <button
                                type="button"
                                className="flex items-center gap-3 w-full p-2 -mx-2 rounded-card hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                                    alt="Admin User profile photo"
                                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div className="min-w-0 flex-1 text-left">
                                    <p className="text-foreground text-base font-semibold truncate">{user.name}</p>
                                    <p className="text-foreground text-sm font-normal truncate">{user.email}</p>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content align="left" direction="up" contentClasses="py-1 bg-white mb-2">
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </aside>
    );
}
