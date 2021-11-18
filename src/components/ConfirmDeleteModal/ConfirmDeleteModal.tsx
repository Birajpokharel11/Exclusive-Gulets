/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  CircularProgress
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  bluebutton: {
    background: '#FB4E4E',
    color: '#ffffff',
    width: '8rem',
    '&:hover': {
      backgroundColor: '#FB4E4E',
      boxShadow: 'none'
    }
  },
  cancel: {
    border: '1px solid #0AB5FE',
    borderRadius: '4px',
    width: '8rem',
    height: '2.5rem',
    textTransform: 'capitalize',
    color: '#0AB5FE',
    fontSize: '1rem'
  }
}));

const ConfirmDelete = ({
  handleClose,
  open,
  deleteDataHandler,
  isDeleting
}) => {
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xs">
      <div style={{ padding: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item container>
            <DialogTitle style={{ cursor: 'move' }} disableTypography>
              Confirm
            </DialogTitle>
          </Grid>
          <Grid item container>
            <DialogTitle style={{ fontSize: '18px' }} disableTypography>
              Are you sure you want to delete?
            </DialogTitle>
          </Grid>

          <Grid item container spacing={3}>
            <Grid item>
              <Button
                data-cy="Confirm_Delete"
                variant="contained"
                onClick={deleteDataHandler}
                className={classes.bluebutton}
              >
                {isDeleting ? <CircularProgress size={20} /> : 'Yes'}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

ConfirmDelete.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  deleteDepartmentHandler: PropTypes.func,
  isDeleting: PropTypes.bool
};

export default ConfirmDelete;
