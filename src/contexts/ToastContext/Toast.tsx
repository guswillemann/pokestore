import styled from 'styled-components'
import { getThemeColor } from '../../theme/utils';

export type ToastObjectType = {
  type: 'success' | 'alert' | 'error';
  message: string;
}

type ToastProps = {
  toastObject: ToastObjectType;
}

const ToastWrapper = styled.div<{ variant: string }>`
  @keyframes slideDown {
    0% { top: -10rem }
    10% { top: 5rem }
    90% { top: 5rem }
    100% { top: -10rem }
  }

  animation: slideDown 3000ms ease-in-out forwards;

  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 4px solid ${getThemeColor('alert')};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${getThemeColor('background')};
  width: 30rem;
  height: 5rem;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  z-index: 10000;
`;

export default function Toast({ toastObject }: ToastProps) {
  return (
    <ToastWrapper
      key={`Toast-${Date.now()}`}
      variant={toastObject.type}
    >
      <span>{toastObject.message}</span>
    </ToastWrapper>
  );
};