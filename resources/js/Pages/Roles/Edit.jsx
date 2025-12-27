import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Card from '@/Components/Card';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import { ArrowLeft } from 'lucide-react';

export default function Edit({ auth, role, permissions }) {
    const { data, setData, put, processing, errors } = useForm({
        name: role.name,
        permissions: role.permissions.map(p => p.name),
    });

    const handlePermissionChange = (permissionName) => {
        const currentPermissions = [...data.permissions];
        if (currentPermissions.includes(permissionName)) {
            setData('permissions', currentPermissions.filter(p => p !== permissionName));
        } else {
            setData('permissions', [...currentPermissions, permissionName]);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('roles.update', role.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Role</h2>}
        >
            <Head title="Edit Role" />

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-2 mb-1">
                    <Link href={route('roles.index')}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div className='flex flex-col'>
                        <h1 className="text-foreground text-2xl md:text-3xl font-bold">Edit Role</h1>
                        <p className="text-gray-500 text-sm md:text-base">Update role and manage permissions</p>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto">
                <Card className="p-6">
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Role Name" />
                            <TextInput
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                isFocused
                                autoComplete="role-name"
                            />
                            <InputError className="mt-2" message={errors.name} />
                        </div>

                        <div>
                            <InputLabel value="Permissions" className="mb-2" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-border rounded-card p-4">
                                {permissions.map((permission) => (
                                    <label key={permission.id} className="flex items-center space-x-2 cursor-pointer">
                                        <Checkbox
                                            checked={data.permissions.includes(permission.name)}
                                            onChange={() => handlePermissionChange(permission.name)}
                                        />
                                        <span className="text-sm text-gray-700 capitalize">
                                            {permission.name.replace(/-/g, ' ')}
                                        </span>
                                    </label>
                                ))}
                                {permissions.length === 0 && (
                                    <p className="text-sm text-gray-500 italic col-span-full">No permissions available to assign.</p>
                                )}
                            </div>
                            <InputError className="mt-2" message={errors.permissions} />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button variant="primary" size="md" disabled={processing}>
                                Update Role
                            </Button>
                            <Link href={route('roles.index')}>
                                <Button variant="secondary" size="md" type="button">
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </form>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
