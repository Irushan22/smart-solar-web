import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';

// Lazy-load below-the-fold components for faster initial page load
const Services = dynamic(() => import('@/components/Services/Services').then(mod => ({ default: mod.Services })), {
  loading: () => <div style={{ minHeight: '100vh' }} />,
});
const Brands = dynamic(() => import('@/components/Brands/Brands').then(mod => ({ default: mod.Brands })), {
  loading: () => <div style={{ minHeight: '200px' }} />,
});
const Portfolio = dynamic(() => import('@/components/Portfolio/Portfolio').then(mod => ({ default: mod.Portfolio })), {
  loading: () => <div style={{ minHeight: '100vh' }} />,
});
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div style={{ minHeight: '600px' }} />,
});
const Contact = dynamic(() => import('@/components/Contact/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div style={{ minHeight: '600px' }} />,
});
const Footer = dynamic(() => import('@/components/Footer/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div style={{ minHeight: '300px' }} />,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Brands />
      <Portfolio />
      {/* <Calculator /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
