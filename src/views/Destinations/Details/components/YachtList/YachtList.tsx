import { createStyles, makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import _ from 'lodash';

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

export default function YachtList(props) {
  const classes = useStyles();

  const { cardList, route } = props;

  const redirectDetailsPage = (data) => {
    if (route === 'destinations') {
      Router.push({
        pathname: `/destinations/${data.title}`,
        query: {
          id: data.id
        }
      });
    }
  };

  const createMarkup = (encodedHtml) => ({
    __html: _.unescape(encodedHtml)
  });

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
              onClick={() => redirectDetailsPage(card)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="image"
                  height="290"
                  width="352"
                  image={card.featured_image_1?.url}
                  title="title"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="h2"
                    align="center"
                  >
                    {card?.name}
                  </Typography>
                  <Grid container justifyContent="center" alignItems="center">
                    {card.sailing_countries.length &&
                      card.sailing_countries.map((country, i) => (
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
                  </Grid>

                  <Typography
                    variant="h6"
                    color="textSecondary"
                    component="p"
                    align="center"
                    dangerouslySetInnerHTML={createMarkup(card?.about)}
                  />
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
