import React from 'react';
import Button from '@material-ui/core/Button';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

interface Props {
  onClick?: () => void;
}

const DiscoverMore = ({ title, onClick }: Props) => {
  return (
    <Card
      elevation={0}
      style={{
        height: '325px',
        color: '#00204e',
        width: '352px',
        background: '#f8f8fa'
      }}
    >
      <CardActionArea
        style={{
          padding: '30px 20px'
        }}
      >
        <CardContent style={{ padding: '30px' }}>
          <Typography
            align="center"
            style={{
              fontSize: '30px',
              lineHeight: '30px',
              fontWeight: 700,
              marginBottom: '20px'
            }}
          >
            Discover more Blogs
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: '#ceba9f',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '100px'
            }}
            align="center"
          >
            Go on... be curious
          </Typography>{' '}
          <Grid container>
            <Grid item container justifyContent="center">
              <Button
                variant="contained"
                style={{
                  padding: '15px 50px',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '22px',
                  background: '#2A398D',
                  color: 'white'
                }}
              >
                {' '}
                More
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DiscoverMore;
