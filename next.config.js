/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // GitHub Pagesでの画像最適化を無効化
  },
  // GitHub Pagesでの静的エクスポート用設定
  output: 'export',
  // GitHub Pagesのベースパス設定
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
}

module.exports = nextConfig
