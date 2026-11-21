export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const ui = {
  en: {
    // Nav
    'nav.home': 'Overview',
    'nav.features': 'Capabilities',
    'nav.getStarted': 'Install',
    'nav.privacy': 'Privacy',
    'nav.donate': 'Support',

    // Hero
    'hero.title': 'Find any bookmark in seconds.',
    'hero.subtitle':
      'Search saved page text right from the popup, preview AI folder cleanups in a clear Diff, and undo anything—without touching your New Tab.',
    'hero.cta.chrome': 'Add to Chrome',
    'hero.cta.firefox': 'Add to Firefox',
    'hero.cta.allBrowsers': 'All browsers',
    'hero.trust.local': 'Local-first IndexedDB',
    'hero.trust.newtab': 'New Tab untouched',
    'hero.trust.byo': 'BYO API key, local agent, or offline',

    // Hero Interactive Catalog Drawer
    'drawer.badge': 'Interactive sample catalog',
    'drawer.tab.search': 'Popup Search & Snapshots',
    'drawer.tab.diff': 'Pending Diff Review',
    'drawer.searchPlaceholder': 'Try "offline sync", "css grid", or #rust…',
    'drawer.query.all': 'All (4)',
    'drawer.query.offline': 'offline sync',
    'drawer.query.design': 'typography',
    'drawer.query.diff': 'agent',
    'drawer.snapshotLabel': 'Captured excerpt',
    'drawer.matchTitle': 'Title match',
    'drawer.matchSnapshot': 'Page snapshot match',
    'drawer.matchSemantic': 'Semantic match',
    'drawer.empty': 'No sample cards match that filter. Clear the query to view all 4.',
    'drawer.diffHeader': 'Proposed cleanup · 3 moves, 2 tags',
    'drawer.diffOrigin': 'Source: Local AI Organize · Reversible',
    'drawer.diffBefore': 'Current folder',
    'drawer.diffAfter': 'Proposed shelf',
    'drawer.diffApprove': 'Approve & apply (3)',
    'drawer.diffApproved': 'Applied · Undo available',
    'drawer.diffUndo': 'Undo',

    // Core Workflow Band (3 Pillars — non-uniform ledger rows, not generic cards)
    'workflow.title': 'Fast to find. Safe to organize.',
    'workflow.subtitle': 'Popup speed when you need a link, full-page control when you clean up.',
    'workflow.1.title': 'Popup first, shelf on demand',
    'workflow.1.desc':
      'Search from the toolbar anytime. Open the full-page shelf only for bulk organizing.',
    'workflow.1.meta': 'Popup · Full-page shelf · Dual-pane drag',
    'workflow.2.title': 'Search inside saved pages',
    'workflow.2.desc':
      'Offline page excerpts live in IndexedDB, so forgotten titles still show up in search.',
    'workflow.2.meta': 'IndexedDB snapshots · Hybrid & semantic search',
    'workflow.3.title': 'Preview Diff, undo anytime',
    'workflow.3.desc':
      'AI never moves links behind your back. Check boxes in a Diff view and roll back in one click.',
    'workflow.3.meta': 'Side-by-side Diff · Selective apply · Undo',

    // Complete Capability Ledger (Grouped index rows)
    'features.title': 'Built for messy bookmark bars',
    'features.subtitle': 'Everything included, with zero cloud lock-in.',
    'features.group.find': 'Find & Read',
    'features.group.organize': 'Organize & Clean',
    'features.group.control': 'Control & Privacy',
    'features.ai-classify.title': 'AI Folder Placement',
    'features.ai-classify.desc': 'Match messy links to the right folder.',
    'features.ai-organize.title': 'Folder Restructuring',
    'features.ai-organize.desc': 'Untangle deep bookmark bars with live Diff preview.',
    'features.ai-tags.title': 'Semantic Tags',
    'features.ai-tags.desc': '1–3 topic tags per link for instant filtering.',
    'features.ai-summary.title': 'Markdown Summaries',
    'features.ai-summary.desc': 'Skim long articles locally before opening.',
    'features.semantic-search.title': 'Hybrid & Semantic Search',
    'features.semantic-search.desc': 'Keywords, tags, page text, and local or API embeddings.',
    'features.snapshots.title': 'Offline Page Snapshots',
    'features.snapshots.desc': 'Clean article excerpts cached right in IndexedDB.',
    'features.diff-view.title': 'Side-by-Side Diff View',
    'features.diff-view.desc': 'Review every proposed change before it applies.',
    'features.commander.title': 'Dual-Pane & Command Palette',
    'features.commander.desc': 'Drag across columns or jump anywhere by keyboard.',
    'features.health-check.title': 'Link Health & Cleanup',
    'features.health-check.desc': 'Catch dead links, duplicates, and empty folders.',
    'features.undo-redo.title': 'One-Click Undo',
    'features.undo-redo.desc': 'Every batch edit snapshots cleanly for instant rollback.',
    'features.auto-process.title': 'Auto-Tag on Save',
    'features.auto-process.desc': 'Quietly classify and tag new bookmarks in the background.',
    'features.privacy.title': 'Privacy Mode',
    'features.privacy.desc': 'Zero servers. Strip URL paths down to domains before AI calls.',

    // Optional Power-User / Companion Bridge Band (calm secondary tier)
    'bridge.title': 'Work with Claude Code, Codex, Cursor, or local Agents',
    'bridge.desc':
      'Two ways to pair MarkShelf with the AI agents already on your machine over local Native Messaging—no third-party server needed.',
    'bridge.wayA.title': 'Agent → MarkShelf (CLI & Stdio MCP)',
    'bridge.wayA.desc':
      'Search bookmarks, read boundary-tagged snapshots, and triage your inbox with built-in one-line prompts. Proposed edits always wait in Pending Diff.',
    'bridge.wayB.title': 'MarkShelf → Local Agent CLI (Built-in Provider)',
    'bridge.wayB.desc':
      'Select installed claude, codex, gemini, omp, or custom CLI commands right in Settings to power auto-tagging, classification, and summaries without an extra API key.',
    'bridge.badge1': '@markshelf/companion · CLI & MCP',
    'bridge.badge2': 'Mandatory Diff approval',
    'bridge.badge3': 'Injection-safe boundary tags',
    'bridge.badge4': 'Local CLI as AI provider',

    // Screenshots
    'screenshots.title': 'See it in action',
    'screenshots.subtitle': 'Real screens from the extension.',
    'screenshots.home': 'Shelf — Folder tree, semantic search, and tag filters',
    'screenshots.organize': 'AI Organize — Side-by-side Diff with per-item checkboxes',
    'screenshots.healthcheck': 'Health Check — Dead links, duplicates, and empty folders',
    'screenshots.export': 'Backup — Clean import and export across browsers',
    'screenshots.settings-provider': 'AI Providers — OpenAI, Gemini, Anthropic, Gemini Nano, or Local Agent CLI',
    'screenshots.settings-skills': 'AI Skills — Customize every prompt template',

    // Bottom CTA band
    'ctaBand.title': 'Ready for a cleaner shelf?',
    'ctaBand.subtitle': 'Free for Chrome and Firefox. Local storage, your API key or local agent, instant undo.',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: November 2026',
    'privacy.intro':
      'MarkShelf is built local-first. We do not operate user accounts, tracking pixels, or bookmark sync servers. This policy explains clearly what stays on your device and when data leaves your browser.',
    'privacy.section1.title': '1. Data Collection & Usage',
    'privacy.section1.content':
      'MarkShelf does NOT collect, store, or transmit personal data to MarkShelf servers—we operate no backend servers or analytics databases. Your bookmarks, tags, page snapshots, embeddings, pending diffs, and audit logs live strictly inside your browser.',
    'privacy.section2.title': '2. Local Storage (IndexedDB & Extension Storage)',
    'privacy.section2.content':
      'All bookmark metadata, extracted page text snapshots (bookmarkContent), AI tags (bookmarkTags), local vector embeddings, pending Diff queues, and audit logs are stored in browser IndexedDB (MarkShelfDB) and chrome.storage. This data stays on your machine unless you explicitly trigger an AI provider call.',
    'privacy.section3.title': '3. AI Service Interaction & Privacy Mode',
    'privacy.section3.content':
      'When you invoke AI classification, tagging, organization, or summarization, MarkShelf sends only the required bookmark context directly from your browser to the provider you configured—such as OpenAI, Google Gemini, Anthropic, a local Ollama endpoint, browser-built-in Gemini Nano, or your own local Agent CLI (Claude Code, Codex, Gemini CLI, omp) over local Native Messaging. With Privacy Mode enabled, MarkShelf strips URL paths and query strings down to the domain name before sending.',
    'privacy.section4.title': '4. Browser Permissions Explained',
    'privacy.section4.p1': 'MarkShelf requests only the browser permissions required for its features:',
    'privacy.section4.bookmarks': 'bookmarks — Read and update your browser bookmark tree when you browse, move, or approve a Diff',
    'privacy.section4.storage': 'storage — Persist your extension settings, provider keys, and auto-process queue locally',
    'privacy.section4.alarms': 'alarms — Schedule background auto-processing and periodic link health checks',
    'privacy.section4.contextMenus': 'contextMenus — Add right-click quick actions for saving or inspecting bookmarks',
    'privacy.section4.tabs': 'tabs — Read the active tab URL and title when you click to save a bookmark',
    'privacy.section4.scripting': 'scripting — Extract clean page text locally for summaries and offline content snapshots',
    'privacy.section4.nativeMessaging': 'nativeMessaging (optional) — Connect the local @markshelf/companion host for CLI / MCP access and Local Agent CLI providers',
    'privacy.section5.title': '5. Third-Party Services & Optional Local Agents',
    'privacy.section5.content':
      'MarkShelf contains no analytics, telemetry, or advertising SDKs. External network requests happen only to your chosen AI provider or to check link health when you run a check. If you optionally pair the local @markshelf/companion host (for MCP/CLI access or using a local Agent CLI as a provider), communication runs strictly over local browser Native Messaging on your machine, and proposed agent edits always wait for human approval in the Pending Diff view.',
    'privacy.section6.title': '6. Data Security & Removal',
    'privacy.section6.content':
      'Because your library resides locally in your browser profile, uninstalling MarkShelf or clearing extension storage removes its IndexedDB cache while leaving your native browser bookmarks intact.',
    'privacy.section7.title': '7. Changes to This Policy',
    'privacy.section7.content':
      'When new capabilities change permissions or storage, we update this page alongside the release date above.',
    'privacy.section8.title': '8. Contact',
    'privacy.section8.content':
      'Questions or security reports? Open an issue on our GitHub repository.',

    // Donate
    'donate.title': 'Support MarkShelf',
    'donate.subtitle':
      'MarkShelf is free, open, and independent—with no subscriptions or data monetization. If it saves you hours of digging for lost links, consider supporting development.',
    'donate.thanks': 'Thank you for keeping independent tools alive',
    'donate.thanks.desc':
      'Every contribution funds ongoing browser compatibility updates, local embedding improvements, and keeping MarkShelf free without ads or accounts.',
    'donate.coffee.title': 'Buy Me a Coffee',
    'donate.coffee.desc': 'Quick one-time or monthly tip via Buy Me a Coffee.',
    'donate.coffee.cta': 'Buy a Coffee',
    'donate.crypto.title': 'Cryptocurrency Wallets',
    'donate.crypto.desc': 'Direct on-chain support. Copy any verified wallet address below.',
    'donate.crypto.copy': 'Copy address',
    'donate.crypto.copied': 'Copied',

    // Get Started
    'getStarted.title': 'Install MarkShelf',
    'getStarted.subtitle': 'Choose your browser to add MarkShelf in seconds—zero account signup required.',
    'getStarted.comingSoon': 'Coming Soon',
    'getStarted.comingSoonDesc': 'Edge Add-ons package is in preparation.',
    'getStarted.chrome.title': 'Google Chrome',
    'getStarted.chrome.desc': 'Official Chrome Web Store listing for Chrome & Chromium browsers',
    'getStarted.chrome.cta': 'Add to Chrome',
    'getStarted.firefox.title': 'Mozilla Firefox',
    'getStarted.firefox.desc': 'Official Firefox Add-ons (AMO) build with full feature parity',
    'getStarted.firefox.cta': 'Add to Firefox',
    'getStarted.edge.title': 'Microsoft Edge',
    'getStarted.edge.desc': 'Install MarkShelf from the Edge Add-ons Store',
    'getStarted.edge.cta': 'Add to Edge',
    'getStarted.stepsTitle': 'First 60 seconds after installing',
    'getStarted.step1.title': 'Pin the MarkShelf popup',
    'getStarted.step1.desc': 'Open it anytime with the toolbar icon—your browser New Tab stays untouched.',
    'getStarted.step2.title': 'Search or open the full shelf',
    'getStarted.step2.desc': 'Search immediately from the popup, or click to launch the full-page manager.',
    'getStarted.step3.title': 'Bring an AI key (optional)',
    'getStarted.step3.desc': 'Search offline via keywords & snapshots, add OpenAI / Gemini / Ollama, or pick a local Agent CLI in Settings.',
    'getStarted.agentTitle': 'Optional: Connect Local AI Agents',
    'getStarted.agentSubtitle': 'Already using Claude Code, Codex, Cursor, Gemini CLI, or omp? Pair them locally in two steps.',
    'getStarted.agentStep1.title': '1. Enable Agent Bridge',
    'getStarted.agentStep1.desc': 'Open MarkShelf Settings → Agent Bridge, grant optional Native Messaging permission, and copy your Extension ID.',
    'getStarted.agentStep2.title': '2. Register the local host',
    'getStarted.agentStep2.desc': 'Run npx @markshelf/companion install --ext-id <EXTENSION_ID> in your terminal to set up markshelf CLI, markshelf-mcp, and Local Agent CLI detection.',
    'getStarted.agentWayA': 'Way A · Let your Agent drive MarkShelf: copy a one-line prompt from Help → Agent Bridge into Claude Code, Cursor, or Codex to search snapshots or submit Pending Diffs.',
    'getStarted.agentWayB': 'Way B · Use local Agents inside MarkShelf: open Settings → Providers → Add provider → Local Agent CLI to detect claude / codex / omp / gemini for auto-tagging and summaries.',

    // Footer
    'footer.description': 'Local-first intelligent bookmark manager for Chrome, Firefox & Edge.',
    'footer.nav': 'Pages',
    'footer.links': 'Resources',
    'footer.github': 'Website Repository',
    'footer.chrome-store': 'Chrome Web Store',
    'footer.firefox-store': 'Firefox Add-ons',
    'footer.copyright': '© 2026 MarkShelf. All rights reserved.',
  },
  zh: {
    // Nav
    'nav.home': '概览',
    'nav.features': '功能',
    'nav.getStarted': '安装使用',
    'nav.privacy': '隐私政策',
    'nav.donate': '支持作者',

    // Hero
    'hero.title': '积灰几千条书签，一秒搜出来。',
    'hero.subtitle':
      '弹窗搜正文、AI 整理先看 Diff、随时一键撤销，绝不劫持新标签页。',
    'hero.cta.chrome': '添加到 Chrome',
    'hero.cta.firefox': '添加到 Firefox',
    'hero.cta.allBrowsers': '全部浏览器',
    'hero.trust.local': '纯本地 IndexedDB 存储',
    'hero.trust.newtab': '不改动新标签页',
    'hero.trust.byo': '支持 API Key、本地 Agent 或离线用',

    // Hero Interactive Catalog Drawer
    'drawer.badge': '可交互示例卡片盒',
    'drawer.tab.search': '弹窗搜索与正文快照',
    'drawer.tab.diff': '待审 Diff 预览',
    'drawer.searchPlaceholder': '试试搜 "offline sync"、"排版" 或 #rust…',
    'drawer.query.all': '全部 (4)',
    'drawer.query.offline': 'offline sync',
    'drawer.query.design': '排版',
    'drawer.query.diff': 'agent',
    'drawer.snapshotLabel': '本地正文摘录',
    'drawer.matchTitle': '标题命中',
    'drawer.matchSnapshot': '正文快照命中',
    'drawer.matchSemantic': '语义命中',
    'drawer.empty': '没有匹配的示例书签，清空关键词即可查看全部 4 条。',
    'drawer.diffHeader': '整理方案预览 · 移动 3 条，补充 2 个标签',
    'drawer.diffOrigin': '来源：本地 AI 整理 · 可随时撤销',
    'drawer.diffBefore': '当前位置',
    'drawer.diffAfter': '整理后位置',
    'drawer.diffApprove': '确认应用 (3)',
    'drawer.diffApproved': '已应用 · 可一键撤销',
    'drawer.diffUndo': '撤销',

    // Core Workflow Band
    'workflow.title': '找得快，理得稳，不越界',
    'workflow.subtitle': '日常用弹窗秒查，大扫除开全页，改错随时撤销。',
    'workflow.1.title': '弹窗即搜，全页按需',
    'workflow.1.desc':
      '点开扩展图标就能搜。只有整理目录时，才打开独立全页书架。',
    'workflow.1.meta': '弹窗主入口 · 独立全页 · 双栏拖拽',
    'workflow.2.title': '正文快照，忘名也能找',
    'workflow.2.desc':
      '网页正文摘录存在本地 IndexedDB，只记得只言片语也能搜到。',
    'workflow.2.meta': 'IndexedDB 快照 · 混合语义检索',
    'workflow.3.title': '先看 Diff，随时撤销',
    'workflow.3.desc':
      'AI 不会悄悄改你的目录。勾选确认才生效，不满意一键回滚。',
    'workflow.3.meta': '双栏 Diff · 逐条勾选 · 一键撤销',

    // Complete Capability Ledger
    'features.title': '混乱书签栏的解药',
    'features.subtitle': '功能齐全，但没有云端绑架。',
    'features.group.find': '查找与阅读',
    'features.group.organize': '整理与清理',
    'features.group.control': '掌控与隐私',
    'features.ai-classify.title': 'AI 智能归类',
    'features.ai-classify.desc': '自动把杂乱链接匹配到最合适的目录。',
    'features.ai-organize.title': '目录结构重构',
    'features.ai-organize.desc': '梳理庞杂书签栏，先对比 Diff 再应用。',
    'features.ai-tags.title': '语义标签',
    'features.ai-tags.desc': '自动生成 1–3 个主题标签，跨目录秒筛。',
    'features.ai-summary.title': 'Markdown 摘要',
    'features.ai-summary.desc': '不必点开原网页，本地直接速览要点。',
    'features.semantic-search.title': '混合与语义搜索',
    'features.semantic-search.desc': '关键词、标签、正文与向量混合检索。',
    'features.snapshots.title': '本地正文快照',
    'features.snapshots.desc': '文章摘录缓存在 IndexedDB，断网也能搜。',
    'features.diff-view.title': '双栏 Diff 预览',
    'features.diff-view.desc': '先看改动对比并逐条勾选，确认后落盘。',
    'features.commander.title': '双栏管理与命令面板',
    'features.commander.desc': '双栏跨目录拖拽，键盘快捷键直达操作。',
    'features.health-check.title': '死链体检与去重',
    'features.health-check.desc': '揪出失效链接、重复书签与空文件夹。',
    'features.undo-redo.title': '一键撤销历史',
    'features.undo-redo.desc': '每次批量操作自动留档，随时安全回滚。',
    'features.auto-process.title': '新书签静默整理',
    'features.auto-process.desc': '收藏新网页后，在后台自动完成归类打标。',
    'features.privacy.title': '隐私模式',
    'features.privacy.desc': '无中心服务器，AI 请求前自动脱敏 URL。',

    // Optional Bridge Band
    'bridge.title': '与 Claude Code、Codex、Cursor 等本地 Agent 双向协作',
    'bridge.desc':
      '通过本机 Native Messaging，既能让外部 Agent 操作书签库，也能直接调用本机 CLI 驱动扩展内 AI 功能，无需额外云端中转。',
    'bridge.wayA.title': 'Agent → MarkShelf（CLI 与 Stdio MCP）',
    'bridge.wayA.desc':
      '在「帮助 → Agent 协作」复制一句话 Prompt 发给 Claude Code、Cursor 或 Codex，检索书签、读取防注入快照与整理 Inbox，改动先入 Pending Diff 待审队列。',
    'bridge.wayB.title': 'MarkShelf → 本地 Agent CLI（内置 Provider）',
    'bridge.wayB.desc':
      '在「设置 → Provider」选用本机已安装的 claude、codex、gemini、omp 或自定义命令，无需另配 API Key 即可驱动自动打标、智能整理与摘要。',
    'bridge.badge1': '@markshelf/companion · CLI & MCP',
    'bridge.badge2': '强制 Diff 人工审批',
    'bridge.badge3': '防注入边界隔离',
    'bridge.badge4': '支持本地 CLI 作模型服务',

    // Screenshots
    'screenshots.title': '界面实拍',
    'screenshots.subtitle': '所见即所得的日间工作台。',
    'screenshots.home': '书架视图 — 目录树、语义搜索与标签筛选',
    'screenshots.organize': 'AI 整理 — 双栏 Diff 对比与逐条勾选确认',
    'screenshots.healthcheck': '健康检查 — 扫描死链、重复书签与空目录',
    'screenshots.export': '备份迁移 — 干净导出与跨浏览器导入',
    'screenshots.settings-provider': 'AI 服务商 — 接入 OpenAI、Gemini、Anthropic、Gemini Nano 或本地 Agent CLI',
    'screenshots.settings-skills': 'AI 技能 — 查看并定制每条 Prompt 模板',

    // Bottom CTA band
    'ctaBand.title': '给书签来一次清爽大扫除',
    'ctaBand.subtitle': 'Chrome 与 Firefox 免费安装。数据留本地，支持 API 或本地 Agent，改动可撤销。',

    // Privacy Policy
    'privacy.title': '隐私政策',
    'privacy.lastUpdated': '最后更新：2026 年 11 月',
    'privacy.intro':
      'MarkShelf 坚持本地优先原则。我们不提供云端账号、不埋设统计追踪代码，也不维护任何收集用户数据的服务器。本政策透明说明数据如何保存在你的设备中。',
    'privacy.section1.title': '1. 数据收集与使用',
    'privacy.section1.content':
      'MarkShelf 不会收集、存储或向任何 MarkShelf 服务器传输您的个人数据——我们没有任何后端服务器或分析数据库。您的书签、标签、正文快照、向量索引、待审 Diff 与操作审计日志均保存在您的浏览器本地。',
    'privacy.section2.title': '2. 本地存储（IndexedDB 与扩展存储）',
    'privacy.section2.content':
      '所有书签元数据、网页正文摘录（bookmarkContent）、AI 标签（bookmarkTags）、本地向量索引、待审 Diff 队列与审计日志均存储在浏览器 IndexedDB（MarkShelfDB）及 chrome.storage 中。除非您主动触发 AI 功能，这些数据不会离开本机。',
    'privacy.section3.title': '3. AI 服务交互与隐私模式',
    'privacy.section3.content':
      '当您主动使用 AI 分类、整理、打标或摘要时，MarkShelf 仅将必要上下文从浏览器发往您自行配置的服务——包括云端 API（OpenAI、Google Gemini、Anthropic）、本地端点（Ollama）、浏览器内置 Gemini Nano，或通过本机 Native Messaging 调用您本地已安装的 Agent CLI（如 Claude Code、Codex、Gemini CLI、omp）。开启「隐私模式」后，发送前会自动剥离 URL 的路径与查询参数，仅保留域名。',
    'privacy.section4.title': '4. 浏览器权限说明',
    'privacy.section4.p1': 'MarkShelf 仅申请实现功能所必需的最小浏览器权限：',
    'privacy.section4.bookmarks': 'bookmarks — 在您浏览、拖拽移动或批准 Diff 时读写浏览器书签树',
    'privacy.section4.storage': 'storage — 在本地保存扩展设置、服务商配置及后台处理队列',
    'privacy.section4.alarms': 'alarms — 调度后台自动整理与定期链接健康检查任务',
    'privacy.section4.contextMenus': 'contextMenus — 提供右键快捷菜单用于快速收藏或查看快照',
    'privacy.section4.tabs': 'tabs — 点击收藏时读取当前标签页标题与网址',
    'privacy.section4.scripting': 'scripting — 在本地提取网页正文，用于生成摘要与离线全文快照',
    'privacy.section4.nativeMessaging': 'nativeMessaging（可选）— 连接本地 @markshelf/companion 宿主进程，用于 CLI / MCP 对接与本地 Agent CLI 模型调用',
    'privacy.section5.title': '5. 第三方服务与可选本地 Agent',
    'privacy.section5.content':
      'MarkShelf 不包含任何统计分析、广告追踪或第三方埋点 SDK。对外网络请求仅发生在您配置的 AI 接口调用或手动触发链接体检时。若您可选启用本地 @markshelf/companion 伴侣（用于 MCP/CLI 对接或将本地 Agent CLI 作为模型服务），通信仅通过本机浏览器 Native Messaging 进行，且外部 Agent 提交的修改必须经过「整理 Diff」页面的人工确认。',
    'privacy.section6.title': '6. 数据安全与移除',
    'privacy.section6.content':
      '所有扩展缓存均随浏览器配置文件存放在本地。卸载 MarkShelf 或清除扩展数据会删除其本地 IndexedDB 缓存，不会损坏您的浏览器原生书签。',
    'privacy.section7.title': '7. 政策变更',
    'privacy.section7.content':
      '当新版本调整权限或存储方式时，我们会同步更新本页面内容及顶部的修订日期。',
    'privacy.section8.title': '8. 联系方式',
    'privacy.section8.content':
      '如有任何隐私或安全疑问，欢迎在我们的 GitHub 仓库提交 Issue。',

    // Donate
    'donate.title': '支持 MarkShelf',
    'donate.subtitle':
      'MarkShelf 免费、无广告，也没有云端订阅或数据变现。如果它帮你找回并理顺了积攒多年的书签，欢迎请作者喝杯咖啡。',
    'donate.thanks': '感谢每一份支持独立工具的心意',
    'donate.thanks.desc':
      '您的支持将直接用于浏览器新版本适配、端侧向量检索优化，以及让 MarkShelf 持续保持免费与纯粹。',
    'donate.coffee.title': 'Buy Me a Coffee',
    'donate.coffee.desc': '通过 Buy Me a Coffee 快速打赏或月度支持。',
    'donate.coffee.cta': '请我喝杯咖啡',
    'donate.crypto.title': '加密货币支持',
    'donate.crypto.desc': '支持链上直接转账，点击即可复制下方验证地址。',
    'donate.crypto.copy': '复制地址',
    'donate.crypto.copied': '已复制',

    // Get Started
    'getStarted.title': '安装 MarkShelf',
    'getStarted.subtitle': '选择你的浏览器，几秒钟完成安装——无需注册任何账号。',
    'getStarted.comingSoon': '即将上线',
    'getStarted.comingSoonDesc': 'Edge 商店安装包正在准备中，敬请期待。',
    'getStarted.chrome.title': 'Google Chrome',
    'getStarted.chrome.desc': '从 Chrome 应用商店安装，适用于 Chrome 及 Chromium 内核浏览器',
    'getStarted.chrome.cta': '添加到 Chrome',
    'getStarted.firefox.title': 'Mozilla Firefox',
    'getStarted.firefox.desc': '从 Firefox Add-ons 官方商店安装，完整功能同步',
    'getStarted.firefox.cta': '添加到 Firefox',
    'getStarted.edge.title': 'Microsoft Edge',
    'getStarted.edge.desc': '从 Edge 附加组件商店安装 MarkShelf',
    'getStarted.edge.cta': '添加到 Edge',
    'getStarted.stepsTitle': '安装后的前 60 秒',
    'getStarted.step1.title': '固定扩展图标到工具栏',
    'getStarted.step1.desc': '随时点击弹窗搜索或收藏当前网页，浏览器默认新标签页保持原样。',
    'getStarted.step2.title': '即搜即用，或打开完整书架',
    'getStarted.step2.desc': '弹窗内可直接搜标题、标签和正文；需要批量整理时再点开全页管理器。',
    'getStarted.step3.title': '按需配置 AI 服务（可选）',
    'getStarted.step3.desc': '不配 AI 也能离线搜正文快照；可在设置中添加 OpenAI / Gemini / Ollama，或直接选用本机 Agent CLI 开启智能整理。',
    'getStarted.agentTitle': '进阶可选：连接本地 AI Agent',
    'getStarted.agentSubtitle': '电脑里已经装了 Claude Code、Codex、Cursor、Gemini CLI 或 omp？两步即可本机打通。',
    'getStarted.agentStep1.title': '1. 开启 Agent 桥接权限',
    'getStarted.agentStep1.desc': '打开 MarkShelf「设置 → Agent 桥接」，授权可选的 Native Messaging 权限并复制扩展 ID。',
    'getStarted.agentStep2.title': '2. 注册本地宿主进程',
    'getStarted.agentStep2.desc': '在终端运行 npx @markshelf/companion install --ext-id <EXTENSION_ID>，一次配置好 markshelf CLI、markshelf-mcp 与本地 Agent 调用通道。',
    'getStarted.agentWayA': '方式 A · 让外部 Agent 操作书签：从「帮助 → Agent 协作」复制一句话 Prompt 发给 Claude Code、Cursor 或 Codex，搜快照或提交待审 Diff。',
    'getStarted.agentWayB': '方式 B · 把本地 Agent 当作扩展模型：在「设置 → Provider → 添加」选「本地 Agent CLI」，一键检测 claude / codex / omp / gemini 驱动自动打标与摘要。',

    // Footer
    'footer.description': '本地优先的浏览器智能书签管理器。',
    'footer.nav': '页面导航',
    'footer.links': '相关链接',
    'footer.github': '官网仓库',
    'footer.chrome-store': 'Chrome 应用商店',
    'footer.firefox-store': 'Firefox 附加组件',
    'footer.copyright': '© 2026 MarkShelf. 保留所有权利。',
  },
} as const;
