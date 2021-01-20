import { ItemType, MenuItemOptionsType, SectionItemType } from "../../types";


export const getMenuSectionInfo = (referenceToFind: string, sections?: Array<SectionItemType>) => referenceToFind !== undefined ? 
 sections?.find((section) => section._id === referenceToFind) : referenceToFind;

const sectionIncludes = (item: ItemType, options: Array<MenuItemOptionsType>) => 
options.find((option) => option._ref === item._id);
    

export const getItemsToBeShown = (currentSection: SectionItemType, items?: Array<ItemType>) => 
     items?.filter((item) => 
        !!sectionIncludes(item, currentSection.options)
    );

export const getSectionItemsToBeShown = (menuOptions?: Array<MenuItemOptionsType>, sections?: Array<SectionItemType>) => {
    
    const sectionsToBeShown = menuOptions?.map((menuOption) => getMenuSectionInfo(menuOption._ref, sections))
    
    const itemsToBeShown = sectionsToBeShown?.map((section) => ({
        description: section?.description,
        image: section?.image,
        name: section?.name,
        _id: section?._id
    } as ItemType));

    return itemsToBeShown;
}

