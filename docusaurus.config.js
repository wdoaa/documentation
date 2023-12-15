// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Radxa Docs",
  tagline: "Documentations for Radxa products",
  url: "https://docs.radxa.com",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "radxa-docs", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
      zh: {
        htmlLang: "zh-CN",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ locale, docPath }) => {
            if (locale !== "zh") {
              return `https://github.com/radxa-docs/documentation/edit/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/radxa-docs/documentation/edit/main/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/radxa-docs/documentation/edit/main/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/footer.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: "KB2V2SQ6N9",
        apiKey: "9fdd9855b5bfb8447d4079ca17e40bdc",
        indexName: "radxa",
        contextualSearch: true,
        externalUrlRegex: "external\\.com|domain\\.com",
        replaceSearchResultPathname: {
          from: "/docs/",
          to: "/",
        },
        searchParameters: {},
        searchPagePath: false,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Radxa",
          src: "logo.svg",
          width: 90,
          height: 20,
        },
        items: [
          {
            type: "doc",
            label: "Welcome",
            docId: "welcome",
          },
          {
            position: "right",
            label: "Home",
            to: "http://www.radxa.com/",
            target: "_self",
          },
          {
            position: "right",
            label: "Products",
            to: "http://www.radxa.com/products",
            target: "_self",
          },
          {
            position: "right",
            label: "News",
            to: "http://www.radxa.com/news",
            target: "_self",
          },
          {
            position: "right",
            label: "About",
            to: "http://www.radxa.com/about",
            target: "_self",
          },
          {
            position: "right",
            label: "Services",
            to: "http://www.radxa.com/services",
            target: "_self",
          },
          {
            type: "dropdown",
            label: "Support",
            position: "right",
            items: [
              {
                label: "Community",
                href: "http://www.radxa.com/community",
              },
              {
                label: "Forum",
                href: "https://forum.radxa.com/",
              },
              {
                label: "WiKi",
                href: "https://wiki.radxa.com/",
              },
              {
                label: "Github",
                href: "https://github.com/radxa",
              },
            ],
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
            title: "Radxa",
            items: [
              {
                label: "Home",
                to: "http://www.radxa.com/",
                target: "_self",
              },
              {
                label: "Products",
                to: "http://www.radxa.com/product",
                target: "_self",
              },
              {
                label: "News",
                to: "http://www.radxa.com/news",
                target: "_self",
              },
              {
                label: "Services",
                to: "http://www.radxa.com/services",
                target: "_self",
              },
              {
                label: "Community",
                to: "http://www.radxa.com/association",
                target: "_self",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Wiki",
                href: "https://wiki.radxa.com/",
              },
              {
                label: "Forum",
                href: "https://forum.radxa.com/",
              },
              {
                label: "Github",
                href: "https://github.com/radxa",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "About Radxa",
                to: "http://www.radxa.com/about",
              },
              {
                label: "Contact Radxa",
                to: "http://www.radxa.com/about?#contact",
              },
              {
                label: "About Distributors",
                to: "http://www.radxa.com/about#distributors",
              },
              {
                html: `
                   <div class='footer_box'>
                    <div class='footer_center'>
                        <div class='log'></div>
                        <div class='iconBox'>
                          <div class='men'>Follow us</div>
                          <ul>
                            <li>
                              <a class='a_on1 iconpg' href='https://github.com/radxa'></a>
                            </li>
                            <li>
                              <a class='a_on2 iconpg' href='https://discord.com/invite/mn73YNWdHY'></a>
                            </li>
                            <li>
                              <a class='a_on3 iconpg' href='https://t.me/rockpi4'></a>
                            </li>
                            <li class='a_on4_li'>
                              <div class='a_on4 iconpg'></div>
                              <div class='vxMa'></div>
                            </li>
                            <li class='a_on5_li'>
                              <div class='a_on5 iconpg'></div>
                              <div class='qqMa'></div>
                            </li>
                          </ul>
                        </div>
                    </div>
                   </div>
                  `,
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash"],
      },
      typography: {
        fontFamily: [
          "Helvetica",
          "pingFangSC",
          "Microsoft YaHei",
          "微软雅黑",
          "Arial",
          "sans-serif",
        ],
      },
    }),
};

module.exports = config;
