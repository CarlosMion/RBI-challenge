import { SectionItemType } from "../../types";


export const getMenuSectionInfo = (referenceToFind: string, sections: Array<SectionItemType>) =>
 sections.find((section) => section._id === referenceToFind);
