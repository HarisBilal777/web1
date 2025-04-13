import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ClinicSection from '@/components/ClinicSection';
import ResultsSection from '@/components/ResultsSection';
import FaqSection from '@/components/FaqSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ClinicSection />
      <ResultsSection />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
