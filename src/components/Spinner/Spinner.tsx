import Lottie from 'react-lottie';

import loader from '@assets/animations/loader.json';
import spinner from '@assets/animations/spinner_new_white.json';

interface Props {
  width?: string | number;
  height?: string | number;
  play?: boolean;
  type?: string;
}

export const Spinner = ({
  width = 300,
  height = 300,
  play = false,
  type
}: Props) => (
  <Lottie
    width={width}
    height={height}
    options={{
      loop: true,
      autoplay: play,
      animationData: type === 'button' ? loader : spinner
    }}
  />
);

export default Spinner;
