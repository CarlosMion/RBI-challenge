import { build, fake, sequence } from '@jackfranklin/test-data-bot';

import { MenuType } from '../../../types';

const menuBuilder = build<MenuType>({
  fields: {
    name: {
      en: 'MenuItemName',
      es: '',
      fr: '',
      _type: 'MenuItemName',
    },
    options: [{
      _key: 'key01',
      _ref: 'ref01',
      _type: 'type',
    },
    {
      _key: 'key02',
      _ref: 'ref02',
      _type: 'type',
    },
    {
      _key: 'key03',
      _ref: 'ref03',
      _type: 'type',
    },
  ],
    _createdAt: '',
    _id: '01',
    _rev: '',
    _type: 'menuItem',
    _updatedAt: '',
  },
});

export const menu = [menuBuilder()];
