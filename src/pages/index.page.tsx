import React from 'react';
import Image from 'next/image';
import Logo from '../assets/good-company-logo.png';
import Header from '../components/header';

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-center items-center">
        <Image src={Logo} alt="Good company logo" height={150} />
      </div>
    </>
  );
}

export default Home;
