import styles from './Contact.module.css'; // Changed from Footer.module.css

export default function Contact() { // Changed from Footer
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.description}>
        I'm currently open to new opportunities. My inbox is always open, feel free to reach out!
      </p>
      <a href="mailto:haposansiahaan3@gmail.com" className={styles.emailLink}>
        haposansiahaan3@gmail.com
      </a>
    </section>
  );
}