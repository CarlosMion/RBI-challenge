export type ItemNameType = {
    en: string;
    es: string;
    fr: string;
    _type: string;
};

export type MenuItemOptionsType = {
    _key: string;
    _ref: string;
    _type: string;
}

export type MenuItemType = {
    name: ItemNameType;
    options: Array<MenuItemOptionsType>;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

export type DescriptionLanguageItemChildrenType = {
    marks: Array<any>;
    text: string;
    _key: string;
    _type: string;
}

export type DescriptionLanguageItemType = {
children: Array<DescriptionLanguageItemChildrenType>
markDefs: Array<any>;
style: string;
_key: string;
_type: string;
}

export type DescriptionType = {
    en: Array<DescriptionLanguageItemType>;
    _type: string;
}

export type AssetType = {
    _ref: string;
    _type: string;
}

export type ItemImageType = {
    asset: AssetType;
    _type: string;
}

export type SectionItemType = {
    carouselImage: ItemImageType;
    description: DescriptionType;
    image: ItemImageType;
    name: ItemNameType;
    options: Array<MenuItemOptionsType>;
    _id: string;
}

export type ItemType = {
    description: DescriptionType;
    image: ItemImageType;
    name: ItemNameType;
    _createdAt: string;
    _id: string;
}