import styled from 'styled-components';
import { getThemeColor } from '../../theme/utils';

const ButtonWrapper = styled.button`
  width: 100%;
  height: 2em;
  border: 2px solid ${getThemeColor('primary')};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 700;
  background-color: ${getThemeColor('background')};
  transition: 300ms ease-in-out;
  transition-property: background-color, color;
    
  &:not(:disabled):hover {
    background-color: ${getThemeColor('primary')};
    color: white;
    cursor: pointer;
  }
`;

export default ButtonWrapper;