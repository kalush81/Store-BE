import { integer, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: { displayMode: 'textarea' },
    }),
    status: select({
      options: [
        { label: 'available', value: 'AVAILABLE' },
        { label: 'unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'AVAILABLE',
    }),
    price: integer(),
  },
});
