import Image from 'next/image';

import styles from './eventBanner.module.scss';

const EventBanner = ({
  name,
  date,
  featuredImage = '/images/featured-4.jpg',
}) => {
  return (
    <section className={styles.eventBanner}>
      <Image
        className={styles.eventBanner__image}
        src={featuredImage.url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles['eventBanner__metadata-position']}>
        <div className={styles['eventBanner__metadata-wrapper']}>
          <div className={styles.eventBanner__metadata}>
            <h2 className={styles['eventBanner__event-name']}>{name}</h2>
            <h3 className={styles.eventBanner__date}>Date: {date}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
