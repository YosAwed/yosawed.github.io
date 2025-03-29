import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Header = ({ darkMode }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  // スクロール時のヘッダー変更効果
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`${scrolled ? 'shadow-sm' : ''} ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="fw-bold">{t('hero.name')}</Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link active={router.pathname === '/'}>{t('nav.home')}</Nav.Link>
            </Link>
            
            <Link href="/#about" passHref legacyBehavior>
              <Nav.Link>{t('nav.about')}</Nav.Link>
            </Link>
            
            <Link href="/#skills" passHref legacyBehavior>
              <Nav.Link>{t('nav.skills')}</Nav.Link>
            </Link>
            
            <Link href="/#projects" passHref legacyBehavior>
              <Nav.Link>{t('nav.projects')}</Nav.Link>
            </Link>
            
            <Link href="/#experience" passHref legacyBehavior>
              <Nav.Link>{t('nav.experience')}</Nav.Link>
            </Link>
            
            <Link href="/#contact" passHref legacyBehavior>
              <Nav.Link>{t('nav.contact')}</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
