import React from 'react';
import minions from '../images/Group-Minions-PNG-Photo.png';

import { Wrapper, Hero, Text } from './ImageDefaultStyled';

export const ImageDefault = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Hero src={minions} alt="Minions" />
    </Wrapper>
  );
};
