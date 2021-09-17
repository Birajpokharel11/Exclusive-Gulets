import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const palette: PaletteOptions = {
  primary: {
    main: '#091527'
  },
  secondary: {
    main: '#ffffff'
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  common: {
    white,
    black
  },
  text: {
    primary: '#2A398D',
    secondary: colors.blueGrey[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200]
};

export default palette;
