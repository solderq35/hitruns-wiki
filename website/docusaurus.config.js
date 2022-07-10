const buildType = process.env.BUILD_TYPE;

module.exports = {
  title: "HitRuns Wiki",
  tagline:
    "An improved version of speedrun.com/hitman_3/guides",
  url: "https://hitruns-wiki.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "easyops-cn", // Usually your GitHub org/user name.
  projectName: "docusaurus-search-local", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", ...(buildType === "i18n" ? ["zh-CN", "zh-TW"] : [])],
  },
  themeConfig: {
    navbar: {
      title: "HitRuns Wiki",
      logo: {
        alt: "My Site Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          to: "docs/index",
          activeBasePath: "docs",
          label: "Guides",
          position: "left",
        },
        {
          href: "https://github.com/solderq35/hitruns-wiki",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Guides",
          items: [
            {
              label: "Gameplay Guides",
              to: "docs/index",
            },
          ],
        },

        {
          title: "Hitman Speedrun Discords",
          items: [
            {
              label: "Hitman Runs Discord",
              href: "https://discord.com/invite/E45wUBnxBT",
            },
            {
              label: "F7SC Discord",
              href: "https://discord.com/invite/kVMBEZA",
            },
            {
              label: "Lego Stuffers Discord",
			  href: "https://discord.gg/WvGmnFcpVM"
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/solderq35/hitruns-wiki",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hitruns Wiki, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
			path: 'docs',
			routeBasePath: 'docs',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/solderq35/hitruns-wiki/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/solderq35/hitruns-wiki/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};
