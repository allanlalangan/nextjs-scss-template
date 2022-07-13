import Head from 'next/head';
import Image from 'next/image';

// components
import { Header } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-scss-template</title>
        <meta name='description' content='Create Next App' />
      </Head>
      <div>
        <Header />
        <h1>Create Next App</h1>
      </div>
    </>
  );
}
