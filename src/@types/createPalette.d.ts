import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    white: string;
    black: string;
    icon?: string;
    blue?: string;
    beige?: string;
  }

  interface PaletteOptions {
    white: string;
    black: string;
    icon?: string;
    blue?: string;
    beige?: string;
  }
}
