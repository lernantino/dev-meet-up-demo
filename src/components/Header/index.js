import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';

const navItems = [
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/events',
    label: 'All Events',
  },
  {
    path: '/donate',
    label: 'Donate',
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.header__grid}>
        <div className={styles.header__title}>
          <Link href="/">
            <a>
              Meet{' '}
              <span className={styles['header__title--skew']}>
                <span>Hang</span>
              </span>{' '}
              Code
            </a>
          </Link>
        </div>
        <nav className={styles.header__nav}>
          {navItems.map(({ path, label }) => (
            <Link key={path} href={path}>
              <a
                className={
                  router && router.pathname === path
                    ? styles['header__navlink-active']
                    : styles.header__navlink
                }
              >
                {label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;
