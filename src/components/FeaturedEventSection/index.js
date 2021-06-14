import Link from 'next/link';
import Image from 'next/image';

import styles from './featuredEventSection.module.scss';

const FeaturedEventSection = ({ event }) => {
  return (
    <section className={styles.featuredEventSection}>
      <div className={styles.featuredEventSection__grid}>
        <Link href={`/events/${event.slug}`}>
          <a className={styles.featuredEventSection__event}>
            <Image
              className={styles['featuredEventSection__event-image']}
              src={event.featuredImage.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className={styles['featuredEventSection__event-details']}>
              <span>
                <h2>Featured Event</h2>
                <h3>{event.name}</h3>
                {event.eventDate && (
                  <h4>
                    {new Intl.DateTimeFormat('en-US', {
                      dateStyle: 'full',
                    }).format(new Date(event.eventDate))}
                  </h4>
                )}
              </span>
            </div>
          </a>
        </Link>
        <Link href="/events">
          <a className={styles.featuredEventSection__callout}>
            <span>See all events.</span>
          </a>
        </Link>
        <Link href="/donate">
          <a className={styles.featuredEventSection__callout}>
            <span>Donate and keep the meetups coming!</span>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedEventSection;
