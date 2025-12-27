import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Utensils, ChefHat } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {/* Logo */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                        <Utensils className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-foreground text-2xl font-bold">FoodHub</h1>
                        <p className="text-foreground text-sm font-normal">Chef Portal</p>
                    </div>
                </div>
            </div>

            {/* Login Card */}
            <div className="bg-white border border-border rounded-card p-8 shadow-lg">
                {/* Chef Icon */}
                <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-accent-peach rounded-full flex items-center justify-center mx-auto mb-4">
                        <ChefHat className="w-10 h-10 text-foreground" />
                    </div>
                    <h2 className="text-foreground text-2xl font-bold mb-2">Chef Login</h2>
                    <p className="text-gray-500 text-sm">Access your kitchen dashboard</p>
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form className="space-y-6" onSubmit={submit}>
                    <div>
                        <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">Email Address</label>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="chef@restaurant.com"
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-foreground text-sm font-medium mb-2">Password</label>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Enter your password"
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-primary hover:text-primary-hover cursor-pointer"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 px-4 rounded-button font-medium hover:bg-primary-hover transition-all duration-200 cursor-pointer disabled:opacity-50"
                        disabled={processing}
                    >
                        Sign In to Kitchen
                    </button>

                    <div className="mt-4 text-center">
                        <Link
                            href={route('register')}
                            className="text-sm text-gray-600 hover:text-primary"
                        >
                            Don't have an account? Register
                        </Link>
                    </div>
                </form>

                {/* Additional Links */}
                <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        Need help?
                        <a href="#" className="text-primary hover:text-primary-hover cursor-pointer ml-1">Contact Support</a>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
