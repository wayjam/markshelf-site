/**
 * Site configuration -集中管理外部链接和配置
 */

export const config = {
  // Store URLs
  stores: {
    chrome: 'https://chrome.google.com/webstore',
    edge: 'https://microsoftedge.microsoft.com/addons',
    firefox: '#', // Coming soon
  },

  // Social links
  social: {
    github: 'https://github.com',
    githubRepo: 'https://github.com/markshelf',
    githubSponsors: 'https://github.com/sponsors',
    buyMeCoffee: 'https://buymeacoffee.com',
  },

  // Extension ID (for Chrome Web Store links)
  extension: {
    chromeId: 'ckpkddmlofjjomanknfmchipiehjkhch',
  },
} as const;
