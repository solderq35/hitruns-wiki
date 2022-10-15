const buildType = process.env.BUILD_TYPE;

module.exports = {
  title: 'HitRuns Wiki',
  tagline: 'Hitman 3 Speedrunning Wiki',
  url: 'https://hitruns-wiki.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'solderq35', // Usually your GitHub org/user name.
  projectName: 'hitruns-wiki', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', ...(buildType === 'i18n' ? ['zh-CN', 'zh-TW'] : [])],
  },
  themeConfig: {
	image: 'img/favicon.ico',
    navbar: {
      title: 'HitRuns Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon2.png',
      },
      items: [
        {
          to: 'docs/index',
          activeBasePath: 'docs',
          label: 'Guides',
          position: 'left',
        },
        {
          href: '/docs/resources',
          label: 'Resources',
          position: 'left',
        },
        {
          href: '/docs/discord',
          label: 'Discord',
          position: 'left',
        },
        {
          href: 'https://www.speedrun.com/hitman_3/',
          label: 'Leaderboards',
          position: 'left',
        },
        {
          href: 'https://github.com/solderq35/hitruns-wiki#contribution-guidelines',
          label: 'Contribution Guidelines',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Gameplay Guides',
              to: 'docs/index',
            },
            {
              label: 'Beginner FAQ',
              to: 'docs/beginner',
            },
            {
              label: 'Fullgame Tutorials',
              to: 'docs/fullgame_tutorials',
            },
            {
              label: 'Livesplit',
              to: 'docs/livesplit',
            },
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '/docs/discord',
            },
            {
              label: 'Contribution Guidelines',
              href: 'https://github.com/solderq35/hitruns-wiki#contribution-guidelines',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/solderq35/hitruns-wiki',
            },
            {
              label: 'Leaderboards',
              href: 'https://www.speedrun.com/hitman_3/',
            },
            {
              label: 'Hitman 3 Patch Notes',
              href: '/docs/h3_patch_notes',
            },
            {
              label: 'Resources',
              href: '/docs/resources',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Solderq35. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/solderq35/hitruns-wiki/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/solderq35/hitruns-wiki/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};
