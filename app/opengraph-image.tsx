import { ImageResponse } from 'next/og';
import { siteConfig } from '@/site.config';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '90px 100px',
          background: 'linear-gradient(135deg, #0B192C 0%, #1E3E62 60%, #4a9630 130%)',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#4a9630',
              fontWeight: 800,
              fontSize: 28,
              letterSpacing: '-0.04em',
            }}
          >
            SF
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.01em' }}>
            {siteConfig.brand.name}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              margin: 0,
              maxWidth: 900,
            }}
          >
            {siteConfig.brand.tagline}
          </h1>
          <p
            style={{
              fontSize: 28,
              lineHeight: 1.45,
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0,
              maxWidth: 820,
            }}
          >
            {siteConfig.seo.description}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 32,
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            fontSize: 22,
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <span>{siteConfig.contact.phone.display}</span>
          <span>{new URL(siteConfig.site.url).host}</span>
        </div>
      </div>
    ),
    size
  );
}
