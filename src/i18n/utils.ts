import { ui, defaultLang, languages, type Language } from './ui';

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslation(lang: Language) {
  const dict = ui[lang] || ui[defaultLang];
  const fallback = ui[defaultLang];
  return function t(key: TranslationKey): string {
    return dict[key] ?? fallback[key] ?? key;
  };
}

export function getLocalizedPath(lang: Language, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}

export function getAlternateLang(lang: Language): Language {
  return lang === 'en' ? 'zh' : 'en';
}

export function getLanguageList(): Array<{ code: Language; label: string }> {
  return (Object.keys(languages) as Language[]).map((code) => ({
    code,
    label: languages[code],
  }));
}
