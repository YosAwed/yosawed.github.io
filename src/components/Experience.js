import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// 経歴データ
const experienceData = {
  ja: {
    education: [
      {
        id: 1,
        institution: '北海道大学大学院工学研究科',
        degree: '情報工学専攻',
        period: '1989 - 1993',
        description: '工学研究科にて情報工学を専攻。'
      }
    ],
    work: [
      {
        id: 1,
        company: 'LG Japan Lab.株式会社',
        position: 'TV製品開発リーダー',
        period: '2020年04月 - 現在',
        description: '日本研究所にてTV製品の開発リーダーとして従事。'
      },
      {
        id: 2,
        company: 'ソニー株式会社',
        position: 'コーポレート戦略部門',
        period: '2018年08月 - 2020年03月',
        description: '本社戦略部門にてゲーム映像技術の社内外アライアンスを担当。'
      },
      {
        id: 3,
        company: '総務省',
        position: '国際戦略局',
        period: '2016年08月 - 2018年07月',
        description: '国際戦略局にて総務省直轄プロジェクトの企画立案・予算を担当。'
      },
      {
        id: 4,
        company: 'ソニー株式会社',
        position: '情報通信研究所',
        period: '1998年10月 - 2016年07月',
        description: '研究開発本部にて国内外デジタル放送標準化に従事。2000年04月～2002年07月には本社直轄プロジェクト（ソシオメディア研究室）にて情報コミュニティのためのコンテンツ形式の基礎開発も担当。'
      },
      {
        id: 5,
        company: 'パイオニア株式会社',
        position: '総合研究所',
        period: '1993年04月 - 1998年09月',
        description: '総合研究所にてマルチメディアフォーマットの研究開発に従事。'
      }
    ]
  },
  en: {
    education: [
      {
        id: 1,
        institution: 'Hokkaido University Graduate School of Engineering',
        degree: 'Information Engineering',
        period: '1989 - 1993',
        description: 'Specialized in Information Engineering at the Graduate School of Engineering.'
      }
    ],
    work: [
      {
        id: 1,
        company: 'LG Japan Lab Inc.',
        position: 'TV Product Development Leader',
        period: 'April 2020 - Present',
        description: 'Leading TV product development at the Japanese research center.'
      },
      {
        id: 2,
        company: 'Sony Corporation',
        position: 'Corporate Strategy Division',
        period: 'August 2018 - March 2020',
        description: 'Responsible for internal and external alliances for game video technology in the corporate strategy division.'
      },
      {
        id: 3,
        company: 'Ministry of Internal Affairs and Communications',
        position: 'International Strategy Bureau',
        period: 'August 2016 - July 2018',
        description: 'Responsible for planning and budgeting for direct ministry projects at the International Strategy Bureau.'
      },
      {
        id: 4,
        company: 'Sony Corporation',
        position: 'Information Communication Research Institute',
        period: 'October 1998 - July 2016',
        description: 'Engaged in domestic and international digital broadcasting standardization at the Research and Development Headquarters. From April 2000 to July 2002, also responsible for the basic development of content formats for information communities in a direct corporate project (Socio-Media Research Laboratory).'
      },
      {
        id: 5,
        company: 'Pioneer Corporation',
        position: 'General Research Institute',
        period: 'April 1993 - September 1998',
        description: 'Engaged in research and development of multimedia formats at the General Research Institute.'
      }
    ]
  }
};

const Experience = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // 現在の言語に応じたデータを選択
  const data = currentLang === 'ja' ? experienceData.ja : experienceData.en;

  return (
    <section id="experience" className="py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-5">{t('experience.title')}</h2>
          
          <Row>
            {/* 学歴 */}
            <Col lg={6} className="mb-4">
              <h3 className="h4 mb-4">{t('experience.education')}</h3>
              
              {data.education.map((edu) => (
                <Card key={edu.id} className="mb-3 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="h5 mb-1">{edu.institution}</h4>
                        <p className="mb-1">{edu.degree}</p>
                      </div>
                      <span className="text-muted">{edu.period}</span>
                    </div>
                    <p className="mt-2 mb-0">{edu.description}</p>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            
            {/* 職歴 */}
            <Col lg={6} className="mb-4">
              <h3 className="h4 mb-4">{t('experience.work')}</h3>
              
              {data.work.map((work) => (
                <Card key={work.id} className="mb-3 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h4 className="h5 mb-1">{work.company}</h4>
                        <p className="mb-1">{work.position}</p>
                      </div>
                      <span className="text-muted">{work.period}</span>
                    </div>
                    <p className="mt-2 mb-0">{work.description}</p>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
