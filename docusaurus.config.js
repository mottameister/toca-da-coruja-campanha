// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Wiki da Toca da Coruja',
  tagline: 'Campanha Radical Cobblemon Trainers',
  favicon: 'img/favicon.png',

  url: 'https://wiki.mottameister.xyz',
  baseUrl: '/',

  organizationName: 'mottameister',
  projectName: 'toca-da-coruja-campanha',

  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},

  i18n: {
  defaultLocale: 'pt-BR',
  locales: ['pt-BR', 'en'],
  localeConfigs: {
    en: {
      label: 'English',
    },
    'pt-BR': {
      label: 'Português',
    },
  },
},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],



  headTags: [
  {
    tagName: 'meta',
    attributes: {
      property: 'og:image',
      content: 'https://wiki.mottameister.xyz/img/social-card.png',
    },
  },
  {
    tagName: 'meta',
    attributes: {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  },
],

  themeConfig: {

  metadata: [
  { name: 'keywords', content: 'Cobblemon, mod de Pokémon para Minecraft, batalhas VGC, treinadores Cobblemon, Radical Cobblemon Trainers' },
  { name: 'description', content: 'A Toca da Coruja é uma campanha competitiva de Cobblemon com progressão estruturada, batalhas no estilo VGC e treinadores personalizados.' },
  ],
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'TOCA DA CORUJA',
      logo: {alt: 'Toca da Coruja', src: 'img/favicon.png'},
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://mottameister.xyz/',
          label: 'mottameister.xyz ↗',
          position: 'right',
        },
        {
  type: 'localeDropdown',
  position: 'right',
},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Wiki da Toca da Coruja',
              to: '/',
            },
            {
              label: 'Download',
              to: '/download',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/TcSFAXGr6a',
            },
            {
              label: 'X',
              href: 'https://x.com/mottameister',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mottameister/toca-da-coruja-campanha',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MottaMeister. <a href="/model-credits/README.txt">Créditos dos modelos Cobblemon</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};



export default config;
