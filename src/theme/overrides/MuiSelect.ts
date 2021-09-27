import { StyleRules } from '@material-ui/core/styles/withStyles';
import { SelectClassKey } from '@material-ui/core/Select';

const MuiSelect: Partial<StyleRules<SelectClassKey, {}>> = {
  root: {
    background: '#FFFFFF',
    '& :focus': {
      background: '#FFFFFF'
    }
  }
};

export default MuiSelect;
