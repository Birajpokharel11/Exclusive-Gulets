import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Location from '@modules/icons/Location';

const useStyles = makeStyles((theme: Theme) => ({
  thumbItem: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 991px)': {
      alignSelf: 'center'
    }
  },
  active: {
    '& $itemBar': {
      '&:before': {
        backgroundColor: theme.palette.blue,
        opacity: 1,
        transition: ' all .3s linear',
        width: '100%'
      }
    },
    '& $title': {
      fontWeight: 500
    }
  },
  fulfilled: {
    '& $itemBar': {
      '&:before': {
        backgroundColor: theme.palette.blue,
        opacity: 1,
        transition: ' all .3s linear',
        width: '100%'
      }
    }
  },
  itemBar: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: '#fff',
    height: '8px',

    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    transition: 'all .3s ease',

    '@media (min-width: 992px)': {
      marginBottom: '15px'
    },

    '&:before, &:after': {
      content: "''",
      display: 'inline-block',
      height: '100%',
      borderRadius: 'inherit',
      backgroundColor: 'transparent',
      opacity: 0,
      transition: 'all .1s linear'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',

    '@media (max-width: 991px)': {
      display: 'none'
    }
  },
  title: {
    fontWeight: 300,
    fontSize: '18px',
    lineHeight: '22px',
    marginBottom: '8px'
  },
  location: {
    display: 'flex',
    flexDirection: 'row',

    '& svg': {
      marginRight: '5px'
    }
  }
}));

function getCountryStr(countryList, countryListLength) {
  return countryList.map((country, i) => {
    return countryListLength === i + 1
      ? `${country.name}`
      : `${country.name}, `;
  });
}

interface Props {
  item: any;
  onClick: () => void;
  active: boolean;
  fulfilled: boolean;
}

const CustomStepper: React.FC<Props> = ({
  item,
  onClick,
  active,
  fulfilled
}) => {
  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.thumbItem, {
        [classes.active]: active,
        [classes.fulfilled]: fulfilled
      })}
      onClick={onClick}
    >
      <Box className={classes.itemBar} />
      <Box className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          {item?.name}
        </Typography>

        <Box className={classes.location}>
          <Location style={{ width: 15, height: 20 }} />
          {item.ailing_countries.length &&
            item.ailing_countries.map((country, i) => (
              <>
                {i > 0 && ', '}

                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="p"
                  align="center"
                  style={{ display: ' inline-block' }}
                >
                  {country?.name}
                </Typography>
              </>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomStepper;
