import authenticated from '@/access/authenticated'
import { CollectionConfig } from 'payload'

const Notifications: CollectionConfig = {
  slug: 'notifications',
  access: {
    read: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'message', 'time'],
    useAsTitle: 'title',
  },
  fields: [
    {
        name: 'title',
        type: 'select',
        required: true,
        label: 'Title',
        options: [
            { label: 'Rider', value: 'rider' },
            { label: 'Driver', value: 'driver' },
            { label: 'Support ticket', value: 'support_ticket' },
            { label: 'Telemedicine', value: 'telemedicine' },
            { label: 'Other', value: 'other' },
        ],
    },
    {
      name: 'message',
      type: 'richText',
      required: true,
      label: 'Message',
    },
    {
      name: 'time',
      type: 'text',
      required: true,
      label: 'Time',
    },
  ],
}

export default Notifications
