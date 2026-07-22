import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <p className="mono-label">// let&apos;s talk</p>
      <h2 className={styles.title}>
        Building something that needs a <span className="gradient-text">solid backend?</span>
      </h2>
      <p className={styles.description}>
        I&apos;m currently open to new opportunities. My inbox is always open — feel free to reach out.
      </p>
      <a href="mailto:haposansiahaan3@gmail.com" className={styles.emailLink}>
        haposansiahaan3@gmail.com
      </a>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Haposan Siahaan</span>
        <div className={styles.footerLinks}>
          <a href="https://github.com/grimmjow-coder" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/haposan-siahaan-111108152/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </section>
  );
}
