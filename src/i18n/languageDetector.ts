import { LanguageDetectorAsyncModule } from 'i18next';
import * as RNLocalize from 'react-native-localize';
import { Storage } from '~/Storage';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lng: string | readonly string[] | undefined) => void) => {
    const language = Storage.getString('@App:language');
    const locales = RNLocalize.getLocales() ?? [];
    let localLanguage = locales[0]?.languageCode;
    if (language) {
      callback(language);
    } else {
      callback(localLanguage);
    }
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    Storage.set('@App:language', language);
  },
};

export default languageDetector;
