import React from 'react';
import Menu from '../components/menu';

function Home() {

  return (
    <>
      <h1 className="text-4xl font-light " style={{
        color: '#482E1D'
      }}>Good Company</h1>
      <p className="">
        Good fuckin' coffee & pastries for good fuckin' people.
      </p>
      <Menu />
    </>
  );
}

export default Home;
