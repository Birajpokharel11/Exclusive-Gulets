import Lottie from 'react-lottie';

import loader from '@assets/animations/loader.json';
import spinner from '@assets/animations/spinner_new_white.json';

interface Props {
  width?: number;
  height?: number;
  play: boolean;
  type: string;
}

export const Spinner = (props: Props) => (
  <Lottie
    width={props.width ? props.width : 300}
    height={props.height ? props.height : 300}
    options={{
      loop: true,
      autoplay: props.play,
      animationData: props.type === 'button' ? loader : spinner
    }}
  />
);

export default Spinner;
