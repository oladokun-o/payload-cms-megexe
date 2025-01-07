import authenticated from '@/access/authenticated'
import { isAdmin } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    // admin: isAdmin,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role', 'profilePicture'],
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      unique: true,
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Doctor', value: 'doctor' },
        { label: 'Vendor', value: 'vendor' },
        { label: 'Rider', value: 'rider' },
        { label: 'Client', value: 'client' },
      ],
      defaultValue: 'client',
      required: true,
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'profilePicture',
      label: 'Profile Picture',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload a profile picture for the user.',
      },
    },
  ],
  timestamps: true,
}
