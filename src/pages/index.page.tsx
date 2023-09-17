import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/header';

import Logo from '../assets/good-company-logo-fall.png';
import JakeAndEmily from '../assets/jake-and-emily.jpg';
import JakeAndEmily2 from '../assets/jake-and-emily-2.jpg';
import Upcoming from '../components/upcoming';

function Home() {
  return (
    <>
      <Head>
        <title>Home | Good Company</title>
        <meta
          name="description"
          property="og:description"
          content="Here for a silly time, not a long time"
          key="desc"
        />
      </Head>
      <Header />

      <div className="flex flex-row justify-center items-center">
        <Image src={Logo} alt="Good company logo" height={150} />
      </div>

      <div className="flex justify-center flex-col items-center">
        <p className="uppercase font-bold leading-snug text-center">
          Here for a silly time,
          <br />
          not a long time
        </p>
      </div>

      <Upcoming />

      <div className="flex flex-row justify-center items-center mt-8 flex-wrap -ml-4">
        <Image
          src={JakeAndEmily}
          alt="Jake and Emily"
          height={300}
          className="flex-1 ml-4 mb-4"
        />
        <Image
          src={JakeAndEmily2}
          alt="Jake and Emily"
          height={300}
          className="ml-4 flex-1 mb-4"
        />
      </div>
    </>
  );
}

export default Home;
