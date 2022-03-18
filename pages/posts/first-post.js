import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log('FB Script loaded')}
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back home</a>
        </Link>
      </h2>
    </Layout>
  );
}
