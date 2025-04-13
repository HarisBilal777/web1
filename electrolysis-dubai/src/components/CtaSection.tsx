import React from 'react';
import { Button } from './ui/button';

const CtaSection = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Permanent Hair Removal?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards permanently smooth, beautiful skin. Our experts are ready to create a personalized treatment plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-medium">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-medium bg-transparent border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
          <p className="mt-8 text-white/80">
            Special offer: 20% off your first treatment when you book this month!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
