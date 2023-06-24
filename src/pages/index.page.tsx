import React from 'react';
import Menu from '../components/menu';
import Carousel from '../components/carousel';
import Coffee from '../components/coffee';

function Home() {

  return (
    <>
      <h1 className="text-4xl font-light " style={{
        color: '#482E1D'
      }}>Good Company</h1>
      <p className="">
        Good fuckin' coffee & pastries for good fuckin' people.
      </p>
      <div className="mt-8" />
      <Carousel />
      <div className="mt-8" />
      <Menu />
      <div className="mt-8" />
      <Coffee />
    </>
  );
}

export default Home;
