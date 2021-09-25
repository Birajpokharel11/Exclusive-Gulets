import styled from 'styled-components';

export const ResponsiveImg = styled.div`
  && {
    min-height: 184px;
    height: auto;
    background-image: url(${({ backgroundUrl }) => backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    background-position: center center;
  }
`;
