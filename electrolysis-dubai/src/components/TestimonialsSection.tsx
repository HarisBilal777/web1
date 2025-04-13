import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    id: "testimonial-sarah",
    name: "Sarah M.",
    location: "Dubai Marina",
    content: "I've been struggling with facial hair for years and tried everything - waxing, threading, even laser. Nothing worked permanently until I discovered electrolysis at this clinic. After 8 sessions, I'm virtually hair-free. The staff is professional and caring, making the experience as comfortable as possible.",
    rating: 5
  },
  {
    id: "testimonial-fatima",
    name: "Fatima A.",
    location: "Jumeirah",
    content: "As someone with PCOS, excessive hair growth has always been a challenge. The team here understood my concerns and created a personalized treatment plan. The results have been life-changing! I no longer worry about unwanted hair and have gained tremendous confidence.",
    rating: 5
  },
  {
    id: "testimonial-james",
    name: "James P.",
    location: "Downtown Dubai",
    content: "I was initially hesitant about electrolysis for my back hair, but I'm so glad I took the plunge. The process was explained thoroughly, and while it takes multiple sessions, the permanent results are worth it. Highly recommend their services!",
    rating: 4
  },
  {
    id: "testimonial-layla",
    name: "Layla K.",
    location: "Al Barsha",
    content: "The clinic's attention to detail and commitment to customer satisfaction is unmatched. From the moment you walk in, you're treated with respect and care. The electrolysis treatment was effective and relatively painless. I've recommended them to all my friends!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Happy Clients' Testimonials</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-gray-700 text-lg">
            Hear what our satisfied clients have to say about their electrolysis hair removal experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={`${testimonial.id}-star-${i}`}
                      size={18}
                      className={`${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <User size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
