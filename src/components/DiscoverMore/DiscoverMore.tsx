import React from 'react';
import Button from '@material-ui/core/Button';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

interface Props {
  lg?: GridSize;
  md?: GridSize;
  title?: string;
  onClick?: () => void;
}

const DiscoverMore = ({ title, onClick }: Props) => {
  return (
    <Grid item lg={4} md={4} xs={12}>
      <Paper>
        <div className="gems-content" style={{ textAlign: 'center' }}>
          <p className="title">
            Discover more
            <br />
            {title}
          </p>
          <p className="txt">Go on... be curious</p>
          <Button title="More" onClick={onClick} />
        </div>
      </Paper>
    </Grid>
  );
};

export default DiscoverMore;
