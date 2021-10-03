import { StyleRules } from '@material-ui/core/styles/withStyles';
import { InputLabelClassKey } from '@material-ui/core/InputLabel';

const MuiInputLabel: Partial<StyleRules<InputLabelClassKey, {}>> = {
  shrink: {
    top: '-10px'
  }
};

export default MuiInputLabel;
