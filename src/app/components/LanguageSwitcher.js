// components/LanguageSwitcher.js
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const LanguageSwitcher = () => {
  const { t, lang } = useTranslation();
  const router = useRouter();

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select value={lang} onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="km">Khmer</option>
    </select>
  );
};

export default LanguageSwitcher; // Export as default
