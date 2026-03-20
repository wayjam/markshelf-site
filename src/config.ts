/**
 * Site configuration -集中管理外部链接和配置
 */

export const config = {
  // Store URLs
  stores: {
    chrome: 'https://chromewebstore.google.com/detail/markshelf/dhgghnaealgpkbhlmdgjbpjejgkoafch',
    edge: '#',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/markshelf/',
  },

  // Social links
  social: {
    github: 'https://github.com',
    githubRepo: 'https://github.com/wayjam/markshelf-site',
    buyMeCoffee: 'https://buymeacoffee.com/wayjam',
  },

  // Donate - Crypto addresses
  donate: {
    buyMeCoffee: 'https://buymeacoffee.com/wayjam',
    crypto: [
      { name: 'BTC', address: 'bc1qszey2dgs9t97lue2z46scnugselcunsmhax8zh' },
      { name: 'SOL', address: '4d1KcA1gAcT1HevxHbTdV9S53qPrA9J7zE1C4Ysk4DD7' },
      { name: 'USDC (ERC-20)', address: '0x04E0E952D519B2f73a6b1B60d58ff3ed5483f06c' },
    ],
  },

  // Extension ID (for Chrome Web Store links)
  extension: {
    chromeId: 'dhgghnaealgpkbhlmdgjbpjejgkoafch',
  },
} as const;
