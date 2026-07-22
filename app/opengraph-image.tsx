import { ImageResponse } from 'next/og';

export const alt = 'Haposan Siahaan — Backend Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#08080c',
          backgroundImage:
            'radial-gradient(1000px 600px at 0% 0%, rgba(236,72,153,0.30), transparent 55%), radial-gradient(900px 600px at 100% 100%, rgba(34,211,238,0.28), transparent 55%)',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', color: '#9a9aa8', fontSize: 30, marginBottom: 24 }}>
          // backend engineer
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 92, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          <span style={{ color: '#e8e8f0' }}>Haposan Parulian&nbsp;</span>
          <span
            style={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(100deg, #ec4899, #8b5cf6 50%, #22d3ee)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            }}
          >
            Siahaan
          </span>
        </div>
        <div style={{ display: 'flex', color: '#b9b9c4', fontSize: 34, marginTop: 32 }}>
          Building robust, scalable systems since 2019 · Go · Python · Node.js
        </div>
      </div>
    ),
    size,
  );
}
