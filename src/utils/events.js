import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API);

export const getAllEventSlugs = async () => {
  const { events } = await graphcms.request(`
  {
    events {
      slug
    }
  }`);
  return events.map(({ slug }) => {
    return {
      params: {
        event: slug,
      },
    };
  });
};

export const getEventData = async (slug) => {
  console.log(slug);
  const { event } = await graphcms.request(
    `
  query getEvent($slug: String!) {
    event(where: {slug: $slug}){
      name
      eventDate
      location
      description
      featuredImage {
        id
        url
      }
      speaker
      slug
    }
  }
  `,
    {
      slug,
    },
  );
  return event;
};

export const getSortedEvents = async () => {
  const date = new Date().toISOString().split('T')[0];

  const { events } = await graphcms.request(
    `
  query getSortedEvents($date: Date!) {
    events(orderBy: eventDate_ASC, where: {eventDate_gt: $date}) {
      name
      eventDate
      location
      description
      featuredImage {
        id
        url
      }
      speaker
      slug
  }
}
`,
    {
      date,
    },
  );
  return events;
};
