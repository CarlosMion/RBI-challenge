/* System types */
export type Colors = {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  red: string;
  iron: string;
  mustard: string;
  mustardDisabled: string;
  shadow: string;
  silverDark: string;
  silverDarkHover: string;
  cloud: string;
  white: string;
  whiteHover: string;
  };
  
  export type Sizes = {
    small: number;
    medium: number;
    large: number;
    xLarge: number;
  };
  
  export type Fonts = {
    insaniBurguer: string;
  };
  
  export type FontWeights = {
    regular: number;
    bold: number;
  };
  

/* API types */
export type ResponseInfoType = {
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}

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

export type MenuType = {
    name: ItemNameType;
    options: Array<MenuItemOptionsType>;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

export type MenuResponseType = ResponseInfoType & {
    responseData: MenuType;
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

export type SectionsResponseType = ResponseInfoType & {
    responseData: Array<SectionItemType>
}