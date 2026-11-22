import { en } from './locales/en';
import { zh } from './locales/zh';
import { zhTw } from './locales/zh-tw';
import { ru } from './locales/ru';
import { ja } from './locales/ja';
import { de } from './locales/de';
import { es } from './locales/es';
import { fr } from './locales/fr';

export const languages = {
  en: 'English',
  zh: '简体中文',
  'zh-tw': '繁體中文',
  ja: '日本語',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  ru: 'Русский',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const ui: Record<Language, typeof en> = {
  en,
  zh,
  'zh-tw': zhTw,
  ja,
  de,
  es,
  fr,
  ru,
};
