import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star } from 'lucide-react';

const ClinicSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Our Clinic</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-gray-700 text-lg">
            Lavish Clinic is renowned for its luxurious and personalized approach to electrolysis hair removal. We combine advanced technology with exceptional comfort and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Card className="shadow-lg border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[350px]">
                <Image
                  src="https://ext.same-assets.com/3874975817/1828065668.webp"
                  alt="Electrolysis Hair Removal Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Treatments</h3>
                <p className="text-gray-700 mb-4">
                  We prioritize in-depth consultations to understand your specific requirements, ensuring tailored treatments that deliver the best results for your hair type and skin tone.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Our Clinic?</h3>
            <p className="text-gray-700">
              Our clinic offers a remarkable experience that goes beyond traditional electrolysis treatments. We elevate your experience with a tranquil spa-like setting, featuring a calming ambiance, private treatment rooms, and luxurious amenities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-primary">Certified Experts</h4>
                <p className="text-gray-700">Our team consists of highly trained and certified professionals</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-primary">Advanced Technology</h4>
                <p className="text-gray-700">We use the latest equipment for precise targeting and optimal results</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-primary">Luxury Experience</h4>
                <p className="text-gray-700">Enjoy our elegant and inviting atmosphere designed for your comfort</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-primary">Personalized Care</h4>
                <p className="text-gray-700">Each treatment plan is customized to your specific needs</p>
              </div>
            </div>

            <Button className="mt-6" size="lg">Schedule Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
