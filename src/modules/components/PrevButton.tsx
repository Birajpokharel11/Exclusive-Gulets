import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
  },
  label: {
    color: '#2a398d'
  },
  icon: {
    fontSize: '1em',
    color: '#2a398d'
  }
}));

interface Props {
  onClick?: () => void;
  type: string;
  className?: string;
}

const ButtonChevron = ({ className, onClick, type }: Props) => {
  const classes = useStyles();

  const renderButton = () => {
    if (type === 'icon') {
      return (
        <IconButton onClick={onClick} className={clsx(classes.root, className)}>
          <ArrowBackIosIcon className={classes.icon} />
        </IconButton>
      );
    }

    if (type === 'button') {
      return (
        <Button
          color="secondary"
          startIcon={<ArrowBackIosIcon />}
          onClick={onClick}
          classes={{
            label: classes.label
          }}
        >
          Prev
        </Button>
      );
    }
  };

  return renderButton();
};

export default ButtonChevron;
