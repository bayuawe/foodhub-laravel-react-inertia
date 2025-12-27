import { Head, Link } from '@inertiajs/react';
import { Utensils, ChefHat, TrendingUp, ShieldCheck, ArrowRight, Star } from 'lucide-react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome to FoodHub" />
            <div className="min-h-screen bg-white">
                {/* Navbar */}
                <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16 items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                                    <Utensils className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold text-foreground tracking-tight">FoodHub</span>
                            </div>
                            <div className="flex items-center gap-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-button font-medium transition-all duration-200 shadow-lg shadow-primary/25"
                                    >
                                        Go to Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-foreground hover:text-primary font-medium transition-colors"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-button font-medium transition-all duration-200 shadow-lg shadow-primary/25"
                                        >
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal/10 text-primary text-sm font-medium mb-6">
                                <Star className="w-4 h-4 fill-primary" />
                                <span>Trusted by 500+ Restaurants</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6 leading-tight">
                                Manage Your Kitchen <br />
                                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-teal">Like a Pro</span>
                            </h1>
                            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                                Streamline orders, track performance, and manage your team simply and efficiently. The all-in-one platform for modern restaurant management.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href={route('register')}
                                    className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-button font-bold text-lg transition-all duration-200 shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                                >
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="#features"
                                    className="w-full sm:w-auto px-8 py-4 rounded-button font-bold text-lg text-foreground hover:bg-gray-50 border border-gray-200 transition-all duration-200"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Background Element */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 pointer-events-none">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-peach/30 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-teal/20 rounded-full blur-3xl"></div>
                    </div>
                </div>

                {/* Features Section */}
                <div id="features" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Everything You Need</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Powerful tools designed to help you run your restaurant business smoothly and profitably.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white p-8 rounded-card shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-accent-teal/20 rounded-xl flex items-center justify-center mb-6">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Real-time Analytics</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Track revenue, orders, and top-selling items in real-time. Make data-driven decisions to grow your business.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-8 rounded-card shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-accent-peach/20 rounded-xl flex items-center justify-center mb-6">
                                    <ChefHat className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Kitchen Management</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Manage chefs, recipes, and inventory effortlessly. Keep your kitchen running like a well-oiled machine.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-8 rounded-card shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">Role-Based Access</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Secure your data with granular permissions. Assign roles to staff members to control what they can see and do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <Utensils className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-foreground">FoodHub</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} FoodHub. All rights reserved. Laravel v{laravelVersion} (PHP v{phpVersion})
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
