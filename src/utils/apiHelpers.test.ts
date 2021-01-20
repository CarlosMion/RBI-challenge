import { getMenuSectionInfo, getItemsToBeShown, getSectionItemsToBeShown } from './apiHelpers';

import { sections } from 'tests/factories/sections';
import { items } from 'tests/factories/items';
import { menu } from 'tests/factories/menu';
import { ItemType } from '../../types';

describe('apiHelpers', () => {
  it(`gets the correct section`, () => {
    const expectedValue = 'SectionName3';
    const result = getMenuSectionInfo('ref03', sections);

    expect(result?.name.en).toEqual(expectedValue);
  });

  it(`gets the items to be shown`, () => {
    const expectedValue = [items[0],items[1]];
    const result = getItemsToBeShown(sections[2], items);

    expect(result).toEqual(expectedValue);
  });

  it(`gets the sections to be shown`, () => {
    const expectedValue = sections.map((section) => ({
      description: section?.description,
      image: section?.image,
      name: section?.name,
      _id: section?._id
  } as ItemType));
    const result = getSectionItemsToBeShown(menu[0].options, sections);

    expect(result).toEqual(expectedValue);
  });

  
});
