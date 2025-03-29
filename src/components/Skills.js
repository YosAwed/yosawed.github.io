import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// スキルデータ
const skillsData = {
  ja: {
    mediatech: [
      { name: 'デジタル放送規格', level: 95 },
      { name: 'マルチメディアフォーマット', level: 92 },
      { name: 'TV製品開発', level: 90 },
      { name: '映像技術', level: 88 },
      { name: '標準化活動', level: 95 },
      { name: 'コンテンツ形式設計', level: 85 },
    ],
    management: [
      { name: 'プロジェクト管理', level: 90 },
      { name: '戦略的アライアンス', level: 85 },
      { name: '技術リーダーシップ', level: 88 },
      { name: '予算管理', level: 82 },
      { name: '国際標準化交渉', level: 90 },
    ],
    technical: [
      { name: '研究開発', level: 92 },
      { name: '技術文書作成', level: 88 },
      { name: '特許出願', level: 85 },
      { name: '技術戦略立案', level: 88 },
    ],
  },
  en: {
    mediatech: [
      { name: 'Digital Broadcasting Standards', level: 95 },
      { name: 'Multimedia Formats', level: 92 },
      { name: 'TV Product Development', level: 90 },
      { name: 'Video Technology', level: 88 },
      { name: 'Standardization Activities', level: 95 },
      { name: 'Content Format Design', level: 85 },
    ],
    management: [
      { name: 'Project Management', level: 90 },
      { name: 'Strategic Alliances', level: 85 },
      { name: 'Technical Leadership', level: 88 },
      { name: 'Budget Management', level: 82 },
      { name: 'International Standardization', level: 90 },
    ],
    technical: [
      { name: 'Research & Development', level: 92 },
      { name: 'Technical Documentation', level: 88 },
      { name: 'Patent Applications', level: 85 },
      { name: 'Technical Strategy Planning', level: 88 },
    ],
  }
};

const Skills = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState({});
  const currentLang = i18n.language;

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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // アニメーション処理
  useEffect(() => {
    if (isVisible) {
      const data = currentLang === 'ja' ? skillsData.ja : skillsData.en;
      const allSkills = [
        ...data.mediatech,
        ...data.management,
        ...data.technical
      ];
      
      const initialLevels = {};
      allSkills.forEach(skill => {
        initialLevels[skill.name] = 0;
      });
      
      setAnimatedLevels(initialLevels);
      
      // スキルレベルのアニメーション
      const timer = setTimeout(() => {
        const finalLevels = {};
        allSkills.forEach(skill => {
          finalLevels[skill.name] = skill.level;
        });
        setAnimatedLevels(finalLevels);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, currentLang]);

  // 現在の言語に応じたデータを選択
  const data = currentLang === 'ja' ? skillsData.ja : skillsData.en;

  return (
    <section id="skills" className="py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-5">{t('skills.title')}</h2>
          
          <Row>
            {/* メディア技術 */}
            <Col lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h4 mb-4">{t('skills.frontend')}</h3>
                  
                  {data.mediatech.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{skill.name}</span>
                        <span>{animatedLevels[skill.name] || 0}%</span>
                      </div>
                      <ProgressBar 
                        now={animatedLevels[skill.name] || 0} 
                        variant="primary" 
                        style={{ height: '8px' }}
                      />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
            
            {/* マネジメント */}
            <Col lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h4 mb-4">{t('skills.backend')}</h3>
                  
                  {data.management.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{skill.name}</span>
                        <span>{animatedLevels[skill.name] || 0}%</span>
                      </div>
                      <ProgressBar 
                        now={animatedLevels[skill.name] || 0} 
                        variant="success" 
                        style={{ height: '8px' }}
                      />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
            
            {/* 研究開発 */}
            <Col lg={4} md={12} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h4 mb-4">{t('skills.tools')}</h3>
                  
                  {data.technical.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{skill.name}</span>
                        <span>{animatedLevels[skill.name] || 0}%</span>
                      </div>
                      <ProgressBar 
                        now={animatedLevels[skill.name] || 0} 
                        variant="info" 
                        style={{ height: '8px' }}
                      />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
