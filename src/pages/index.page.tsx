import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/header';

import Logo from '../assets/good-company-logo.png';
import JakeAndEmily from '../assets/jake-and-emily.jpg';

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

      <div className="flex flex-row justify-center items-center mt-12">
        <Image src={JakeAndEmily} alt="Jake and Emily" height={300} />
      </div>
    </>
  );
}

export default Home;
