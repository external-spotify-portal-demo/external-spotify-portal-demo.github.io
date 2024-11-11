// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spotify Plugins for Backstage Developer Documentation',
  tagline:
    'Built by our developers — for your developers — these plugins put humans at the center of developer experience and accelerate your Backstage goals.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://spotify.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/spotify-for-backstage-docs/',
  organizationName: 'spotify',
  projectName: 'spotify-for-backstage-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/backstage-logos-hero.gif',
      navbar: {
        title: 'Spotify for Backstage',
        logo: {
          alt: 'Site Logo',
          src: 'img/spotify.png',
          width: 32,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        items: [
          // Add back in if we add multiple sections to our docs.
          {
            href: 'https://backstage.spotify.com',
            position: 'right',
            className: 'header-github-link',
            label: 'Back to backstage.spotify.com',
            'aria-label': 'Back to backstage.spotify.com',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
