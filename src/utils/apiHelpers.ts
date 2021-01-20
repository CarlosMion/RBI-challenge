import { ItemType, MenuItemOptionsType, SectionItemType } from "../../types";


export const getMenuSectionInfo = (referenceToFind: string, sections: Array<SectionItemType>) => referenceToFind !== undefined ? 
 sections.find((section) => section._id === referenceToFind) : referenceToFind;

const sectionIncludes = (item: ItemType, options: Array<MenuItemOptionsType>) => 
options.find((option) => option._ref === item._id);
    

export const getItemsToBeShown = (currentSection: SectionItemType, items?: Array<ItemType>) => 
     items?.filter((item) => 
        !!sectionIncludes(item, currentSection.options)
    );

