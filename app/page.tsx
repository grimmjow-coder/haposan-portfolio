import Header from './components/Header'
import Projects from './components/Projects';
import styles from './page.module.css';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Haposan Parulian Siahaan</h1>
          <p className={styles.description}>
            Seasoned Backend Developer with 5 years of experience in building robust and scalable systems. While I specialize in server-side logic and APIs, I'm also passionate about exploring the frontend to create seamless, end-to-end user experiences.
          </p>
        </section>
        <Projects />
      </main>
      <Contact />
    </div>
  );
}