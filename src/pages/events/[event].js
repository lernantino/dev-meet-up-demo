import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import EventBanner from '../../components/EventBanner';
import EventContent from '../../components/EventContent';

import { getAllEventSlugs, getEventData } from '../../utils/events';

const Event = ({ eventData }) => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{eventData.name} || Meet/Hang/Code</title>
      </Head>
      <Header />
      <main>
        <EventBanner
          name={eventData.name}
          date={new Intl.DateTimeFormat('en-US', {
            dateStyle: 'full',
          }).format(new Date(eventData.eventDate))}
          featuredImage={eventData.featuredImage}
        />
        <EventContent
          speakers={eventData.speakers}
          where={eventData.location}
          description={eventData.description}
        />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllEventSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const eventData = await getEventData(params.event);
  return {
    props: {
      eventData,
    },
  };
};

export default Event;
