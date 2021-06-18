import Link from 'next/link';
import Image from 'next/image';

import styles from './upcomingEvents.module.scss';

const UpcomingEvents = ({ eventList = [] }) => {
  return (
    <section className={styles.upcomingEvents}>
      <h2 className={styles.upcomingEvents__title}>
        {eventList.length ? 'Upcoming Events' : 'There are no upcoming events!'}
      </h2>
      <ul className={styles.upcomingEvents__list}>
        {eventList.map(
          ({
            name,
            slug,
            featuredImage,
            speakers,
            description,
            location,
            eventDate,
          }) => (
            <li className={styles.upcomingEvents__event} key={slug}>
              <Link href={`/events/${slug}`}>
                <div className={styles['upcomingEvents__event-image']}>
                  <Image
                    src={featuredImage.url}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </Link>
              <div className={styles['upcomingEvents__event-details']}>
                <h5>
                  {new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'full',
                  }).format(new Date(eventDate))}
                </h5>
                <Link href={`/events/${slug}`}>
                  <a>
                    <h3>{name}</h3>
                  </a>
                </Link>
                <h4>Where: {location}</h4>
                {speakers && (
                  <h5>
                    {speakers.map((speaker, i, arr) => {
                      return (
                        <span key={speaker}>
                          {speaker}
                          {i !== arr.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </h5>
                )}
                <p>{description}</p>
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default UpcomingEvents;
