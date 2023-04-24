import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption2?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    caption2?: React.CSSProperties;
  }
  interface Palette {
    icon: Palette['primary'];
    textColor: Palette['primary'];
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    icon?: PaletteOptions['primary'];
    textColor?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    icon1?: string;
    icon2?: string;
    stroke?: string;
    primary100?: string;
    primary300?: string;
    primary400?: string;
    primary700?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    blue?: string;
    lightBlue?: string;
    green?: string;
    lightGreen?: string;
    yellow?: string;
    lightYellow?: string;
    red?: string;
    lightRed?: string;
  }
  interface SimplePaletteColorOptions {
    icon1?: string;
    icon2?: string;
    stroke?: string;
    primary100?: string;
    primary300?: string;
    primary400?: string;
    primary700?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    blue?: string;
    lightBlue?: string;
    green?: string;
    lightGreen?: string;
    yellow?: string;
    lightYellow?: string;
    red?: string;
    lightRed?: string;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption2: true;
  }
}
export const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
    h1: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '30px',
    },
    h2: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '28px',
    },
    subtitle1: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
    },
    body1: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
    },
    body2: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
    },
    caption: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '18px',
    },
    caption2: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
  palette: {
    icon: {
      main: '#FFFFFF',
      stroke: '#E5E7ED',
      icon1: '#696A6E',
      icon2: '#3E414D',
    },
    primary: {
      main: '#224DFF',
      primary100: '#F7F8FA',
      primary300: '#EFF2FF',
      primary400: '#95AAFF',
      primary700: '#1132B7',
    },
    textColor: {
      main: '#FFFFFF',
      lowEmphasis: '#818287',
      mediumEmphasis: '#696A6E',
      highEmphasis: '#2C2C2E',
    },
    accent: {
      main: '#224DFF',
      blue: '#3E5FE2',
      lightBlue: '#F2F4FC',
      green: '#17A076',
      lightGreen: '#F2FCFB',
      yellow: '#A08817',
      lightYellow: '#FAF8EB',
      lightRed: '#FCE5EA',
      red: '#994D5B',
    },
  },
});
