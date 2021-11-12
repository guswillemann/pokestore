import { ButtonHTMLAttributes } from 'react';
import ButtonWrapper from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonWrapper {...props}>
    {children}
  </ButtonWrapper>
);

export default Button;