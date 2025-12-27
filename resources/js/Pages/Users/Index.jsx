import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Search, ChevronDown, Download, UserPlus, Trash2, Edit } from 'lucide-react';
import Card from '@/Components/Card';
import Button from '@/Components/Button';
import Badge from '@/Components/Badge';
import Pagination from '@/Components/Pagination';
import Dropdown from '@/Components/Dropdown';
import ConfirmationModal from '@/Components/ConfirmationModal';
import { useState } from 'react';
import { debounce } from 'lodash';

export default function Index({ auth, users }) {
    const [search, setSearch] = useState(new URLSearchParams(window.location.search).get('search') || '');
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const handleSearch = debounce((query) => {
        router.get(route('users.index'), { search: query }, { preserveState: true, replace: true });
    }, 300);

    const confirmUserDeletion = (user) => {
        setUserToDelete(user);
        setConfirmingUserDeletion(true);
    };

    const deleteUser = () => {
        router.delete(route('users.destroy', userToDelete.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => closeModal(), // Close modal on error too for now, or handle differently
            onFinish: () => closeModal(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        setUserToDelete(null);
    };

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
                <div>
                    <h1 className="text-foreground text-2xl md:text-3xl font-bold mb-1">Users</h1>
                    <p className="text-gray-500 text-sm md:text-base">Manage system users and their roles</p>
                </div>
                <div className="flex items-center gap-2 md:gap-3 ml-auto md:ml-0">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <Button variant="secondary" size="md">
                                <Download className="w-4 h-4 mr-2" />
                                Export
                            </Button>
                        </Dropdown.Trigger>

                        <Dropdown.Content width="48" align="right">
                            <a
                                href={route('users.export', { search: search, format: 'csv' })}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                                Export to CSV
                            </a>
                            <a
                                href={route('users.export', { search: search, format: 'xlsx' })}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                                Export to Excel
                            </a>
                            <a
                                href={route('users.export', { search: search, format: 'pdf' })}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                                Export to PDF
                            </a>
                        </Dropdown.Content>
                    </Dropdown>
                    <Link href={route('users.create')}>
                        <Button variant="primary" size="md">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Add User
                        </Button>
                    </Link>
                </div>
            </div>

            {/* User Statistics (Optional - can be added later) */}

            {/* Search & Filter Bar */}
            <div className="bg-muted rounded-card pt-5 px-3 pb-3 mb-6">
                <Card className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        {/* Search Input */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={search}
                                onChange={onSearchChange}
                                className="w-full pl-10 pr-4 py-2.5 border border-border rounded-button text-sm focus:outline-none focus:border-primary focus:ring-primary transition-all duration-200"
                            />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Users Table (Desktop) */}
            <div className="hidden md:block">
                <div className="bg-muted rounded-card pt-5 px-3 pb-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4 px-3">
                        <h3 className="text-foreground text-lg font-bold">System Users</h3>
                        <span className="text-gray-500 text-sm">Showing {users.from} to {users.to} of {users.total} users</span>
                    </div>
                    <Card className="overflow-hidden">
                        <table className="w-full table-fixed">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase w-[40%]">Name</th>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Email</th>
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Created At</th>
                                    <th className="px-4 py-4 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {users.data.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 font-bold shrink-0">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="font-medium text-foreground truncate">{user.name}</p>
                                                    <p className="text-gray-500 text-sm truncate">User ID: {user.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 truncate text-gray-600">{user.email}</td>
                                        <td className="px-4 py-4 text-gray-600">
                                            {new Date(user.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={route('users.edit', user.id)}>
                                                    <Button variant="secondary" size="sm">Edit</Button>
                                                </Link>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => confirmUserDeletion(user)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>

            {/* Users Cards (Mobile) */}
            <div className="md:hidden space-y-3">
                {users.data.map((user) => (
                    <Card key={user.id} className="p-4 border border-gray-100 rounded-2xl">
                        <div className="flex items-center gap-3 mb-3 min-w-0">
                            <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 font-bold shrink-0">
                                {user.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground font-semibold truncate">{user.name}</h4>
                                <p className="text-gray-500 text-sm truncate">{user.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 pt-3 border-t border-gray-100">
                            <Link href={route('users.edit', user.id)} className="flex-1">
                                <Button variant="secondary" size="sm" className="w-full">Edit</Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 px-3 pb-4">
                <div className="text-sm text-gray-600">
                    Showing {users.from} to {users.to} of {users.total} entries
                </div>
                <Pagination links={users.links} />
            </div>

            <ConfirmationModal
                show={confirmingUserDeletion}
                onClose={closeModal}
                onConfirm={deleteUser}
                title="Delete User"
                message={`Are you sure you want to delete ${userToDelete?.name}? This action cannot be undone.`}
                confirmText="Delete User"
            />
        </AuthenticatedLayout >
    );
}
