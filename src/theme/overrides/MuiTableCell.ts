import { StyleRules } from '@material-ui/core/styles/withStyles';
import { TableCellClassKey } from '@material-ui/core/TableCell';

import palette from '../palette';
import typography from '../typography';

const MuiTableCell: Partial<StyleRules<TableCellClassKey, {}>> = {
  root: {
    ...typography.body1,
    borderBottom: `1px solid ${palette.divider}`
  }
};

export default MuiTableCell;
