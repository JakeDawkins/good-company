import React from 'react';
import ErrorBoundary from '../errorBoundary';
import Footer from '../footer';
import Nav from '../nav';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="title" property="og:title" content="Good Company" />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content="https://www.goodcompany.coffee/goodcompany-card.png"
        />
        <meta
          name="url"
          property="og:url"
          content="https://www.goodcompany.coffee"
        />
      </Head>
      <div
        className="flex flex-col mx-auto w-full absolute top-0 bottom-0 right-0 left-0 p-4 pb-8"
        style={{
          maxWidth: 768,
        }}
      >
        <ErrorBoundary>
          <nav className="mb-12">
            <Nav />
          </nav>
          <main>{children}</main>
        </ErrorBoundary>

        <div className="mt-12" />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
