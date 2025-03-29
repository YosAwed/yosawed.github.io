import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 翻訳リソース
const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',
      
      // Home
      'hero.greeting': 'Hello, my name is',
      'hero.name': 'Yoshiharu Dewa',
      'hero.title': 'Digital Media Technologist',
      'hero.description': 'I have been engaged in research and development of digital broadcasting standardization and multimedia technology for many years.',
      'hero.cta': 'View Projects',
      
      // About
      'about.title': 'About Me',
      'about.description': 'As a specialist in digital media technology and broadcasting standards, I have been involved in research and development of information and communication technology for many years.',
      'about.expertise': 'My expertise is in digital broadcasting standards and multimedia content optimization. I am particularly passionate about developing technologies that provide high-quality video experiences.',
      'about.career': 'After gaining experience at Pioneer and Sony, I currently serve as a TV product development leader at LG Japan Lab. I have also contributed to the standardization of domestic and international digital broadcasting specifications through my work at the Ministry of Internal Affairs and Communications.',
      'about.passion': 'I am always focused on the latest technological trends and passionate about developing innovative solutions.',
      'about.contribution': 'I aim to contribute to shaping the next generation of media experiences by combining technology and creativity.',
      
      // Skills
      'skills.title': 'Skills',
      'skills.frontend': 'Media Technology',
      'skills.backend': 'Management',
      'skills.tools': 'Research & Development',
      
      // Projects
      'projects.title': 'Projects',
      'projects.viewDetails': 'View Details',
      'projects.visitSite': 'Visit Site',
      'projects.viewCode': 'View Code',
      
      // Experience
      'experience.title': 'Experience',
      'experience.education': 'Education',
      'experience.work': 'Work Experience',
      
      // Contact
      'contact.title': 'Contact',
      'contact.description': 'Feel free to reach out to me.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send',
      'contact.success': 'Message sent successfully.',
      'contact.error': 'An error occurred while sending the message.',
      'contact.contactInfo': 'Contact Information',
      'contact.address': 'Address',
      'contact.addressValue': 'Shinagawa, Tokyo, Japan',
      'contact.professionalNetwork': 'Professional Network',
      'contact.contactForm': 'Contact Form',
      
      // Footer
      'footer.rights': 'All rights reserved.',
      
      // Theme
      'theme.dark': 'Dark Mode',
      'theme.light': 'Light Mode',
      
      // Language
      'lang.ja': 'Japanese',
      'lang.en': 'English'
    }
  },
  ja: {
    translation: {
      // ナビゲーション
      'nav.home': 'ホーム',
      'nav.about': '自己紹介',
      'nav.skills': 'スキル',
      'nav.projects': 'プロジェクト',
      'nav.experience': '経歴',
      'nav.contact': 'お問い合わせ',
      
      // ホーム
      'hero.greeting': 'こんにちは、私の名前は',
      'hero.name': '出葉義治',
      'hero.title': 'デジタルメディア技術者',
      'hero.description': '長年にわたりデジタル放送標準化とマルチメディア技術の研究開発に従事してきました。',
      'hero.cta': 'プロジェクトを見る',
      
      // 自己紹介
      'about.title': '自己紹介',
      'about.description': 'デジタル放送標準化とマルチメディアフォーマット研究の専門家として、長年にわたり情報通信技術の研究開発に従事してきました。',
      'about.expertise': '私の専門分野は、デジタル放送規格の標準化とマルチメディアコンテンツの最適化です。特に、高品質な映像体験を提供する技術の開発に情熱を持っています。',
      'about.career': 'パイオニアとソニーでの経験を経て、現在はLG Japan Labで製品開発のリーダーを務めています。また、総務省での活動を通じて、国内外のデジタル放送規格の標準化にも貢献してきました。',
      'about.passion': '常に最新の技術動向に注目し、革新的なソリューションの開発に情熱を持って取り組んでいます。',
      'about.contribution': '技術と創造性を融合させ、次世代のメディア体験を形作ることに貢献したいと考えています。',
      
      // スキル
      'skills.title': 'スキル',
      'skills.frontend': 'メディア技術',
      'skills.backend': 'マネジメント',
      'skills.tools': '研究開発',
      
      // プロジェクト
      'projects.title': 'プロジェクト',
      'projects.viewDetails': '詳細を見る',
      'projects.visitSite': 'サイトを訪問',
      'projects.viewCode': 'コードを見る',
      
      // 経歴
      'experience.title': '経歴',
      'experience.education': '学歴',
      'experience.work': '職歴',
      
      // お問い合わせ
      'contact.title': 'お問い合わせ',
      'contact.description': 'お気軽にご連絡ください。',
      'contact.name': 'お名前',
      'contact.email': 'メールアドレス',
      'contact.message': 'メッセージ',
      'contact.send': '送信',
      'contact.success': 'メッセージを送信しました。',
      'contact.error': '送信中にエラーが発生しました。',
      'contact.contactInfo': '連絡先情報',
      'contact.address': '住所',
      'contact.addressValue': '東京都品川区',
      'contact.professionalNetwork': 'プロフェッショナルネットワーク',
      'contact.contactForm': 'お問い合わせフォーム',
      
      // フッター
      'footer.rights': 'All rights reserved.',
      
      // テーマ
      'theme.dark': 'ダークモード',
      'theme.light': 'ライトモード',
      
      // 言語
      'lang.ja': '日本語',
      'lang.en': '英語'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // デフォルト言語を英語に設定
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // XSS対策が不要な場合はfalse
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;
