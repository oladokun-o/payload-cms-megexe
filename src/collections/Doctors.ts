import { CollectionConfig } from 'payload';

const Doctors: CollectionConfig = {
  slug: 'doctors',
  labels: {
    singular: 'Doctor',
    plural: 'Doctors',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Doctor Name',
      required: true,
    },
    {
      name: 'consultations',
      type: 'number',
      label: 'Number of Consultations',
      required: true,
      admin: {
        description: 'Total consultations handled by the doctor.',
      },
    },
    {
      name: 'specialization',
      type: 'select',
      label: 'Specialization',
      required: true,
      admin: {
        description: 'Doctor’s specialization (e.g., Generalist, Specialist).',
      },
        options: [
            { label: 'Generalist', value: 'generalist' },
            { label: 'Specialist', value: 'specialist' },
            { label: 'Surgeon', value: 'surgeon' },
            { label: 'Therapist', value: 'therapist' },
            { label: 'Psychologist', value: 'psychologist' },
            { label: 'Dentist', value: 'dentist' },
            { label: 'Veterinarian', value: 'veterinarian' },
            { label: 'Other', value: 'other' },
        ],
    },
  ],
};

export default Doctors;
