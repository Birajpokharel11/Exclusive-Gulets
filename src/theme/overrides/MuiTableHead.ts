import { StyleRules } from '@material-ui/core/styles/withStyles';
import { TableHeadClassKey } from '@material-ui/core/TableHead';
import { colors } from '@material-ui/core';

const MuiTableHead: Partial<StyleRules<TableHeadClassKey, {}>> = {
  root: {
    backgroundColor: colors.grey[50]
  }
};

export default MuiTableHead;
