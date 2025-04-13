import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">All About Electrolysis</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://ext.same-assets.com/3874975817/2486912572.webp"
              alt="Electrolysis Procedure"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-gray-700 mb-6 text-lg">
              Electrolysis is a proven method to permanently remove unwanted hair from all areas of the body. Unlike other hair removal methods that provide temporary results, electrolysis offers a permanent solution.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Uses chemical and thermal energy to destroy each hair follicle</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Damage to the hairs is applied deep under the root</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Gives you permanent satisfaction results</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">No significant complications that would force you to change your mind</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Has a strong success rate of up to 94%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
