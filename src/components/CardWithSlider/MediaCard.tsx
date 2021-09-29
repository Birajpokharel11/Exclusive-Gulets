import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2)
      }
    },
    media: {
      height: '270px',
      width: 'auto'
    },
    btnLabel: {
      color: '#ab3996',
      fontSize: '16px',
      fontWeight: 400
    }
  })
);

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image?.url ?? ''}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          align="center"
          style={{ fontWeight: 'bold' }}
        >
          {props.title ?? ''}
        </Typography>
        <Typography variant="subtitle2" component="p" align="center">
          {props.description ?? ''}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button size="small" classes={{ label: classes.btnLabel }}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
