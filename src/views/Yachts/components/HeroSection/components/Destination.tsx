import React from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Hidden from '@material-ui/core/Hidden';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { menuProps } from '@utils/utils';
import { Form } from 'formik';
import { Person } from '@material-ui/icons';
import { useMediaQuery } from '@material-ui/core';
import DestinationDialouge from './DestinationDialouge';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'rgba(12, 22, 37, 0.6)',
      color: 'white',

      border: '1px solid rgba(255, 255, 255, 0.5)',
      boxSizing: 'border-box',
      borderRadius: '4px',
      '&:focus': {
        background: 'rgba(12, 22, 37, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxSizing: 'border-box',
        borderRadius: '4px'
      },
      '&.MuiOutlinedInput-inputMarginDense': {
        paddingTop: '14.5px',
        paddingBottom: '15px'
      }
    },
    Destinations: {
      width: '400px',
      [theme.breakpoints.down(1100)]: {
        width: '300px'
      },
      [theme.breakpoints.down('sm')]: {
        width: '167px'
      },
      [theme.breakpoints.down(768)]: {
        width: '647px'
      },
      [theme.breakpoints.down('xs')]: {
        width: '333px'
      },
      [theme.breakpoints.down(375)]: {
        width: '263px'
      }
    },
    label: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '14px',
      color: '#FFFFFF'
    },
    Button: {
      fontWeight: 'normal',
      fontSize: '16px',
      fontStyle: 'normal'
    }
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  ...menuProps,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
];

export default function MultipleSelect() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState<string[]>([]);

  ///
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  //
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };
  return (
    <>
      <Hidden mdDown>
        <FormControl variant="outlined" className={classes.Destinations}>
          <InputLabel style={{ color: 'white' }}>Destination</InputLabel>
          <Select
            variant="filled"
            fullWidth
            multiple
            classes={{
              root: classes.root
            }}
            MenuProps={MenuProps}
            onChange={handleChange}
            value={personName}
            renderValue={(selected) => (selected as string[]).join(', ')}
            placeholder="Select Destination"
            margin="dense"
            // IconComponent={() => (
            //   <ExpandMoreIcon style={{ color: 'white', cursor: 'pointer' }} />
            // )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Hidden>
      <Hidden smUp></Hidden>
    </>
  );
}
