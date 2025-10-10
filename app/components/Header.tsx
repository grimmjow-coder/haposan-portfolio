import styles from './Header.module.css';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Posan.dev</div>
      <nav className={styles.nav}>
        <a href="https://github.com/grimmjow-coder" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/haposan-siahaan-111108152/" target="_blank">LinkedIn</a>
        <ThemeToggleButton />
      </nav>
    </header>
  );
}