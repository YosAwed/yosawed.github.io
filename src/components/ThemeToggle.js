import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();

  return (
    <Button
      variant={darkMode ? 'light' : 'dark'}
      size="sm"
      className="rounded-circle p-2"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? t('theme.light') : t('theme.dark')}
      title={darkMode ? t('theme.light') : t('theme.dark')}
      style={{ width: '40px', height: '40px' }}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ThemeToggle;
