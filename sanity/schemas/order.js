import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'userId',
      title: 'User ID',
      type: 'string',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'price', type: 'number', title: 'Price' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
          ],
        },
      ],
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    }),
    defineField({
      name: 'deliveryDate',
      title: 'Delivery Date',
      type: 'date',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['processing', 'shipped', 'delivered'],
      },
      initialValue: 'processing',
    }),
  ],
});