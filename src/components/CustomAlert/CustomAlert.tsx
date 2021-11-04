import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import container from './CustomAlert.container';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
  alert?: any;
  onCloseAlert?: () => void;
}

const CustomAlert = ({
  alert: { openAlert, severity, message },
  onCloseAlert
}: Props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={openAlert}
      autoHideDuration={5000}
      onClose={onCloseAlert}
    >
      <Alert onClose={onCloseAlert} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default container(CustomAlert);
