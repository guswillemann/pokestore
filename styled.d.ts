import 'styled-components';

declare module 'styled-components' {
  export interface ColorPallete {
    color: string;
    contrast: string;
  };
  
  export interface DefaultTheme {
    storeType: string;
    borderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundAlt: string;
      success: string;
      alert: string;
      danger: string;
    };
  };
};
