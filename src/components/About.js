import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="mb-4">{t('about.title')}</h2>
              <div className="mb-4">
                <img 
                  src="/ChatGPTImage2025-3-7.png" 
                  alt={t('hero.name')} 
                  className="rounded-circle mb-4" 
                  width="150" 
                  height="150"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="lead mb-4">{t('about.description')}</p>
              <p>
                {t('about.expertise')}
              </p>
              <p>
                {t('about.career')}
              </p>
              <p>
                {t('about.passion')}
              </p>
              <p>
                {t('about.contribution')}
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
