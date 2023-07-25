import React from 'react';
import Image from 'next/image';
import Logo from '../assets/good-company-logo.png';
import Header from '../components/header';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Home | Good Company</title>
        <meta
          name="description"
          content="A monthly coffee shop, hosted by Jake Dawkins and Emily Gaudet in NYC to bring people together."
          key="desc"
        />
      </Head>
      <Header />
      <div className="flex flex-row justify-center items-center">
        <Image src={Logo} alt="Good company logo" height={150} />
      </div>
    </>
  );
}

export default Home;
