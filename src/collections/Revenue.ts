import authenticated from '@/access/authenticated';
import { CollectionConfig } from 'payload';

const Revenue: CollectionConfig = {
  slug: 'revenue',
  labels: {
    singular: 'Revenue',
    plural: 'Revenues',
  },
  admin: {
    useAsTitle: 'date',
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      label: 'Date',
      required: true,
      admin: {
        description: 'The date for which this revenue data applies.',
      },
    },
    {
      name: 'totalRevenue',
      type: 'number',
      label: 'Total Revenue',
      required: true,
      admin: {
        description: 'Total revenue generated (e.g., in USD).',
      },
    },
    {
      name: 'totalAppUsage',
      type: 'number',
      label: 'Total App Usage',
      required: true,
      admin: {
        description: 'The total number of app sessions or usage count.',
      },
    },
    {
      name: 'totalConsultations',
      type: 'number',
      label: 'Total Consultations',
      required: true,
      admin: {
        description: 'Total consultations completed.',
      },
    },
    {
      name: 'totalFunding',
      type: 'number',
      label: 'Total Funding',
      required: true,
      admin: {
        description: 'Total funding received (e.g., in USD).',
      },
    },
    {
      name: 'totalPayout',
      type: 'number',
      label: 'Total Payout',
      required: true,
      admin: {
        description: 'Total payouts made (e.g., in USD).',
      },
    },
  ],
  access: {
    read: authenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
};

export default Revenue;
