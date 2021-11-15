import Image from 'next/image';
import { useRouter } from 'next/router';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '20px'
    },
    paper: {
      padding: theme.spacing(2)
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  })
);

function YachtItem({ name, yachtType, id, ...rest }) {
  const router = useRouter();
  const classes = useStyles();

  console.log('yacht item rest>>>', rest);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Image
                width={128}
                height={128}
                alt="complex"
                src="/assets/images/Aresteas.png"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {yachtType?.name ?? 'Gulet'}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  onClick={() =>
                    router.push({
                      pathname: `/manage/yachts/${id}`
                    })
                  }
                >
                  View
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Chip label="Charter" variant="outlined" />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default YachtItem;
