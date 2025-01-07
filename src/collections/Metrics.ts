import { CollectionConfig } from 'payload';

const Metrics: CollectionConfig = {
  slug: 'metrics',
  labels: {
    singular: 'Metric',
    plural: 'Metrics',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'select',
      label: 'Metric Title',
      required: true,
      admin: {
        description: 'The title of the metric (e.g., Total Rider, Total Doctor).',
      },
      options: [
        { label: 'Total Rider', value: 'Total Rider' },
        { label: 'Total Doctor', value: 'Total Doctor' },
        { label: 'Total Vendor', value: 'Total Vendor' },
        { label: 'Total Client', value: 'Total Client' },
        { label: 'Total Ambulance', value: 'Total Ambulance' },
      ],
    },
    {
      name: 'total',
      type: 'number',
      label: 'Total Count',
      required: true,
      admin: {
        description: 'The total number for this metric (e.g., 12,426).',
      },
    },
    {
      name: 'change',
      type: 'text',
      label: 'Percentage Change',
      required: false,
      admin: {
        description: 'The percentage change for this metric (e.g., +36%).',
      },
    },
  ],
};

export default Metrics;
