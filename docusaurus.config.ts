import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Cyd Docs",
  tagline:
    "Tech platforms can't be trusted. It's time to regain control of your data.",
  favicon: "img/logo.png",
  url: "https://docs.cyd.social",
  baseUrl: "/",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en"], // language codes
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // getting-started
          { from: "/docs/getting-started/download", to: "/docs/desktop/download" },
          { from: "/docs/getting-started/tour", to: "/docs/desktop/tour" },
          // x platform
          { from: "/docs/x/sign-in", to: "/docs/desktop/x/sign-in" },
          { from: "/docs/x/archive", to: "/docs/desktop/x/archive" },
          { from: "/docs/x/archive-only", to: "/docs/desktop/x/archive-only" },
          { from: "/docs/x/delete", to: "/docs/desktop/x/delete" },
          { from: "/docs/x/dashboard", to: "/docs/desktop/x/dashboard" },
          { from: "/docs/x/migrate-bluesky", to: "/docs/desktop/x/migrate-bluesky" },
          { from: "/docs/x/local-database/intro", to: "/docs/desktop/x/local-database/intro" },
          { from: "/docs/x/local-database/archive", to: "/docs/desktop/x/local-database/archive" },
          { from: "/docs/x/local-database/build", to: "/docs/desktop/x/local-database/build" },
          { from: "/docs/x/local-database/import", to: "/docs/desktop/x/local-database/import" },
          { from: "/docs/x/tips/ghost-likes", to: "/docs/desktop/x/tips/ghost-likes" },
          { from: "/docs/x/tips/other-tweets", to: "/docs/desktop/x/tips/other-tweets" },
          { from: "/docs/x/tips/u2f", to: "/docs/desktop/x/tips/u2f" },
          // facebook platform
          { from: "/docs/facebook/sign-in", to: "/docs/desktop/facebook/sign-in" },
          { from: "/docs/facebook/get-archive", to: "/docs/desktop/facebook/get-archive" },
          { from: "/docs/facebook/delete", to: "/docs/desktop/facebook/delete" },
          { from: "/docs/facebook/dashboard", to: "/docs/desktop/facebook/dashboard" },
          // tips
          { from: "/docs/tips/disable-sleep/intro", to: "/docs/desktop/tips/disable-sleep/intro" },
          { from: "/docs/tips/disable-sleep/linux", to: "/docs/desktop/tips/disable-sleep/linux" },
          { from: "/docs/tips/disable-sleep/mac", to: "/docs/desktop/tips/disable-sleep/mac" },
          { from: "/docs/tips/disable-sleep/windows", to: "/docs/desktop/tips/disable-sleep/windows" },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.png",
    navbar: {
      title: "Cyd Docs",
      logo: {
        alt: "Cyd Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Development Blog", position: "left" },
        {
          href: "https://cyd.social",
          label: "Cyd Website",
          position: "right",
        },
        {
          href: "https://github.com/lockdown-systems/cyd",
          label: "Source Code",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Docs",
              to: "/docs/intro/",
            },
            {
              label: "Development Blog",
              to: "/blog",
            },
            {
              label: "Cyd Website",
              to: "https://cyd.social",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/cyd.social",
            },
            {
              label: "Mastodon",
              href: "https://infosec.exchange/@cyd",
            },
            {
              label: "GitHub",
              href: "https://github.com/lockdown-systems/cyd",
            },
            {
              label: "X",
              href: "https://x.com/cyd_social",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Newsletter",
              href: "https://cyd.social/#/portal/signup",
            },
            {
              label: "Pricing",
              href: "https://cyd.social/pricing/",
            },
            {
              label: "Download",
              href: "https://cyd.social/download/",
            },
            {
              label: "Lockdown Systems Collective",
              href: "https://lockdown.systems/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lockdown Systems Collective`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "docs.cyd.social",
    },
  ],
};

export default config;
