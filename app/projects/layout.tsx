import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar Installation Projects in Sri Lanka',
  description:
    'Browse our portfolio of residential and commercial solar panel installations across Sri Lanka. See real projects from Kandy, Matale, and other locations.',
  openGraph: {
    title: 'Solar Installation Projects | Smart Solar Energy Sri Lanka',
    description:
      'Explore our residential and commercial solar installations across Sri Lanka. From rooftop systems to large-scale commercial setups.',
  },
  alternates: {
    canonical: 'https://smartsolar.lk/projects',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
