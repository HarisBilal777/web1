import React from 'react';
import Image from 'next/image';

const ResultsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Electrolysis Hair Removal Expected Results</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-gray-700 text-lg">
            See amazing progress photos in our gallery & learn more about expected results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Before/After Item 1 */}
          <div className="bg-secondary/10 rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
              <Image
                src="https://ext.same-assets.com/3874975817/2063894518.webp"
                alt="Before and after electrolysis treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Facial Hair Removal</h3>
              <p className="text-gray-700">
                Permanent removal of unwanted facial hair, leaving skin smooth and clear. Results visible after a series of treatments.
              </p>
            </div>
          </div>

          {/* Before/After Item 2 */}
          <div className="bg-secondary/10 rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
              <Image
                src="https://ext.same-assets.com/3874975817/1738410746.webp"
                alt="Smooth skin after electrolysis"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Underarm Treatment</h3>
              <p className="text-gray-700">
                Achieve smooth, hair-free underarms with our advanced electrolysis treatments. Perfect for sensitive skin.
              </p>
            </div>
          </div>

          {/* Before/After Item 3 */}
          <div className="bg-secondary/10 rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
              <Image
                src="https://ext.same-assets.com/3874975817/3543574077.webp"
                alt="Leg hair removal results"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Leg Hair Removal</h3>
              <p className="text-gray-700">
                Experience permanently smooth legs with our professional electrolysis treatments. No more frequent shaving or waxing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-700 max-w-3xl mx-auto">
            Our electrolysis treatment permanently removes unwanted hair, with results lasting a lifetime. Most clients see significant improvement after 8-12 sessions, depending on the area treated and hair type.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
