export enum FontSizes {
  H1 = '48px',
  H2 = '36px',
  H3 = '24px',
  LARGEST = '48px',
  LARGER = '36px',
  LARGE = '24px',
  DEFAULT = '18px',
  SMALL = '16px',
  SMALLEST = '12px'
}

export enum Colors {
  PRIMARY_COLOR = '#076EFF',
  SKELETON_COLOR = '#ecefff',
  BORDER_COLOR = '#DBDBDB',
  GRAY = '#EAEDED',
  BLACK = '#212121',
  WHITE = '#ffffff',
  ADULT = '#ff7800'
}

export enum TextColors {
  PRIMARY_COLOR = '#076EFF',
  GRAY = '#7A7A7A',
  BLACK = '#212121',
  WHITE = '#ffffff'
}

export const spacing = ['4px', '8px', '16px', '24px', '32px', '40px', '60px'];

export enum IconSizes {
  LARGEST = '68px',
  LARGER = '48px',
  LARGE = '32px',
  DEFAULT = '24px',
  SMALL = '18px',
  SMALLER = '16px'
}

export enum ImgSizes {
  // square
  LARGE = '320px',
  DEFAULT = '236px',
  SMALL = '160px',
  SMALLER = '152px'
}

const theme = {
  Colors,
  TextColors,
  FontSizes,
  spacing,
  IconSizes,
  ImgSizes
};

export default theme;
