import React from 'react';
import minion from '../images/Minions-PNG-Transparent-Image.png';

import { Wrapper, Hero, Text } from '../ImageDefault/ImageDefaultStyled';

export const ImageError = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Hero src={minion} alt="Minions" />
    </Wrapper>
  );
};
