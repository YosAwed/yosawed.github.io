import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// ブログ記事データのサンプル
const blogPosts = {
  'latest-project': {
    title: '最新のプロジェクトについて',
    date: '2025-03-15',
    content: `
      <p>最近取り組んでいるプロジェクトについての詳細と技術スタックについてご紹介します。</p>
      <h2>プロジェクト概要</h2>
      <p>このプロジェクトは、ユーザーが効率的にタスクを管理できるWebアプリケーションです。Next.jsとReactを使用して開発し、バックエンドにはNode.jsとExpressを採用しています。</p>
      <h2>使用技術</h2>
      <ul>
        <li>フロントエンド: Next.js, React, Bootstrap</li>
        <li>バックエンド: Node.js, Express</li>
        <li>データベース: MongoDB</li>
        <li>認証: NextAuth.js</li>
      </ul>
      <h2>実装した機能</h2>
      <p>主な機能として以下を実装しました：</p>
      <ul>
        <li>ユーザー認証（ログイン/登録）</li>
        <li>タスクの作成、編集、削除</li>
        <li>タスクのカテゴリ分け</li>
        <li>期限通知機能</li>
        <li>進捗状況の視覚化</li>
      </ul>
      <p>今後も機能追加を予定しています。</p>
    `
  },
  'nextjs-react-basics': {
    title: 'Next.jsとReactの基本',
    date: '2025-02-20',
    content: `
      <p>Next.jsとReactの基本的な使い方とベストプラクティスについて説明します。</p>
      <h2>Reactとは</h2>
      <p>Reactは、Facebookが開発したJavaScriptライブラリで、ユーザーインターフェイスを構築するためのものです。コンポーネントベースのアプローチを採用しており、再利用可能なUIパーツを作成できます。</p>
      <h2>Next.jsの利点</h2>
      <p>Next.jsはReactフレームワークで、以下のような機能を提供します：</p>
      <ul>
        <li>サーバーサイドレンダリング（SSR）</li>
        <li>静的サイト生成（SSG）</li>
        <li>ファイルベースのルーティング</li>
        <li>APIルート</li>
        <li>画像最適化</li>
      </ul>
      <h2>基本的な使い方</h2>
      <p>Next.jsプロジェクトの基本的な構造と、ページの作成方法について解説します。</p>
      <pre><code>
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
    </div>
  )
}
      </code></pre>
    `
  },
  'frontend-trends-2025': {
    title: 'フロントエンド開発のトレンド 2025',
    date: '2025-01-10',
    content: `
      <p>2025年のフロントエンド開発のトレンドと注目すべき技術についてご紹介します。</p>
      <h2>1. AIを活用した開発支援</h2>
      <p>AIを活用したコード生成や自動テストが一般的になり、開発効率が大幅に向上しています。</p>
      <h2>2. WebAssemblyの普及</h2>
      <p>WebAssemblyがさらに普及し、ブラウザ上での高性能アプリケーション開発が進んでいます。</p>
      <h2>3. マイクロフロントエンド</h2>
      <p>大規模アプリケーションでは、マイクロフロントエンドアーキテクチャが標準的になりつつあります。</p>
      <h2>4. サーバーレスアーキテクチャ</h2>
      <p>サーバーレスアーキテクチャとエッジコンピューティングの組み合わせが人気を集めています。</p>
      <h2>5. 型安全性の重視</h2>
      <p>TypeScriptの採用がさらに進み、型安全性を重視した開発が標準になっています。</p>
    `
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  // ページが完全にロードされるまでローディング表示
  if (router.isFallback || !slug) {
    return <div className="text-center p-5">Loading...</div>;
  }

  const post = blogPosts[slug];
  
  // 記事が見つからない場合
  if (!post) {
    return (
      <div>
        <Header />
        <Container className="py-5 text-center">
          <h1>記事が見つかりません</h1>
          <p>お探しの記事は存在しないか、移動した可能性があります。</p>
          <Link href="/blog">
            <Button variant="primary">ブログ一覧に戻る</Button>
          </Link>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{post.title} | ポートフォリオ</title>
        <meta name="description" content={`${post.title}についての記事`} />
      </Head>

      <Header />

      <Container className="py-5">
        <article>
          <h1 className="mb-3">{post.title}</h1>
          <p className="text-muted mb-4">{post.date}</p>
          
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-5">
            <Link href="/blog">
              <Button variant="outline-primary">← ブログ一覧に戻る</Button>
            </Link>
          </div>
        </article>
      </Container>

      <Footer />
    </div>
  );
}
