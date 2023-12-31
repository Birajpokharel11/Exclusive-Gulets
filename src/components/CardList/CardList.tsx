import { createStyles, makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import moment from 'moment';

import {
  Button,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid
} from '@material-ui/core';

import DiscoverMore from '@components/DiscoverMore';

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

interface Props {
  list?: any[];
  next_page?: any;
  showMore?: () => any;
  route?: string;
  routeRedirect?: (data?: any) => void;
}

export default function CardList({
  list,
  next_page,
  showMore,
  route,
  routeRedirect
}: Props) {
  const classes = useStyles();

  return (
    <Grid container>
      {list.length &&
        list.map((item, index) => (
          <Card
            className={classes.root}
            classes={{ root: classes.cardStyle }}
            elevation={0}
            key={index}
            onClick={() => routeRedirect(item)}
          >
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                alt="image"
                height="290"
                width="352"
                image={
                  item.featuredImage ||
                  '/assets/images/Blog_single/Aresteas.jpg'
                }
                title="title"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h2"
                  align="center"
                >
                  {item?.title}
                </Typography>
                {route === 'destinations' && (
                  <Divider className={classes.dividerColor} variant="middle" />
                )}
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  {item?.metaDescription}
                </Typography>

                {route !== 'destinations' && (
                  <Typography
                    className="date"
                    variant="subtitle2"
                    component="p"
                    align="center"
                    style={{ marginTop: '1rem' }}
                  >
                    {moment(item.createdDate).format('d / MM / YYYY')}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      {next_page && <DiscoverMore onClick={showMore} />}
    </Grid>
  );
}
