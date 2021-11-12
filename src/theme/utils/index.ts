import { DefaultTheme } from 'styled-components';

type ThemeColor = keyof DefaultTheme['colors'];

export function getThemeColor(color: ThemeColor) {
  return ({ theme }: any) => theme.colors[color];
}
