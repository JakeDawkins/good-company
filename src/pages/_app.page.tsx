import React from 'react';

import '../../globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Layout } from '../components';

import { Open_Sans } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ['latin']
})
 
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className={openSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </div>
    </ApolloProvider>
  );
}
