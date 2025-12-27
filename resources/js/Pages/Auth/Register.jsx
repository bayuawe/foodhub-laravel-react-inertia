import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Utensils, ChefHat } from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

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

            {/* Register Card */}
            <div className="bg-white border border-border rounded-card p-8 shadow-lg">
                <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                        <ChefHat className="w-10 h-10 text-foreground" />
                    </div>
                    <h2 className="text-foreground text-2xl font-bold mb-2">Join Kitchen</h2>
                    <p className="text-gray-500 text-sm">Create your chef account</p>
                </div>

                <form className="space-y-6" onSubmit={submit}>
                    <div>
                        <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2">Name</label>
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            placeholder="Full Name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">Email Address</label>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
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
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            placeholder="Create password"
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div>
                        <label htmlFor="password_confirmation" className="block text-foreground text-sm font-medium mb-2">Confirm Password</label>
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="w-full px-4 py-3 border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 px-4 rounded-button font-medium hover:bg-primary-hover transition-all duration-200 cursor-pointer disabled:opacity-50"
                        disabled={processing}
                    >
                        Register
                    </button>

                    <div className="mt-4 text-center">
                        <Link
                            href={route('login')}
                            className="text-sm text-gray-600 hover:text-primary"
                        >
                            Already registered? Log in
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
