import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// プロジェクトデータ
const projectsData = {
  ja: [
    {
      id: 1,
      title: '次世代デジタルTV標準化プロジェクト',
      description: '国際標準化団体と連携し、次世代デジタルTVの標準規格策定に貢献。高品質映像伝送とユーザーインターフェースの改善において重要な役割を果たしました。特に画質向上と低遅延伝送の技術規格に関する提案が採用されました。',
      image: '/project1.png',
      technologies: ['デジタル放送', '標準化', '画質最適化', 'ユーザーインターフェース'],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: 'マルチメディアコンテンツ配信システム開発',
      description: 'デジタルコンテンツの効率的な配信と管理を可能にするシステムの設計と実装を主導。コンテンツ形式の最適化とメタデータ管理において革新的なアプローチを導入し、配信効率が30%向上しました。',
      image: '/project2.png',
      technologies: ['マルチメディア配信', 'コンテンツ管理', 'メタデータ最適化', 'システム設計'],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: 'スマートTVユーザーインターフェース改善',
      description: 'TV製品のユーザーインターフェースを全面的に改善し、操作性とアクセシビリティを向上させるプロジェクトを主導。ユーザー調査とデータ分析に基づいたデザイン改善により、顧客満足度が25%向上しました。',
      image: '/project3.png',
      technologies: ['UI/UXデザイン', 'ユーザビリティテスト', 'アクセシビリティ', 'データ分析'],
      github: null,
      demo: null,
      featured: false
    },
    {
      id: 4,
      title: 'デジタル放送国際標準化活動',
      description: '総務省での活動を通じて、国内外のデジタル放送規格の標準化に貢献。国際会議での技術提案や交渉を主導し、日本の放送技術の国際的な普及に尽力。複数の国際標準化団体との連携により、次世代放送技術の相互運用性と互換性の確保に重要な役割を果たしました。',
      image: '/project4.png',
      technologies: ['国際標準化', '技術交渉', 'デジタル放送規格', '国際会議'],
      github: null,
      demo: null,
      featured: false
    }
  ],
  en: [
    {
      id: 1,
      title: 'Next-Generation Digital TV Standardization Project',
      description: 'Contributed to the standardization of next-generation digital TV specifications in collaboration with international standardization bodies. Played a key role in improving high-quality video transmission and user interfaces. Notably, proposals related to image quality enhancement and low-latency transmission were adopted.',
      image: '/project1.png',
      technologies: ['Digital Broadcasting', 'Standardization', 'Image Quality Optimization', 'User Interface'],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: 'Multimedia Content Distribution System Development',
      description: 'Led the design and implementation of a system enabling efficient distribution and management of digital content. Introduced innovative approaches to content format optimization and metadata management, resulting in a 30% improvement in distribution efficiency.',
      image: '/project2.png',
      technologies: ['Multimedia Distribution', 'Content Management', 'Metadata Optimization', 'System Design'],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: 'Smart TV User Interface Enhancement',
      description: 'Led a project to comprehensively improve the user interface of TV products, enhancing operability and accessibility. Design improvements based on user research and data analysis resulted in a 25% increase in customer satisfaction.',
      image: '/project3.png',
      technologies: ['UI/UX Design', 'Usability Testing', 'Accessibility', 'Data Analysis'],
      github: null,
      demo: null,
      featured: false
    },
    {
      id: 4,
      title: 'Digital Broadcasting International Standardization',
      description: 'Contributed to the standardization of domestic and international digital broadcasting specifications through work at the Ministry of Internal Affairs and Communications. Led technical proposals and negotiations at international conferences, promoting Japanese broadcasting technology globally. Played a crucial role in ensuring interoperability and compatibility of next-generation broadcasting technologies through collaboration with multiple international standardization bodies.',
      image: '/project4.png',
      technologies: ['International Standardization', 'Technical Negotiation', 'Digital Broadcasting Standards', 'International Conferences'],
      github: null,
      demo: null,
      featured: false
    }
  ]
};

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const currentLang = i18n.language;
  
  // 表示するプロジェクトデータを選択
  const data = currentLang === 'ja' ? projectsData.ja : projectsData.en;
  
  // 表示するプロジェクト
  const displayProjects = showAll 
    ? data 
    : data.filter(project => project.featured);

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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-5">{t('projects.title')}</h2>
          
          <Row>
            {displayProjects.map((project, index) => (
              <Col lg={6} md={6} className="mb-4" key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-100 shadow-sm">
                    <div className="project-image-container" style={{ height: '200px', overflow: 'hidden' }}>
                      <Card.Img 
                        variant="top" 
                        src={project.image} 
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text className="text-muted mb-3">
                        {project.technologies.join(' · ')}
                      </Card.Text>
                      <Card.Text>
                        {project.description}
                      </Card.Text>
                      <div className="d-flex mt-3">
                        {project.github && (
                          <Button 
                            variant="outline-dark" 
                            size="sm" 
                            href={project.github} 
                            target="_blank"
                            className="me-2"
                          >
                            <FaGithub className="me-1" /> {t('projects.viewCode')}
                          </Button>
                        )}
                        {project.demo && (
                          <Button 
                            variant="outline-primary" 
                            size="sm" 
                            href={project.demo} 
                            target="_blank"
                          >
                            <FaExternalLinkAlt className="me-1" /> {t('projects.visitSite')}
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          
          {!showAll && projectsData.ja.length > displayProjects.length && (
            <div className="text-center mt-4">
              <Button 
                variant="outline-primary" 
                onClick={() => setShowAll(true)}
              >
                {t('projects.viewDetails')}
              </Button>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
