import { build, sequence } from '@jackfranklin/test-data-bot';

import { ItemType } from '../../../types';

const itemBuilder1 = build<ItemType>({
  fields: {
    description: {
      en: [
        {
          children: [
            {
              marks: [],
              text: 'childrenText',
              _key: 'childrenKey01',
              _type: 'children',
            },
          ],
          markDefs: [],
          style: '',
          _key: 'key01',
          _type: 'itemDesc',
        },
      ],
      _type: 'item',
    },
    image: {
      asset: { _ref: 'ref01', _type: 'image' },
      _type: 'image',
    },
    name: {
      en: 'ItemName',
      es: '',
      fr: '',
      _type: 'ItemName',
    },
    _createdAt: '',
    _id: 'itemRef01',
  },
});

export const itemBuilder2 = build<ItemType>({
  fields: {
    description: {
      en: [
        {
          children: [
            {
              marks: [],
              text: 'childrenText',
              _key: 'childrenKey01',
              _type: 'children',
            },
          ],
          markDefs: [],
          style: '',
          _key: 'key01',
          _type: 'itemDesc',
        },
      ],
      _type: 'item',
    },
    image: {
      asset: { _ref: 'ref01', _type: 'image' },
      _type: 'image',
    },
    name: {
      en: 'ItemName',
      es: '',
      fr: '',
      _type: 'ItemName',
    },
    _createdAt: '',
    _id: 'itemRef02',
  },
});

export const itemBuilder3 = build<ItemType>({
  fields: {
    description: {
      en: [
        {
          children: [
            {
              marks: [],
              text: 'childrenText',
              _key: 'childrenKey01',
              _type: 'children',
            },
          ],
          markDefs: [],
          style: '',
          _key: 'key01',
          _type: 'itemDesc',
        },
      ],
      _type: 'item',
    },
    image: {
      asset: { _ref: 'ref01', _type: 'image' },
      _type: 'image',
    },
    name: {
      en: 'ItemName',
      es: '',
      fr: '',
      _type: 'ItemName',
    },
    _createdAt: '',
    _id: 'itemRef003',
  },
});

export const items = [itemBuilder1(),itemBuilder2(),itemBuilder3()];
