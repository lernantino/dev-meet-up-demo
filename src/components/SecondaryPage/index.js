import styles from './secondaryPage.module.scss';

const SecondaryPage = ({ title, children }) => {
  return (
    <section className={styles.secondaryPage}>
      {title && (
        <div className={styles.secondaryPage__header}>
          <h2 className={styles.secondaryPage__title}>{title}</h2>
        </div>
      )}
      <div className={styles.secondaryPage__content}>{children}</div>
    </section>
  );
};
export default SecondaryPage;
