import { StyleRules } from '@material-ui/core/styles/withStyles';
import { TextFieldClassKey } from '@material-ui/core/TextField';

const MuiTextField: Partial<StyleRules<TextFieldClassKey, {}>> = {
  root: {
    background: '#FFFFFF',
    '& :focus': {
      background: '#FFFFFF'
    }
  }
};

export default MuiTextField;
