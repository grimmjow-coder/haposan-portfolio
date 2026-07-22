import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Reveal from './components/Reveal';
import TypedCode from './components/TypedCode';
import styles from './page.module.css';

const stack = ['Go', 'Python', 'Node.js', 'PostgreSQL', 'REST API', 'Docker'];

export default function Home() {
  return (
    <>
      <Header />
      <div className="container" id="top">
        <main className={styles.main}>
          <section className={styles.hero}>
            <h1 className={styles.srOnly}>
              Haposan Parulian Siahaan — Backend Engineer building robust, scalable
              systems in Go, Python, and Node.js since 2019.
            </h1>

            <p className={`mono-label ${styles.eyebrow}`}>// backend engineer</p>

            <div className={styles.window} aria-hidden="true">
              <div className={styles.bar}>
                <span className={styles.dots}>
                  <i style={{ background: '#ff5f57' }} />
                  <i style={{ background: '#febc2e' }} />
                  <i style={{ background: '#28c840' }} />
                </span>
                <span className={styles.fn}>haposan.ts</span>
              </div>
              <TypedCode />
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>2019</span>
                <span className={styles.statLabel}>Backend since</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>3+</span>
                <span className={styles.statLabel}>Shipped projects</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>Go · Py · JS</span>
                <span className={styles.statLabel}>Core stack</span>
              </div>
            </div>

            <div className={styles.ctas}>
              <a href="#projects" className={styles.ctaPrimary}>View work</a>
              <a href="#contact" className={styles.ctaGhost}>Get in touch</a>
            </div>

            <ul className={styles.techStrip}>
              {stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <About />
          </Reveal>
        </main>
        <Reveal>
          <Contact />
        </Reveal>
      </div>
    </>
  );
}
