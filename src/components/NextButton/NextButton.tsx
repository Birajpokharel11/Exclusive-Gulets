import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff'
  },
  label: {
    color: '#2a398d'
  }
}));

interface Props {
  onClick: () => void;
  type: string;
  className?: string;
}

const ButtonChevron = ({ className, onClick, type }: Props) => {
  const classes = useStyles();

  const renderButton = () => {
    if (type === 'icon') {
      return (
        <IconButton onClick={onClick} className={clsx(classes.root, className)}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      );
    }

    if (type === 'button') {
      return (
        <Button
          color="secondary"
          endIcon={<ArrowForwardIosIcon />}
          onClick={onClick}
          classes={{
            label: classes.label
          }}
        >
          Next
        </Button>
      );
    }
  };

  return renderButton();
};

export default ButtonChevron;
