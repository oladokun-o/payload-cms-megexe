import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: './uploads',
    mimeTypes: ['image/*'],
  },
  admin: {
    description: 'Upload and manage media files.',
    useAsTitle: 'filename',
  },
  fields: [],
}
