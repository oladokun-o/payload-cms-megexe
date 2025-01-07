import { CollectionConfig } from 'payload';

const Transactions: CollectionConfig = {
  slug: 'transactions',
  labels: {
    singular: 'Transaction',
    plural: 'Transactions',
  },
  admin: {
    useAsTitle: 'status',
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      label: 'Transaction Status',
      required: true,
      options: [
        { label: 'Completed', value: 'completed' },
        { label: 'Pending', value: 'pending' },
        { label: 'Canceled', value: 'canceled' },
      ],
    },
    {
      name: 'paymentMethod',
      type: 'text',
      label: 'Payment Method',
      required: true,
      admin: {
        description: 'Payment method description (e.g., Visa card ****4831).',
      },
    },
    {
      name: 'amount',
      type: 'number',
      label: 'Transaction Amount',
      required: true,
      admin: {
        description: 'Transaction amount in USD.',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      required: true,
      admin: {
        description: 'The category of the transaction (e.g., Consultation, Ecommerce).',
      },
        options: [
            { label: 'Consultation', value: 'consultation' },
            { label: 'Ecommerce', value: 'ecommerce' },
            { label: 'Subscription', value: 'subscription' },
            { label: 'Donation', value: 'donation' },
            { label: 'Refund', value: 'refund' },
            { label: 'Dr Withdrawal', value: 'dr_withdrawal' },
            { label: 'Other', value: 'other' },
        ],
    },
    {
      name: 'paymentType',
      type: 'select',
      label: 'Payment Type',
      required: true,
      admin: {
        description: 'Type of payment (e.g., Card payment, Bank payment).',
      },
        options: [
            { label: 'Card Payment', value: 'card_payment' },
            { label: 'Bank Payment', value: 'bank_payment' },
            { label: 'Wallet Payment', value: 'wallet_payment' },
            { label: 'Other', value: 'other' },
        ],
    },
    {
      name: 'date',
      type: 'date',
      label: 'Transaction Date',
      required: true,
    },
  ],
};

export default Transactions;
