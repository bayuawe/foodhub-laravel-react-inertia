import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { User, Shield, AlertTriangle } from 'lucide-react';
import Card from '@/Components/Card';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            {/* Page Header */}
            <div className="mb-6 md:mb-8">
                <h1 className="text-foreground text-2xl md:text-3xl font-bold mb-1">Profile Settings</h1>
                <p className="text-gray-500 text-sm md:text-base">Manage your account information, security, and preferences</p>
            </div>

            <div className="space-y-6">
                {/* Profile Information Card */}
                <Card>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-bold text-foreground">Profile Information</h2>
                    </div>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </Card>

                {/* Update Password Card */}
                <Card>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-accent-teal/10 rounded-full flex items-center justify-center">
                            <Shield className="w-5 h-5 text-accent-teal-dark" />
                        </div>
                        <h2 className="text-lg font-bold text-foreground">Update Password</h2>
                    </div>
                    <UpdatePasswordForm className="max-w-xl" />
                </Card>

                {/* Delete Account Card */}
                <Card>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-error" />
                        </div>
                        <h2 className="text-lg font-bold text-foreground">Delete Account</h2>
                    </div>
                    <DeleteUserForm className="max-w-xl" />
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
