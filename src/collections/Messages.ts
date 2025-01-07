import authenticated from '@/access/authenticated'
import { CollectionConfig } from 'payload'

const Messages: CollectionConfig = {
  slug: 'messages',
  access: {
    read: authenticated,
  },
  admin: {
    defaultColumns: ['user_name', 'message', 'time', 'online', 'number_of_messages'],
    useAsTitle: 'user_name',
  },
  fields: [
    {
      name: 'user_name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'user_abbreviation',
      type: 'text',
      required: true,
      label: 'Abbreviation',
    },
    {
      name: 'user_abbreviation_color',
      label: 'Abbreviation Color',
      type: 'group',
      fields: [
        {
          name: 'primary',
          type: 'text',
          required: true,
        },
        {
          name: 'accent',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'message',
      type: 'richText',
      required: true,
    },
    {
      name: 'time',
      type: 'text',
      required: true,
    },
    {
      name: 'number_of_messages',
      type: 'number',
      required: false,
      label: 'Number of Messages',
    },
    {
      name: 'online',
      type: 'checkbox',
      defaultValue: false,
      label: 'Online Status',
    },
  ],
}

export default Messages
