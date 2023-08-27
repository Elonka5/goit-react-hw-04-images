import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  place-content: center;
  margin: 1vh auto;
`;

export const Text = styled.p`
  font-size: 48px;
  font-family: 'Rock Salt', cursive;
  margin: 0 auto;
  margin-bottom: 32px;
  max-width: 90%;
  color: #42515e;
  text-shadow: '0 1px 1px #fff';
  text-align: center;
`;

export const Hero = styled.img`
  width: 600px;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
`;
