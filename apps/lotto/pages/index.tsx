import type { NextPage } from 'next';
import Head from 'next/head';
import { SuperLotto } from '../view';
// import { HomeContainer } from '../view/home/home.container'

const Index: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Try luck</title>
        <meta name="description" content="Lucky app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <HomeContainer {...props} /> */}
      <SuperLotto />;
    </>
  );
};

export default Index;
