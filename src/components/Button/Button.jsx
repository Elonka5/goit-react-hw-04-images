import { ButtonStyled } from './ButtonStyled';

export const Button = ({ handleClick, text }) => {
  return (
    <ButtonStyled type="button" onClick={handleClick}>
      {text}
    </ButtonStyled>
  );
};
