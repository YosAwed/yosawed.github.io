import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin, FaHome, FaPhone, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // ここに実際のフォーム送信処理を追加
      // 例: EmailJSやFormspreeなどのサービスを使用
      
      // 送信成功時の処理（デモ用）
      setTimeout(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: t('contact.success') }
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 1000);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: t('contact.error') }
      });
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-5">{t('contact.title')}</h2>
          
          <Row className="justify-content-center">
            <Col md={6} lg={5} className="mb-4">
              <h3 className="h4 mb-3">{t('contact.contactForm')}</h3>
              
              {status.info.error && (
                <Alert variant="danger">
                  {status.info.msg}
                </Alert>
              )}
              
              {status.submitted && (
                <Alert variant="success">
                  {status.info.msg}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>{t('contact.name')}</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>{t('contact.email')}</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>{t('contact.message')}</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  disabled={status.submitting}
                  className="w-100"
                >
                  {status.submitting ? 'Sending...' : t('contact.send')}
                </Button>
              </Form>
            </Col>
            
            <Col md={6} lg={5} className="mb-4">
              <h3 className="h4 mb-3">{t('contact.contactInfo')}</h3>
              
              <div className="mb-4">
                <p className="mb-1"><strong>Email:</strong></p>
                <p className="d-flex align-items-center">
                  <FaEnvelope className="me-2" />
                  <a href="mailto:yoshiharu.dewa@gmail.com">yoshiharu.dewa@gmail.com</a>
                </p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>{t('contact.address')}:</strong></p>
                <p className="d-flex align-items-center">
                  <FaHome className="me-2" />
                  {t('contact.addressValue')}
                </p>
              </div>
              
              <h3 className="h4 mb-3">{t('contact.professionalNetwork')}</h3>
              
              <div className="d-flex flex-column">
                <a href="https://www.linkedin.com/in/yosawed68000/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center mb-2">
                  <FaLinkedin className="me-2" /> LinkedIn
                </a>
                
                <a href="https://x.com/Awed_Urshy" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center mb-2">
                  <FaTwitter className="me-2" /> X
                </a>
                
                <a href="https://github.com/dewa-yoshiharu" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center mb-2">
                  <FaGithub className="me-2" /> GitHub
                </a>

                <a href="https://www.facebook.com/urshy.awed" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center mb-2">
                  <FaFacebook className="me-2" /> Facebook
                </a>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
