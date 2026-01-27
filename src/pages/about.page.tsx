import Link from 'next/link';
import About from '../components/about';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Good Company</title>
        <meta
          name="description"
          property="og:description"
          key="desc"
          content="A monthly coffee shop, hosted by Jake Dawkins and Emily Gaudet in Valencia to bring people together. See what we're about and who we are here."
        />
      </Head>
      <About />
    </>
  );
}
