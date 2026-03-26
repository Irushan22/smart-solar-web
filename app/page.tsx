import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { Services } from '@/components/Services/Services';
import { About } from '@/components/About/About';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { Calculator } from '@/components/Calculator/Calculator';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Calculator />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

