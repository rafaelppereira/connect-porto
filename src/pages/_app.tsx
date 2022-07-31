import React from 'react';
import { AppProps } from 'next/app';

import { Header } from '../components/Header';

import '../styles/index.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  )
}

export default MyApp
