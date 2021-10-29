import { forwardRef } from 'react';
import clsx from 'clsx';
import Router from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';

import MakeLink from '@components/MakeLink';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const CustomLink = forwardRef<HTMLDivElement>(function fwdLink(props, ref) {
  const { children, ...rest } = props;
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <MakeLink {...rest}>
        <div>{children}</div>
      </MakeLink>
    </div>
  );
});

const SidebarNav = (props) => {
  const { pages, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map((page, i) => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
          selected={
            process.browser ? Router.pathname.includes(page.href) : false
          }
        >
          <Button
            className={classes.button}
            component={CustomLink}
            href={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;
