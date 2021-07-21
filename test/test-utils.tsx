import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const testTheme = {
  borderRadius: '8px',
  colors: {
    primary: 'darkred',
    secondary: 'pink',
    background: '#FAFAFA',
    backgroundAlt: '#F3F3F3',
    success: 'green',
    alert: 'yellow',
    danger: 'red',
  }
}

const Providers: FC = ({ children }) => (
  <ThemeProvider theme={testTheme}>
    {children}
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
