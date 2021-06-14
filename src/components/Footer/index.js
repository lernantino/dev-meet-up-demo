import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <h4>
          Made with{' '}
          <span role="img" aria-label="coffee">
            ☕
          </span>{' '}
          +{' '}
          <span role="img" aria-label="heart">
            ♥️
          </span>
        </h4>
        <small>The team at Meet/Hang/Code</small>
      </div>
    </footer>
  );
};

export default Footer;
