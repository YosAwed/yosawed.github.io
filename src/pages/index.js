import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';

export default function Home() {
  // ダークモード状態管理
  const [darkMode, setDarkMode] = useState(false);
  
  // ページロード時にローカルストレージからダークモード設定を読み込む
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      // ユーザーのシステム設定を確認
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // ダークモード切替時にローカルストレージに保存
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Head>
        <title>ポートフォリオ | 出葉義治</title>
        <meta name="description" content="出葉義治のポートフォリオサイト。デジタルメディア技術者、TV製品開発リーダーとしての実績と経験を紹介しています。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header darkMode={darkMode} />
      
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1030 }}>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <LanguageSelector />
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
