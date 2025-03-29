import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// i18nu8a2du5b9a
import '../utils/i18n';
// Bootstrap CSSをインポート
import 'bootstrap/dist/css/bootstrap.min.css';
// グローバルCSSをインポート
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Bootstrap JSu3092u30afu30e9u30a4u30a2u30f3u30c8u30b5u30a4u30c9u3067u8aadu307fu8fbcu3080
  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
