import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B192C',
          color: '#4a9630',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '-0.05em',
          borderRadius: 6,
        }}
      >
        SF
      </div>
    ),
    size
  );
}
