import { ui, defaultLang, type Language } from './ui';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslation(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as any)[key] || (ui[defaultLang] as any)[key] || key;
  };
}

export function getLocalizedPath(lang: Language, path: string): string {
  return `/${lang}${path}`;
}

export function getAlternateLang(lang: Language): Language {
  return lang === 'en' ? 'zh' : 'en';
}
