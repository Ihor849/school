import { StyledButton, StyledBurgerButton } from './Button.styled';

export const Button = ({ children, ...props }) => {
  console.log(props);
  return (
    <StyledButton type="button" {...props}>
      {' '}
      {children}
    </StyledButton>
  );
};

export const BurgerButton = ({ children, ...props }) => {
  return (
    <StyledBurgerButton type="button" {...props}>
      {' '}
      {children}
    </StyledBurgerButton>
  );
};
