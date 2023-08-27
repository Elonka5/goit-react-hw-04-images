import React from 'react';
import minion from '../images/Group-Minions-Transparent-PNG.png';

import { Wrapper, Hero, Text } from '../ImageDefault/ImageDefaultStyled';

export const ImageSearchEmpty = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Hero src={minion} alt="Minions" />
    </Wrapper>
  );
};
