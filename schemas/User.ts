import { text, password, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const User = list({
  fields: {
    name: text({ isRequired: true, isUnique: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
  },
});
