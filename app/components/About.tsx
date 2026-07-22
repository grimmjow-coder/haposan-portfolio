import styles from './About.module.css';

const facts: { label: string; value: string }[] = [
  { label: 'Focus', value: 'Backend & APIs' },
  { label: 'Core stack', value: 'Go · Python · Node.js · PostgreSQL' },
  { label: 'Also', value: 'React · Docker · Firebase' },
  { label: 'Open to', value: 'New opportunities' },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <p className="mono-label">// about</p>
      <div className={styles.grid}>
        <div className={styles.bio}>
          <p>
            I&apos;m a backend engineer who has been designing and shipping server-side
            systems since 2019 — REST APIs, data pipelines, and the infrastructure that
            keeps them reliable at scale.
          </p>
          <p>
            I work primarily in Go, Python, and Node.js, and I care about clean contracts,
            observability, and code that&apos;s boring in the best way. Lately I&apos;ve been
            reaching into the frontend to own features end-to-end.
          </p>
        </div>
        <ul className={styles.facts}>
          {facts.map((f) => (
            <li key={f.label}>
              <span className={styles.factLabel}>{f.label}</span>
              <span className={styles.factValue}>{f.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
