import { BackDrop } from './OverlayStyled';

export const OverLay = ({ children, onClick }) => {
  return <BackDrop onClick={onClick}> {children} </BackDrop>;
};
