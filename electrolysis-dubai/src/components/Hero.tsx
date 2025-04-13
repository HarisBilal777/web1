import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-accent py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Electrolysis Hair Removal Dubai
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-800">
            Permanent Hair Removal Solution 2024
          </h2>
          <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
            Ever wished you could ditch the razor for good and achieve permanently smooth and beautiful skin? Electrolysis hair removal might be your answer!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-lg">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
