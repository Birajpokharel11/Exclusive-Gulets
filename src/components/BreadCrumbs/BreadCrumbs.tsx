import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: { position: 'relative', top: '100px', left: '50px' },
    breadCrumbs: { fontWeight: 400 }
  })
);

export default function BreadCrumbs() {
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link color="secondary" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link
        color="secondary"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        Core
      </Link>
      <Typography
        color="secondary"
        className={clsx({
          [classes.breadCrumbs]: true
        })}
      >
        Breadcrumb
      </Typography>
      <IconButton></IconButton>
    </Breadcrumbs>
  );
}
