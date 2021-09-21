import { createStyles, makeStyles } from '@material-ui/core/styles';

import {
  Box,
  Button,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: '1rem'
    },
    root: {
      maxWidth: 345,
      margin: '2rem'
    },
    dividerColor: {
      backgroundColor: 'rgb(206, 186, 159)',
      margin: '1rem 0 1rem '
    },
    cardStyle: {
      borderRadius: '0'
    }
  })
);

const cardContent = [
  {
    title: 'Caribbean',
    subTitle:
      'Where the legendary genial charm and tranquility of paradise behold. '
  },
  {
    title: 'Spanish Coast & Balearics',
    subTitle:
      'Behold the splendid land that beautifies living in the lap of luxury. '
  },
  {
    title: 'Northern Islands Croatia',
    subTitle:
      'A thousand ancient islands with magical nature and rich heritage.'
  },
  {
    title: 'French Riviera ',
    subTitle:
      'A perfect yacht charter getaway in probably one of the most romantic, beautiful, and charming place on earth. '
  },
  {
    title: 'Dalmatian Islands Croatia',
    subTitle: 'Medieval charm meets the glittering coastline'
  }
];

export default function CardList(props) {
  const classes = useStyles();

  const { cardList } = props;

  return (
    <Container maxWidth="lg">
      <Grid container>
        {cardList.length ? (
          cardList.map((card, index) => (
            <Card
              className={classes.root}
              classes={{ root: classes.cardStyle }}
              elevation={0}
              key={index}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="destination"
                  height="290"
                  width="352"
                  image={card.featured_image.url}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="h2"
                    align="center"
                  >
                    {card?.title}
                  </Typography>
                  <Divider className={classes.dividerColor} variant="middle" />
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    component="p"
                    align="center"
                  >
                    {card?.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <Grid item container justifyContent="center">
            <Typography variant="h2" align="center">
              Data Not Found!
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
