import { createGlobalStyle } from 'styled-components';
import { screenMdMin, spearmint } from '@spotify-internal/encore-web';

import '@spotify-internal/encore-web/css/encore-light-theme.css';

export const darkAquamarine = '#228274';

export const linkBoxShadowStyle = '0 3px 0 0 #54DCC4';

export const Theme = createGlobalStyle`
  :root {
    --text-bright-accent: ${spearmint};
    --link-color: ${darkAquamarine};
    --max-content-width: 1440px;
    --content-padding: 20px;
    @media(min-width: ${screenMdMin}) {
      --content-padding: 70px;
    }
    -webkit-font-smoothing: antialiased;
  }
`;
