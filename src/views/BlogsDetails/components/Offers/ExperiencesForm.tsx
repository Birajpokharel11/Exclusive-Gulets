import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { menuProps } from '@utils/utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '6rem',
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem',
      '&:hover': { background: '#2A398D' }
    },
    textWidth: {
      width: '100%',
      background: 'white'
    }
  })
);

export default function ExperiencesFrom() {
  const classes = useStyles();
  return (
    <Box maxWidth="false">
      <Container maxWidth="md">
        <Typography variant="h3" color="textPrimary" align="center">
          Create your own experience
        </Typography>
      </Container>
      <Container>
        <div style={{ marginTop: '30px' }} />
        <Select
          id="select"
          value="title"
          variant="outlined"
          className={classes.textWidth}
          MenuProps={menuProps}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="ten">Ten</MenuItem>
          <MenuItem value="twenty">Twenty</MenuItem>
        </Select>
        <div style={{ marginTop: '30px' }} />
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          className={classes.textWidth}
        />
        <div style={{ marginTop: '30px' }} />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={classes.textWidth}
        />
        <div style={{ marginTop: '30px' }} />
        <Select
          value="country"
          variant="outlined"
          className={classes.textWidth}
          MenuProps={menuProps}
        >
          <MenuItem value="country">Country</MenuItem>
          <MenuItem value="ten">Ten</MenuItem>
          <MenuItem value="twenty">Twenty</MenuItem>
        </Select>
        <div style={{ marginTop: '30px' }} />
        <TextField
          id="outlined-basic"
          label="Mobile Phone"
          variant="outlined"
          className={classes.textWidth}
        />
        <div style={{ marginTop: '30px' }} />
        <TextField
          id="standard-multiline-static"
          label="Your Comments"
          multiline
          rows={9}
          variant="outlined"
          className={classes.textWidth}
        />
        <div style={{ marginTop: '30px' }} />
        <Button
          variant="contained"
          fullWidth
          size="large"
          className={classes.buttonStyle}
        >
          Enquire
        </Button>
      </Container>
    </Box>
  );
}
