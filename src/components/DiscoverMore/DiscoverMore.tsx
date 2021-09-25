import React from 'react';
import Button from '@material-ui/core/Button';
import  Grid, {GridSize} from '@material-ui/core/Grid';

interface Props = {
  lg?: GridSize;
  md?: GridSize;
  onClick?: () => void;
}

const DiscoverMore = ({ lg = 4, md = 4, onClick }: Props) => {
  return (
    <Grid item lg={lg} md={md} xs={12}>
      <div className="load-moregems">
        <div className="gems-content" style={{ textAlign: 'center' }}>
          <p className="title">
            Discover more
            <br />
            Destinations
          </p>
          <p className="txt">Go on... be curious</p>
          <Button title="More" onClick={onClick} />
        </div>
      </div>
    </Grid>
  );
};

export default DiscoverMore;
