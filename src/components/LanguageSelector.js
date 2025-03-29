import { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  // 言語切替処理
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  // 初期言語設定（ローカルストレージから読み込み）
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <Dropdown className="mt-2">
      <Dropdown.Toggle 
        variant="light" 
        size="sm" 
        className="rounded-pill"
        id="language-dropdown"
      >
        <FaLanguage className="me-1" />
        {i18n.language === 'ja' ? '日本語' : 'English'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item 
          onClick={() => changeLanguage('ja')} 
          active={i18n.language === 'ja'}
        >
          {t('lang.ja')}
        </Dropdown.Item>
        <Dropdown.Item 
          onClick={() => changeLanguage('en')} 
          active={i18n.language === 'en'}
        >
          {t('lang.en')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
