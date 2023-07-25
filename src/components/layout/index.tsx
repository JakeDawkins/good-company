import React from 'react';
import ErrorBoundary from '../errorBoundary';
import Footer from '../footer';
import Nav from '../nav';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
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

      <div className="mt-8" />
      <Footer />
    </div>
  );
}

export default Layout;
