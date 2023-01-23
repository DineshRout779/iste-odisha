import '@/styles/globals.css';
import Head from 'next/head';
import { Quicksand } from '@next/font/google';
import "./../styles/globals.css"

const nunito = Quicksand({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ISTE Odisha</title>
        <meta name='description' content='Indian Society For Technical Education Odisha Chapter' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='images/logo.png' />
      </Head>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
