import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Box
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { SingleFileUploadWithProgress } from './upload/SingleFileUploadWithProgress';
import { UploadError } from './upload/UploadError';

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
  }
}));

export default function Home({ file, onDelete, onUpload }) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid item>
          <br /> <Typography variant="h2">Main Photo</Typography>
          <br />
          <div className={classes.dropzone}>
            {/* <input {...getInputProps()} /> */}
            <Grid container>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ width: '100%' }}
                >
                  <Typography>Drop Here</Typography>
                </Box>
                <br />
              </Grid>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ width: '100%' }}
                >
                  <AddIcon />
                </Box>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <form>
          <Grid container spacing={2} direction="column">
            {file && (
              <SingleFileUploadWithProgress
                file={file}
                onDelete={onDelete}
                onUpload={onUpload}
              />
            )}

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
      </CardContent>
    </Card>
  );
}
