import Head from 'next/head';
import Menu from '../components/menu';

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Menu | Good Company</title>
        <meta name="title" property="og:title" content="Menu | Good Company" />
        <meta
          name="description"
          property="og:description"
          content="See what's on the menu at Good Company this month"
          key="desc"
        />
      </Head>
      <Menu />
    </>
  );
}
