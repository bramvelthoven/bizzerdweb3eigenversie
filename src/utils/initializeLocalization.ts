

import {dutch, english} from '../locales';
import { setTranslations, setLocale } from 'react-i18nify';



export default (): void =>{
  setTranslations({
      nl: dutch,
      en: english
  });
  setLocale('en')
}
