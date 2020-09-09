import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  object-fit: cover;
`;

type Props = {
  src?: string;
};

export const BgImg: React.FunctionComponent<Props> = (props) => {
  return <Img src={props.src} />;
};
