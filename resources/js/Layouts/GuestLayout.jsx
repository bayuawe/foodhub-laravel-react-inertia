import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* LEFT SIDE - Kitchen Image */}
            <div className="hidden lg:flex lg:w-1/2 relative">
                <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1200&fit=crop"
                    alt="Professional kitchen"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">
                        Welcome to FoodHub Kitchen
                    </h2>
                    <p className="text-lg opacity-90">
                        Manage your culinary creations with ease
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE - Login Form */}
            <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    {children}

                    {/* Footer */}
                    <div className="text-center mt-8">
                        <p className="text-gray-400 text-xs">
                            © 2024 FoodHub. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
