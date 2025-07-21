import Head from 'next/head';
import SearchBox from '@/components/molecules/SearchBox';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mercado Libre Challenge</title>
      </Head>
      <SearchBox />
    </>
  );
}