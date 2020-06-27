export enum FontSizes {
  h1 = '48px',
  h2 = '36px',
  h3 = '24px',
  largest = '48px',
  larger = '36px',
  large = '24px',
  default = '18px',
  small = '16px',
  smallest = '12px'
}

export enum Colors {
  PRIMARY_COLOR = '#5e74ff',
  SKELETON_COLOR = '#ECEFFF',
  GRAY = '#EAEDED',
  BLACK = '#212121',
  WHILE = '#ffffff'
}

export enum TextColors {
  PRIMARY_COLOR = '#5e74ff',
  GRAY = '#7A7A7A',
  BLACK = '#212121',
  WHILE = '#ffffff'
}

export const spacing = ['4px', '8px', '16px', '24px', '32px', '40px', '60px'];

export enum ConSizes {
  LARGEST = '68px',
  LARGER = '48px',
  LARGE = '32px',
  DEFAULT = '24px',
  SMALL = '18px',
  SMALLER = '16px'
}

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
  SMALL = '152px'
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
