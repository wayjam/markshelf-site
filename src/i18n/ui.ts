import { en } from './locales/en';
import { zh } from './locales/zh';
import { ru } from './locales/ru';
import { ja } from './locales/ja';
import { de } from './locales/de';

export const languages = {
  en: 'English',
  zh: '简体中文',
  ru: 'Русский',
  ja: '日本語',
  de: 'Deutsch',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const ui: Record<Language, typeof en> = {
  en,
  zh,
  ru,
  ja,
  de,
};
