import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
    Colors: {
      PRIMARY_COLOR: string;
      SKELETON_COLOR: string;
      GRAY: string;
      BLACK: string;
      WHILE: string;
    };
    TextColors: {
      PRIMARY_COLOR: string;
      GRAY: string;
      BLACK: string;
      WHILE: string;
    };
    FontSizes: {
      H1: string;
      H2: string;
      H3: string;
      LARGEST: string;
      LARGER: string;
      LARGE: string;
      DEFAULT: string;
      SMALL: string;
      SMALLEST: string;
    };
    spacing: {
      [name in 0 | 1 | 2 | 3 | 4 | 5 | 6]: string;
    };
    IconSizes: {
      LARGEST: string;
      LARGER: string;
      LARGE: string;
      DEFAULT: string;
      SMALL: string;
      SMALLER: string;
    };
    ImgSizes: {
      LARGE: string;
      DEFAULT: string;
      SMALL: string;
    };
  }
}
