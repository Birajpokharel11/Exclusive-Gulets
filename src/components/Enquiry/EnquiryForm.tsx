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
  TextField,
  IconButton
} from '@material-ui/core';

import { menuProps } from '@utils/utils';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '4rem 0 3rem',
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      width: '260px',
      height: '59px',
      '&:hover': {
        backgroundColor: '#2A398D'
      },
      color: '#FFFFFF'
    },
    textWidth: {
      width: '100%'
    },
    Cross: {
      color: 'black',
      height: '25px',
      width: '25px'
    }
  })
);
interface Props {
  setOpen?: any;
}
export default function EnquiryForm({ setOpen }: Props) {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item container justifyContent="flex-end" xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <IconButton onClick={() => setOpen((prev) => !prev)}>
                <CloseIcon className={classes.Cross} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item>
            <Typography align="center" color="textPrimary" variant="h1">
              Create your own experience!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item container md={6} sm={12} xs={12} spacing={2}>
            <Grid item xs={3}>
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                variant="outlined"
                className={classes.textWidth}
                SelectProps={{
                  MenuProps: menuProps
                }}
                InputProps={{ notched: false }}
              >
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value="ten">Ten</MenuItem>
                <MenuItem value="twenty">Twenty</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                className={classes.textWidth}
                InputProps={{ notched: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className={classes.textWidth}
                InputProps={{ notched: false }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                variant="outlined"
                className={classes.textWidth}
                SelectProps={{
                  MenuProps: menuProps
                }}
                InputProps={{ notched: false }}
              >
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value="ten">Ten</MenuItem>
                <MenuItem value="twenty">Twenty</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="outlined-basic"
                label="Mobile Phone"
                variant="outlined"
                className={classes.textWidth}
                InputProps={{ notched: false }}
              />
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id="standard-multiline-static"
              label="Your Comments"
              multiline
              rows={9}
              variant="outlined"
              className={classes.textWidth}
              InputProps={{ notched: false }}
            />
          </Grid>
          <Grid item container justifyContent="center">
            <Button
              variant="contained"
              size="large"
              className={classes.buttonStyle}
            >
              Enquire
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
