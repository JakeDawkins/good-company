import React from 'react';

import '../../globals.css';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { Layout } from '../components';

import { Open_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ['latin']
})

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/',
  }),
  cache: new InMemoryCache(),
});

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  // Pages can opt out of the default site chrome by exposing a `getLayout`
  // (e.g. the print menu renders bare for A4 output).
  // eslint-disable-next-line react/prop-types
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <ApolloProvider client={client}>
      <div className={openSans.className}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ApolloProvider>
  );
}
