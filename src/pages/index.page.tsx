import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/header';

import Logo from '../assets/good-company-logo-spring.png';
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
      <div className="min-h-screen pb-12">
        <Header />

        <div className="flex flex-row justify-center items-center py-2 md:py-8">
          <Image src={Logo} alt="Good company logo" height={150} />
        </div>

        <div className="flex justify-center flex-col items-center mb-3 md:mb-6">
          <p className="uppercase font-semibold leading-snug text-center text-slate tracking-wide text-sm">
            Here for a silly time,
            <br />
            not a long time
          </p>
        </div>

        <Upcoming />

        <div className="flex flex-row justify-center items-center mt-12 flex-wrap gap-6 px-4 max-w-6xl mx-auto">
          <div className="flex-1 min-w-70 rounded-lg overflow-hidden border border-sage/50">
            <Image
              src={JakeAndEmily}
              alt="Jake and Emily"
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 min-w-70 rounded-lg overflow-hidden border border-sage/50">
            <Image
              src={JakeAndEmily2}
              alt="Jake and Emily"
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
