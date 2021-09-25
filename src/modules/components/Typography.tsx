import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MuiTypography, { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stripped: {
      marginBottom: '45px',
      position: 'relative',
      display: 'inline-block',
      fontSize: '24px',
      [theme.breakpoints.up('md')]: {
        fontSize: '32px'
      },
      '&:after': {
        content: "''",
        position: 'absolute',
        display: 'block',
        left: 0,
        right: 0,
        bottom: '-16px',
        margin: '15px auto 0',
        width: '85%',
        height: '1px',
        background: 'radial-gradient(circle,#2a398d 0,rgba(245,240,228,0))'
      }
    }
  })
);

interface ExtraTypographyProps {
  marked?: boolean;
}

function Typography<C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }> & ExtraTypographyProps
) {
  const { stripped = false, children, ...rest } = props;

  const classes = useStyles();

  return (
    <MuiTypography
      {...rest}
      className={clsx(rest.className, {
        [classes.stripped]: stripped
      })}
    >
      {children}
    </MuiTypography>
  );
}

export default Typography;
