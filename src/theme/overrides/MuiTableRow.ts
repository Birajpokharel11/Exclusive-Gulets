import { StyleRules } from '@material-ui/core/styles/withStyles';
import { TableRowClassKey } from '@material-ui/core/TableRow';

import palette from '../palette';

const MuiTableRow: Partial<StyleRules<TableRowClassKey, {}>> = {
  root: {
    '&$selected': {
      backgroundColor: palette.background.default
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: palette.background.default
      }
    }
  }
};

export default MuiTableRow;
