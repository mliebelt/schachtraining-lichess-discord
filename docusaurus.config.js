// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Schachunterricht mit Lichess und Discord online",
  tagline: "Schach online ist coooool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mliebelt@github", // Usually your GitHub org/user name.
  projectName: "schachtraining-lichess", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   contextualSearch: false,
      //   searchParameters: {
      //     facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],
      //   },
      // },
      navbar: {
        title: "Home",
        logo: {
          alt: "Workshop Logo",
          src: "img/logo.ico",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Workshop",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/mliebelt/schachtraining-lichess",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Workshop",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Lichess",
                href: "https://lichess.org",
              },
              {
                label: "Discord",
                href: "https://discordapp.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/mliebelt/schachtraining-lichess",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Markus Liebelt, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
