import Head from 'next/head';
import FeaturedEventSection from '../components/FeaturedEventSection';
import UpcomingEvents from '../components/UpcomingEvents';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { getSortedEvents } from '../utils/events';

const Home = ({ featuredEvent, upcomingEvents }) => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Meet/Hang/Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <FeaturedEventSection event={featuredEvent} />
        <UpcomingEvents eventList={upcomingEvents} />
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const eventData = await getSortedEvents();
    return {
      props: {
        featuredEvent: eventData[0],
        upcomingEvents: eventData,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        featuredEvent: undefined,
        upcomingEvents: [],
      },
    };
  }
};

export default Home;
