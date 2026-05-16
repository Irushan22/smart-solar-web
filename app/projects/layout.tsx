import { Metadata } from 'next';
import { siteConfig } from '@/site.config';

export const metadata: Metadata = {
  title: 'Solar Installation Projects',
  description:
    'Browse our portfolio of residential and commercial solar panel installations. See real projects across multiple locations.',
  openGraph: {
    title: `Solar Installation Projects | ${siteConfig.brand.name}`,
    description:
      'Explore our residential and commercial solar installations. From rooftop systems to large-scale commercial setups.',
  },
  alternates: {
    canonical: `${siteConfig.site.url}/projects`,
  },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
