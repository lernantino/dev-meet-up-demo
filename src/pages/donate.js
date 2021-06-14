import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SecondaryPage from '../components/SecondaryPage';

const Donate = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Donate to Meet/Hang/Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SecondaryPage title="Donate to Meet/Hang/Code">
        <p>
          Thank you for taking the time to consider donating to Meet/Hang/Code.
          Your contributions make it possible for us to stay up and running and
          providing you with the most up-to-date information on what's happening
          in development!
        </p>
      </SecondaryPage>
      <Footer />
    </div>
  );
};
export default Donate;
