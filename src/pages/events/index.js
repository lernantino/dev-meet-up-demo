import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UpcomingEvents from '../../components/UpcomingEvents';

import { getSortedEvents } from '../../utils/events';

const Events = ({ eventList }) => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Upcoming Events || Meet/Hang/Code</title>
      </Head>
      <Header />
      <main>
        <UpcomingEvents eventList={eventList} />
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const eventList = await getSortedEvents();
    return {
      props: {
        eventList,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        eventList: [],
      },
    };
  }
};

export default Events;
