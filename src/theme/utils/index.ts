export function getThemeColor(color: string) {
  return ({ theme }: any) => theme.colors[color];
}
