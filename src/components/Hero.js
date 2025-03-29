import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-1 order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary mb-0">{t('hero.greeting')}</p>
              <h1 className="display-4 fw-bold mb-3">{t('hero.name')}</h1>
              <h2 className="mb-4">{t('hero.title')}</h2>
              <p className="lead mb-5">{t('hero.description')}</p>
              <Button 
                variant="primary" 
                size="lg" 
                href="#projects"
                className="rounded-pill px-4 py-2"
              >
                {t('hero.cta')}
              </Button>
            </motion.div>
          </Col>
          <Col lg={6} className="order-lg-2 order-1 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="hero-image-container">
                <div className="hero-image rounded-circle d-inline-block overflow-hidden" style={{ width: '300px', height: '300px' }}>
                  <img 
                    src="/ChatGPTImage2025-3-7.png" 
                    alt={t('hero.name')} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
