import styles from './Projects.module.css';

type Project = {
  kind?: 'personal' | 'professional';
  title: string;
  description: string;
  tags: string[];
  accent: string;
  liveUrl?: string;
  repoUrl?: string;
  company?: string;
  period?: string;
  impact?: string[];
};

const myProjects: Project[] = [
  // Sesuaikan `period` & `tags` bila perlu. Set company ke 'Confidential' jika terikat NDA.
  {
    kind: 'professional',
    title: 'Field Collection Platform',
    description:
      'Field debt-collection platform serving a mobile app for field collectors and a web dashboard for supervisors, integrated with the core lending system and scheduled data pipelines.',
    company: 'Confidential · Multifinance',
    impact: [
      'Automated Daily Visit List (DKH) assignment — replaced a manual workflow with a secured API pipeline that ingests overdue accounts and builds each collector’s daily route automatically',
      'Auto-generated tiered warning letters (SP1–SP3) as PDFs and delivered them via WhatsApp and email through scheduled jobs',
      'Built offline-first field visits with GPS-based auto-approval, cutting manual supervisor review',
    ],
    tags: ['Go', 'PostgreSQL', 'Airflow', 'REST API', 'PDF'],
    accent: '#34d399',
  },
  {
    kind: 'personal',
    title: 'OCR KTP Indonesia & Generate SKCK PDF',
    description: 'A website to extract information data in KTP Indonesia using python tesseract and generate SKCK PDF with template',
    tags: ['Python', 'Tesseract', 'OCR', 'HTML', 'CSS', 'JavaScript', 'Dockerfile', 'Railway'],
    repoUrl: 'https://github.com/grimmjow-coder/ktp-to-skck-web',
    liveUrl: 'https://ocr-ktp.up.railway.app/',
    accent: '#22d3ee',
  },
  {
    kind: 'personal',
    title: 'Madani Hukum',
    description: 'A centralized legal information portal for searching and accessing Indonesian law documents, featuring a dynamic admin content management system.',
    tags: ['React.js', 'Node.js', 'MySQL', 'Vercel', 'Railway'],
    repoUrl: 'https://github.com/grimmjow-coder/madani-hukum-frontend',
    liveUrl: 'https://madani-hukum-frontend.vercel.app/',
    accent: '#8b5cf6',
  },
  {
    kind: 'personal',
    title: 'RIG API Back End',
    description: 'API to handle submit RIG inspection and handle notification using firebase',
    tags: ['Golang', 'PostgreSQL', 'Firebase', 'REST API'],
    repoUrl: 'https://github.com/grimmjow-coder/rig-api',
    accent: '#f472b6',
  },
];

function hostLabel(project: Project): string {
  const url = project.liveUrl ?? project.repoUrl;
  if (!url) return '';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <p className="mono-label">// featured work</p>
      <h2 className={styles.sectionTitle}>Selected work</h2>
      <div className={styles.grid}>
        {myProjects.map((project, i) => {
          const isPro = project.kind === 'professional';
          const link = project.liveUrl ?? project.repoUrl;
          const cover = (
            <>
              <span className={styles.coverGlyph}>{project.tags[0]}</span>
              <span className={styles.coverBar}>
                <span className={styles.coverDots}>
                  <i /><i /><i />
                </span>
                <span className={styles.coverUrl}>
                  {isPro ? project.company : hostLabel(project)}
                </span>
                {isPro && <span className={styles.proBadge}>Professional</span>}
              </span>
            </>
          );

          return (
            <article key={project.title} className={styles.card} style={{ '--tint': project.accent } as React.CSSProperties}>
              {link ? (
                <a href={link} target="_blank" rel="noreferrer" className={styles.cover} aria-label={`Open ${project.title}`}>
                  {cover}
                </a>
              ) : (
                <div className={styles.cover}>{cover}</div>
              )}

              <div className={styles.cardTop}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                {isPro ? (
                  project.period && <span className={styles.period}>{project.period}</span>
                ) : (
                  <div className={styles.links}>
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label="View source code">Code ↗</a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Open live demo">Live ↗</a>
                    )}
                  </div>
                )}
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>

              {project.impact && (
                <ul className={styles.impact}>
                  {project.impact.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
