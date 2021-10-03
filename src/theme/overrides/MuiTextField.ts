import { StyleRules } from '@material-ui/core/styles/withStyles';
import { TextFieldClassKey } from '@material-ui/core/TextField';

const MuiTextField: Partial<StyleRules<TextFieldClassKey, {}>> = {
  root: {
    margin: '10px 0',
    background: '#FFFFFF',
    '& :focus': {
      background: '#FFFFFF'
    }
  }
};

export default MuiTextField;
