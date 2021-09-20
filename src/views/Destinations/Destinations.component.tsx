import { createStyles, makeStyles } from '@material-ui/core/styles';

import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

export default function Destinations(props) {
  const classes = useStyles();

  return (
    <div>
      <BannerSection {...props} />
      <CardList />
    </div>
  );
}
