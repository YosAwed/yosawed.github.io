import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div className="mb-3">
              <a 
                href="https://x.com/Awed_Urshy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white me-3"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://github.com/dewa-yoshiharu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white me-3"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yosawed68000/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white me-3"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://www.facebook.com/urshy.awed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white me-3"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
            <p className="mb-0">&copy; {currentYear} {t('hero.name')}. {t('footer.rights')}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
