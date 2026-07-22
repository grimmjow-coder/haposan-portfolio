'use client';

import { useEffect, useState, type ReactNode } from 'react';
import styles from '../page.module.css';

type Tok = { t: string; c?: string };

const LINES: Tok[][] = [
  [{ t: '// backend engineer', c: 'cmt' }],
  [{ t: 'const', c: 'kw' }, { t: ' engineer = {' }],
  [{ t: '  name: ' }, { t: '"Haposan Parulian Siahaan"', c: 'str' }, { t: ',' }],
  [{ t: '  role: ' }, { t: '"Backend Engineer"', c: 'str' }, { t: ',' }],
  [{ t: '  since: ' }, { t: '2019', c: 'num' }, { t: ',' }],
  [
    { t: '  stack: [' },
    { t: '"Go"', c: 'str' }, { t: ', ' },
    { t: '"Python"', c: 'str' }, { t: ', ' },
    { t: '"Node.js"', c: 'str' }, { t: '],' },
  ],
  [{ t: '  available: ' }, { t: 'true', c: 'kw' }, { t: ',' }],
  [{ t: '};' }],
];

const FLAT: Tok[] = [];
LINES.forEach((line, i) => {
  line.forEach((tok) => FLAT.push(tok));
  if (i < LINES.length - 1) FLAT.push({ t: '\n' });
});
const TOTAL = FLAT.reduce((n, tok) => n + tok.t.length, 0);

export default function TypedCode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(TOTAL);
      return;
    }
    let n = 0;
    const id = setInterval(() => {
      n = Math.min(n + 2, TOTAL);
      setCount(n);
      if (n >= TOTAL) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, []);

  const done = count >= TOTAL;
  let remaining = count;
  const out: ReactNode[] = [];
  for (let i = 0; i < FLAT.length && remaining > 0; i++) {
    const tok = FLAT[i];
    if (tok.t === '\n') {
      out.push('\n');
      remaining -= 1;
      continue;
    }
    out.push(
      <span key={i} className={tok.c ? styles[tok.c] : undefined}>
        {tok.t.slice(0, remaining)}
      </span>,
    );
    remaining -= tok.t.length;
  }

  return (
    <>
      <pre className={styles.code}>
        <code>
          {out}
          {!done && <span className={styles.cursor} />}
        </code>
      </pre>
      <div className={`${styles.term} ${done ? '' : styles.termHidden}`}>
        <span className={styles.prompt}>$</span> ./hire --contact haposan
        <span className={styles.cursor} />
      </div>
    </>
  );
}
