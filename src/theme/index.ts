import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import overrides from './overrides';
import typography from './typography';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#091527'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  overrides,
  typography
});

export default theme;
