import { getThemeColor } from '.';

const theme = {
  colors: {
    primary: 'primaryColor',
    secondary: 'secondaryColor',
    tertiary: 'tertiaryColor',
  },
};

describe('getThemeColor', () => {
  describe('when receives the "primary" string argument', () => {
    it('returns the primary color', () => {
      const innerFuction = getThemeColor('primary');
      const colorString = innerFuction({ theme });
  
      expect(colorString).toEqual(theme.colors.primary);
    });
  });
  
  describe('when receives the "tertiary" string argument', () => {
    it('returns the tertiary color', () => {
      const innerFuction = getThemeColor('tertiary');
      const colorString = innerFuction({ theme });
  
      expect(colorString).toEqual(theme.colors.tertiary);
    });
  });
});
