import styles from './eventContent.module.scss';

const EventContent = ({ speakers = [], where, description }) => {
  return (
    <section className={styles.eventContent}>
      <div className={styles.eventContent__grid}>
        <aside className={styles.eventContent__metadata}>
          <h4 className={styles['eventContent__metadata-label']}>Where</h4>
          <div className={styles['eventContent__metadata-value']}>
            <span role="img" aria-label="map">
              🗺️
            </span>{' '}
            {where}
          </div>
          {speakers.length ? (
            <>
              <h4 className={styles['eventContent__metadata-label']}>
                Speakers
              </h4>
              <ul className={styles.eventContent__list}>
                {speakers.map((speaker) => {
                  return (
                    <li
                      key={speaker}
                      className={styles['eventContent__metadata-value']}
                    >
                      <span role="img" aria-label="speaker">
                        🔈
                      </span>{' '}
                      {speaker}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            ''
          )}
        </aside>
        <article className={styles.eventContent__content}>
          {description}
        </article>
      </div>
    </section>
  );
};

export default EventContent;
