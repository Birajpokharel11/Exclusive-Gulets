import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { Icon } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Checkout() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2021-08-18T21:11:54')
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        style={{
          color: 'white',
          fontSize: 18,
          padding: '10px 26px 10px 12px'
        }}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        InputProps={{
          disableUnderline: true,
          style: { color: 'white' }
        }}
        keyboardIcon={<KeyboardArrowDownIcon style={{ color: 'white' }} />}
      />
    </MuiPickersUtilsProvider>
  );
}
