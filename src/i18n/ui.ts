export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const ui = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.getStarted': 'Get Started',
    'nav.privacy': 'Privacy Policy',
    'nav.donate': 'Donate',

    // Hero
    'hero.title': 'Intelligent Bookmark Manager',
    'hero.subtitle':
      'AI-powered bookmark organization for Chrome, Firefox & Edge. Classify, organize, search, and manage your bookmarks with intelligence — all while keeping your data private.',
    'hero.cta.getStarted': 'Get Started',

    // Features
    'features.title': 'Key Features',
    'features.subtitle': 'Everything you need to master your bookmarks',
    'features.ai-classify.title': 'AI Classification',
    'features.ai-classify.desc':
      'Automatically categorize bookmarks into meaningful folders using AI, saving you hours of manual sorting.',
    'features.ai-organize.title': 'Smart Organization',
    'features.ai-organize.desc':
      'Let AI reorganize messy bookmark folders with intelligent suggestions. Preview changes with a diff view before applying.',
    'features.ai-tags.title': 'Smart Tags',
    'features.ai-tags.desc':
      'Generate 1-3 semantic tags for each bookmark automatically. Organize and filter bookmarks by AI-generated tags.',
    'features.ai-summary.title': 'AI Summary',
    'features.ai-summary.desc':
      'Summarize page content in Markdown format. Quickly understand what a bookmark is about without opening it.',
    'features.semantic-search.title': 'Semantic Search',
    'features.semantic-search.desc':
      'Go beyond keyword matching. Find bookmarks by meaning using on-device embedding models or cloud AI providers.',
    'features.diff-view.title': 'Diff View',
    'features.diff-view.desc':
      'Visual side-by-side comparison of bookmark structure changes. Review and apply AI suggestions with confidence.',
    'features.commander.title': 'Command Palette',
    'features.commander.desc':
      'Quick access to all features via keyboard shortcuts. Dual-panel view for efficient bookmark management.',
    'features.health-check.title': 'Health Check',
    'features.health-check.desc':
      'Detect broken links, duplicates, and empty folders. Keep your bookmark library clean and healthy.',
    'features.undo-redo.title': 'Undo & Redo',
    'features.undo-redo.desc':
      'All operations are reversible. Made a mistake? Just undo. Full history tracking for peace of mind.',
    'features.auto-process.title': 'Auto-Process',
    'features.auto-process.desc':
      'Automatically classify and tag new bookmarks in the background. Save time with intelligent automation.',
    'features.import-export.title': 'Import & Export',
    'features.import-export.desc':
      'Seamlessly import and export bookmarks. Back up your data or migrate between browsers with ease.',
    'features.privacy.title': 'Privacy First',
    'features.privacy.desc':
      'All data stays in your browser. URLs are sanitized before AI calls. You choose your own AI provider — no cloud account needed.',

    // Screenshots
    'screenshots.title': 'See It in Action',
    'screenshots.subtitle': 'A glimpse into the MarkShelf experience',
    'screenshots.home': 'Home — Full bookmark manager as your new tab',
    'screenshots.organize': 'AI Organize — Smart folder restructuring with diff preview',
    'screenshots.export': 'Export — Back up your bookmarks easily',
    'screenshots.healthcheck': 'Health Check — Detect broken links and duplicates',
    'screenshots.settings-provider': 'Settings — Configure your AI provider',
    'screenshots.settings-skills': 'Settings — Enable AI skills and features',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: March 2026',
    'privacy.intro':
      'MarkShelf is committed to protecting your privacy. This policy explains how MarkShelf handles your data.',
    'privacy.section1.title': 'Data Collection & Usage',
    'privacy.section1.content':
      'MarkShelf does NOT collect, store, or transmit any personal data to our servers. We do not have any servers or databases. All your bookmark data is stored locally in your browser using IndexedDB.',
    'privacy.section2.title': 'Local Storage',
    'privacy.section2.content':
      'All bookmark data, settings, and preferences are stored locally in your browser\'s IndexedDB. This data never leaves your browser unless you explicitly choose to interact with an AI service.',
    'privacy.section3.title': 'AI Service Interaction',
    'privacy.section3.content':
      'When you use AI features (classification, organization, summarization), MarkShelf sends bookmark information to the AI provider you configure. Before sending, MarkShelf offers a Privacy Mode that sanitizes URLs by removing paths and parameters, keeping only the domain name. You are in full control of which AI provider to use — MarkShelf supports OpenAI, Google Gemini, and other providers. We never send data to any AI service without your explicit configuration.',
    'privacy.section4.title': 'Permissions Explained',
    'privacy.section4.p1': 'MarkShelf requests the following Chrome permissions:',
    'privacy.section4.bookmarks': 'bookmarks — Read and manage your bookmark tree',
    'privacy.section4.storage': 'storage — Store extension settings and preferences',
    'privacy.section4.alarms': 'alarms — Schedule periodic tasks like health checks',
    'privacy.section4.contextMenus': 'contextMenus — Add right-click menu options for quick actions',
    'privacy.section4.tabs': 'tabs — Access tab information for bookmark creation',
    'privacy.section4.scripting': 'scripting — Extract page metadata for bookmark summaries',
    'privacy.section5.title': 'Third-Party Services',
    'privacy.section5.content':
      'MarkShelf does not include any analytics, tracking, or advertising services. The only third-party interaction occurs when you explicitly configure and use an AI provider for AI-powered features.',
    'privacy.section6.title': 'Data Security',
    'privacy.section6.content':
      'Since all data is stored locally in your browser, your bookmark data is as secure as your browser itself. MarkShelf does not have access to your data outside of the extension context.',
    'privacy.section7.title': 'Changes to This Policy',
    'privacy.section7.content':
      'We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date.',
    'privacy.section8.title': 'Contact',
    'privacy.section8.content':
      'If you have any questions about this privacy policy, please open an issue on our GitHub repository.',

    // Donate
    'donate.title': 'Support MarkShelf',
    'donate.subtitle':
      'MarkShelf is totally free. If you find it useful, consider supporting its development.',
    'donate.thanks': 'Thank you for your support! ❤️',
    'donate.thanks.desc':
      'Your contribution helps us maintain and improve MarkShelf, add new features, and keep it free for everyone.',
    'donate.coffee.title': 'Buy Me a Coffee',
    'donate.coffee.desc': 'Buy us a coffee to fuel late-night coding sessions.',
    'donate.coffee.cta': 'Buy a Coffee',
    'donate.crypto.title': 'Cryptocurrency',
    'donate.crypto.desc': 'Support us with cryptocurrency. Copy the wallet address below.',
    'donate.crypto.copied': 'Copied!',

    // Get Started
    'getStarted.title': 'Get Started',
    'getStarted.subtitle': 'Install MarkShelf on your browser',
    'getStarted.comingSoon': 'Coming Soon',
    'getStarted.comingSoonDesc': 'Support is coming soon. Stay tuned!',
    'getStarted.chrome.title': 'Google Chrome',
    'getStarted.chrome.desc': 'Install MarkShelf from the Chrome Web Store',
    'getStarted.chrome.cta': 'Add to Chrome',
    'getStarted.firefox.title': 'Mozilla Firefox',
    'getStarted.firefox.desc': 'Install MarkShelf from Firefox Add-ons',
    'getStarted.firefox.cta': 'Add to Firefox',
    'getStarted.edge.title': 'Microsoft Edge',
    'getStarted.edge.desc': 'Install MarkShelf from the Edge Add-ons Store',
    'getStarted.edge.cta': 'Add to Edge',

    // Footer
    'footer.description': 'Intelligent Bookmark Manager for Chrome, Firefox & Edge',
    'footer.nav': 'Navigation',
    'footer.links': 'Links',
    'footer.github': 'GitHub',
    'footer.chrome-store': 'Chrome Web Store',
    'footer.copyright': '© 2026 MarkShelf. All rights reserved.',
  },
  zh: {
    // Nav
    'nav.home': '首页',
    'nav.features': '功能特性',
    'nav.getStarted': '开始使用',
    'nav.privacy': '隐私政策',
    'nav.donate': '捐赠支持',

    // Hero
    'hero.title': '智能书签管理器',
    'hero.subtitle':
      'AI 驱动的多浏览器书签管理扩展。智能分类、整理、搜索和管理书签 — 同时保障数据隐私。',
    'hero.cta.getStarted': '开始使用',

    // Features
    'features.title': '核心功能',
    'features.subtitle': '全方位掌控你的书签',
    'features.ai-classify.title': 'AI 智能分类',
    'features.ai-classify.desc':
      '利用 AI 自动将书签分类到有意义的文件夹中，省去大量手动整理时间。',
    'features.ai-organize.title': '智能整理',
    'features.ai-organize.desc':
      '让 AI 重新组织杂乱的书签文件夹，提供智能建议。应用前可通过 Diff 视图预览更改。',
    'features.ai-tags.title': '智能标签',
    'features.ai-tags.desc':
      '为每个书签自动生成 1-3 个语义标签。通过 AI 生成的标签组织和筛选书签。',
    'features.ai-summary.title': 'AI 摘要',
    'features.ai-summary.desc':
      '以 Markdown 格式生成页面内容摘要。无需打开即可快速了解书签内容。',
    'features.semantic-search.title': '语义搜索',
    'features.semantic-search.desc':
      '超越关键词匹配。使用设备端嵌入模型或云端 AI 服务，根据语义查找书签。',
    'features.diff-view.title': '差异视图',
    'features.diff-view.desc':
      '可视化对比书签结构变化。自信地审查和应用 AI 建议。',
    'features.commander.title': '命令面板',
    'features.commander.desc':
      '通过键盘快捷键快速访问所有功能。双面板视图高效管理书签。',
    'features.health-check.title': '健康检查',
    'features.health-check.desc':
      '检测失效链接、重复项和空文件夹。保持书签库整洁健康。',
    'features.undo-redo.title': '撤销与重做',
    'features.undo-redo.desc':
      '所有操作都可逆。操作失误？直接撤销。完整的历史记录追踪，安心使用。',
    'features.auto-process.title': '自动处理',
    'features.auto-process.desc':
      '在后台自动分类和标记新书签。通过智能自动化节省时间。',
    'features.import-export.title': '导入与导出',
    'features.import-export.desc':
      '无缝导入和导出书签。轻松备份数据或在浏览器间迁移。',
    'features.privacy.title': '隐私优先',
    'features.privacy.desc':
      '所有数据保存在浏览器本地。AI 调用前自动消毒 URL。由你选择 AI 服务商 — 无需云账户。',

    // Screenshots
    'screenshots.title': '产品预览',
    'screenshots.subtitle': '一览 MarkShelf 的使用体验',
    'screenshots.home': '主页 — 全功能书签管理器作为新标签页',
    'screenshots.organize': 'AI 整理 — 智能文件夹重构与 Diff 预览',
    'screenshots.export': '导出 — 轻松备份书签',
    'screenshots.healthcheck': '健康检查 — 检测失效链接和重复项',
    'screenshots.settings-provider': '设置 — 配置 AI 服务商',
    'screenshots.settings-skills': '设置 — 启用 AI 技能与功能',

    // Privacy Policy
    'privacy.title': '隐私政策',
    'privacy.lastUpdated': '最后更新：2026 年 3 月',
    'privacy.intro':
      'MarkShelf 致力于保护您的隐私。本政策说明 MarkShelf 如何处理您的数据。',
    'privacy.section1.title': '数据收集与使用',
    'privacy.section1.content':
      'MarkShelf 不会收集、存储或向我们的服务器传输任何个人数据。我们没有任何服务器或数据库。所有书签数据均使用 IndexedDB 存储在您的浏览器本地。',
    'privacy.section2.title': '本地存储',
    'privacy.section2.content':
      '所有书签数据、设置和偏好均存储在浏览器的 IndexedDB 中。除非您主动选择与 AI 服务交互，否则这些数据不会离开您的浏览器。',
    'privacy.section3.title': 'AI 服务交互',
    'privacy.section3.content':
      '当您使用 AI 功能（分类、整理、摘要）时，MarkShelf 会将书签信息发送给您配置的 AI 服务商。在发送之前，MarkShelf 提供隐私模式，会对 URL 进行消毒处理 — 移除路径和参数，仅保留域名。您完全掌控使用哪个 AI 服务商 — MarkShelf 支持 OpenAI、Google Gemini 等多种服务。未经您的明确配置，我们不会向任何 AI 服务发送数据。',
    'privacy.section4.title': '权限说明',
    'privacy.section4.p1': 'MarkShelf 请求以下 Chrome 权限：',
    'privacy.section4.bookmarks': 'bookmarks — 读取和管理书签树',
    'privacy.section4.storage': 'storage — 存储扩展设置和偏好',
    'privacy.section4.alarms': 'alarms — 调度周期性任务（如健康检查）',
    'privacy.section4.contextMenus': 'contextMenus — 添加右键菜单选项以快速操作',
    'privacy.section4.tabs': 'tabs — 访问标签页信息以创建书签',
    'privacy.section4.scripting': 'scripting — 提取页面元数据用于书签摘要',
    'privacy.section5.title': '第三方服务',
    'privacy.section5.content':
      'MarkShelf 不包含任何分析、追踪或广告服务。唯一的第三方交互发生在您明确配置并使用 AI 服务商的 AI 功能时。',
    'privacy.section6.title': '数据安全',
    'privacy.section6.content':
      '由于所有数据均存储在浏览器本地，您的书签数据与浏览器本身一样安全。MarkShelf 在扩展上下文之外无法访问您的数据。',
    'privacy.section7.title': '政策变更',
    'privacy.section7.content':
      '我们可能会不定期更新本隐私政策。任何变更将反映在本页面并更新日期。',
    'privacy.section8.title': '联系方式',
    'privacy.section8.content':
      '如果您对本隐私政策有任何疑问，请在我们的 GitHub 仓库提交 Issue。',

    // Donate
    'donate.title': '支持 MarkShelf',
    'donate.subtitle':
      'MarkShelf 是免费的。如果您觉得它有用，请考虑支持它的持续开发。',
    'donate.thanks': '感谢您的支持！❤️',
    'donate.thanks.desc':
      '您的贡献帮助我们维护和改进 MarkShelf，添加新功能，并让它对所有人保持免费。',
    'donate.coffee.title': 'Buy Me a Coffee',
    'donate.coffee.desc': '请我们喝杯咖啡，为深夜编程补充能量。',
    'donate.coffee.cta': '请喝咖啡',
    'donate.crypto.title': '加密货币',
    'donate.crypto.desc': '通过加密货币支持我们。复制下方钱包地址。',
    'donate.crypto.copied': '已复制！',

    // Get Started
    'getStarted.title': '开始使用',
    'getStarted.subtitle': '在您的浏览器上安装 MarkShelf',
    'getStarted.comingSoon': '即将上线',
    'getStarted.comingSoonDesc': '支持即将推出，敬请期待！',
    'getStarted.chrome.title': 'Google Chrome',
    'getStarted.chrome.desc': '从 Chrome 应用商店安装 MarkShelf',
    'getStarted.chrome.cta': '添加到 Chrome',
    'getStarted.firefox.title': 'Mozilla Firefox',
    'getStarted.firefox.desc': '从 Firefox 附加组件商店安装 MarkShelf',
    'getStarted.firefox.cta': '添加到 Firefox',
    'getStarted.edge.title': 'Microsoft Edge',
    'getStarted.edge.desc': '从 Edge 附加组件商店安装 MarkShelf',
    'getStarted.edge.cta': '添加到 Edge',

    // Footer
    'footer.description': '适用于 Chrome、Firefox 和 Edge 的智能书签管理器',
    'footer.nav': '导航',
    'footer.links': '链接',
    'footer.github': 'GitHub',
    'footer.chrome-store': 'Chrome 应用商店',
    'footer.copyright': '© 2026 MarkShelf. 保留所有权利。',
  },
} as const;
