import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import Card from '@/Components/Card';
import Pagination from '@/Components/Pagination';
import Button from '@/Components/Button';
import Badge from '@/Components/Badge';
import ConfirmationModal from '@/Components/ConfirmationModal';
import { Plus, Trash2, Edit } from 'lucide-react';
import { useState } from 'react';

export default function Index({ auth, roles }) {
    const [confirmingRoleDeletion, setConfirmingRoleDeletion] = useState(false);
    const [roleToDelete, setRoleToDelete] = useState(null);

    const confirmRoleDeletion = (role) => {
        setRoleToDelete(role);
        setConfirmingRoleDeletion(true);
    };

    const deleteRole = () => {
        router.delete(route('roles.destroy', roleToDelete.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };

    const closeModal = () => {
        setConfirmingRoleDeletion(false);
        setRoleToDelete(null);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Roles & Permissions</h2>}
        >
            <Head title="Roles" />

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
                <div>
                    <h1 className="text-foreground text-2xl md:text-3xl font-bold mb-1">Roles</h1>
                    <p className="text-gray-500 text-sm md:text-base">Manage user roles and access permissions</p>
                </div>
                <div className="flex items-center gap-2 md:gap-3 ml-auto md:ml-0">
                    <Link href={route('roles.create')}>
                        <Button variant="primary" size="md">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Role
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Roles Table (Desktop) */}
            <div className="hidden md:block">
                <Card noPadding className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                                    <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {roles.data.map((role) => (
                                    <tr key={role.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 capitalize">{role.name}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {role.permissions.length > 0 ? (
                                                    role.permissions.map((permission) => (
                                                        <Badge key={permission.id} variant="info">
                                                            {permission.name}
                                                        </Badge>
                                                    ))
                                                ) : (
                                                    <span className="text-sm text-gray-400 italic">No permissions</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={route('roles.edit', role.id)}>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:text-primary-hover hover:bg-primary/5">
                                                        <Edit className="w-4 h-4" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-error hover:text-error-dark hover:bg-error/5"
                                                    onClick={() => confirmRoleDeletion(role)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
                <div className="mt-4">
                    <Pagination links={roles.links} />
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
                {roles.data.map((role) => (
                    <Card key={role.id} className="p-4">
                        <div className="flex items-start justify-between mb-3">
                            <div className="text-lg font-bold text-gray-900 capitalize">{role.name}</div>
                            <div className="flex gap-1">
                                <Link href={route('roles.edit', role.id)}>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                </Link>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-error"
                                    onClick={() => confirmRoleDeletion(role)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="border-t border-gray-100 pt-3">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Permissions</h4>
                            <div className="flex flex-wrap gap-1">
                                {role.permissions.length > 0 ? (
                                    role.permissions.map((permission) => (
                                        <Badge key={permission.id} variant="info">
                                            {permission.name}
                                        </Badge>
                                    ))
                                ) : (
                                    <span className="text-sm text-gray-400 italic">No permissions</span>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
                <div className="mt-4">
                    <Pagination links={roles.links} />
                </div>
            </div>

            <ConfirmationModal
                show={confirmingRoleDeletion}
                onClose={closeModal}
                onConfirm={deleteRole}
                title="Delete Role"
                message="Are you sure you want to delete this role? This action cannot be undone."
                confirmText="Delete Role"
            />
        </AuthenticatedLayout>
    );
}
