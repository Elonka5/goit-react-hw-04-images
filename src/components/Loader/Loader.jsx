import React from 'react';
import { DotLoader } from 'react-spinners';
import minion from '../images/Minions-PNG.png';
import { LoaderBackdrop, Minions } from './LoaderStyled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <DotLoader
        color="#5494b4"
        size={150}
        cssOverride={{ position: 'absolute', top: '25%', left: '45%' }}
      />
      <Minions src={minion} alt="Minions" />
    </LoaderBackdrop>
  );
};
