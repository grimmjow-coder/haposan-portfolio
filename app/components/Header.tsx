import styles from './Header.module.css';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.bracket}>{'{'}</span>posan<span className={styles.dot}>.dev</span><span className={styles.bracket}>{'}'}</span>
        </a>
        <nav className={styles.nav}>
          <a href="https://github.com/grimmjow-coder" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/haposan-siahaan-111108152/" target="_blank" rel="noreferrer">LinkedIn</a>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}
