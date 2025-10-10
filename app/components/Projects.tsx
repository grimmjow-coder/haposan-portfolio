import styles from './Projects.module.css';

// You can create a separate file for this type
type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
};

const myProjects: Project[] = [
  {
    title: 'OCR KTP Indonesia & Generate SKCK PDF',
    description: 'A website to extract information data in KTP Indonesia using python tesseract and generate SKCK PDF with template',
    tags: ['Python', 'Tesseract', 'OCR', 'HTML', 'CSS', 'JavaScript', 'Dockerfile', 'Railway'],
    repoUrl: 'https://github.com/grimmjow-coder/ktp-to-skck-web',
    liveUrl: 'https://ocr-ktp.up.railway.app/',
  },
  {
    title: 'Madani Hukum',
    description: 'A centralized legal information portal for searching and accessing Indonesian law documents, featuring a dynamic admin content management system.',
    tags: ['React.js', 'Node.js', 'MySQL', 'Vercel', 'Railway'],
    repoUrl: 'https://github.com/grimmjow-coder/madani-hukum-frontend',
    liveUrl: 'https://madani-hukum-frontend.vercel.app/', // Add live demo link
  },
  {
    title: 'RIG API Back End',
    description: 'API to handle submit RIG inspection and handle notification using firebase',
    tags: ['Golang', 'PostgreSQL', 'Firebase', 'REST API'],
    repoUrl: 'https://github.com/grimmjow-coder/rig-api'
  }
];

export default function Projects() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Featured Projects</h2>
      <div className={styles.grid}>
        {myProjects.map((project) => (
          <div key={project.title} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a href={project.repoUrl} target="_blank">View Code</a>
              {project.liveUrl && <a href={project.liveUrl} target="_blank">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}