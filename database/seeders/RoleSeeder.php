<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create Permissions
        $permissions = [
            'users-data',
            'users-create',
            'users-update',
            'users-destroy',
            'roles-data',
            'roles-create',
            'roles-update',
            'roles-destroy',
            'dashboard-access',
        ];

        foreach ($permissions as $permission) {
            \Spatie\Permission\Models\Permission::firstOrCreate(['name' => $permission]);
        }

        // Roles
        $superadmin = Role::firstOrCreate(['name' => 'superadmin']);
        $admin = Role::firstOrCreate(['name' => 'admin']);
        Role::firstOrCreate(['name' => 'user']);

        // Assign all permissions to superadmin
        $superadmin->syncPermissions($permissions);

        // Assign some permissions to admin
        $admin->syncPermissions(['users-data', 'dashboard-access']);
    }
}
