import { createGlobalStyle } from 'styled-components';
import { getThemeColor } from '../theme/utils';

const CustomScrollBar = createGlobalStyle`
  * {
    /* scrollbar: Chrome, Edge, Safari and Opera */
    &::-webkit-scrollbar {
      width: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${getThemeColor('secondary')};
      border-radius: 8px;
      margin: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: ${getThemeColor('primary')};
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: calc(${getThemeColor('primary') + '#fff'});
    }
    /* scrollbar Firefox */
    scrollbar-color: ${getThemeColor('primary')} ${getThemeColor('secondary')};
    scrollbar-width: thin;
  }
`;

export default CustomScrollBar;
