import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译资源
import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  zh: {
    translation: zhTranslation
  }
};

i18n
  // 检测用户语言
  .use(LanguageDetector)
  // 传递 i18n 实例给 react-i18next
  .use(initReactI18next)
  // 初始化 i18next
  .init({
    resources,
    fallbackLng: 'zh', // 默认使用中文作为备用语言
    debug: true, // 开发环境下启用调试信息

    // 语言检测配置
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // 缓存用户选择的语言
      lookupLocalStorage: 'i18nextLng' // localStorage 键名
    },

    interpolation: {
      escapeValue: false // React 已经默认转义
    },

    // 命名空间配置
    defaultNS: 'translation',
    ns: ['translation']
  });

export default i18n;