import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Box,
  IconButton
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { SingleFileUploadWithProgress } from './upload/SingleFileUploadWithProgress';
import { UploadError } from './upload/UploadError';
import { useRef } from 'react';

const useStyles = makeStyles((theme) => ({
  dropzone: {
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    height: theme.spacing(20),
    outline: 'none'
  },
  input: {
    display: 'none'
  }
}));

export default function Home({
  name,
  code,
  file,
  onChange,
  onDelete,
  onSubmit
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Card>
        <CardContent>
          <Grid item>
            <br />
            <Typography variant="h2">{name}</Typography>
            <br />
            <div className={classes.dropzone}>
              {file.preview ? (
                <Box display="flex" style={{ width: '100%' }}>
                  <img
                    src={file.preview}
                    style={{
                      height: theme.spacing(20),
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      width: '50%'
                    }}
                  />
                </Box>
              ) : (
                <label htmlFor={`file-${code}`} style={{ cursor: 'pointer' }}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    style={{ width: '100%' }}
                  >
                    <Typography>Add {name}</Typography>
                  </Box>

                  <Box display="flex" justifyContent="center" pt={2}>
                    <AddIcon style={{ color: 'red' }} />
                  </Box>
                </label>
              )}

              <input
                type="file"
                accept="image/*"
                id={`file-${code}`}
                required={!file.preview}
                // disabled={uploading == 'uploading'}
                onChange={onChange}
                className={classes.input}
              />
            </div>
          </Grid>

          {file?.raw && (
            <form onSubmit={onSubmit}>
              <Grid container spacing={2} direction="column">
                <SingleFileUploadWithProgress
                  file={file.raw}
                  onDelete={onDelete}
                />

                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </CardContent>
      </Card>
    </>
  );
}
