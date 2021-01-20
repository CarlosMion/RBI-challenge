import { build, sequence } from '@jackfranklin/test-data-bot';

import { SectionItemType } from '../../../types';




const sectionBuilder1 = build<SectionItemType>({
  fields: {
    carouselImage: {
      asset: { _ref: 'ref01', _type: 'image' },
      _type: 'image',
    },
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
      _id: 'ref01'
  },
});

const sectionBuilder2 = build<SectionItemType>({
  fields: {
    carouselImage: {
      asset: { _ref: 'ref01', _type: 'image' },
      _type: 'image',
    },
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
      _id: 'ref02'
  },
});

const sectionBuilder3 = build<SectionItemType>({
  fields: {
    carouselImage: {
      asset: { _ref: 'ref01', _type: 'image' },
      _type: 'image',
    },
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
        en: 'SectionName3',
        es: '',
        fr: '',
        _type: 'SectionName3',
      },
      options: [{
        _key: 'key01',
        _ref: 'itemRef01',
        _type: 'type',
      },
      {
        _key: 'key02',
        _ref: 'itemRef02',
        _type: 'type',
      },
      {
        _key: 'key03',
        _ref: 'itemRef03',
        _type: 'type',
      },
    ],
      _id: 'ref03'
  },
});

export const sections = [sectionBuilder1(), sectionBuilder2(), sectionBuilder3()];
