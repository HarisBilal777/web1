import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    id: "electrolysis-what",
    question: "What is electrolysis hair removal?",
    answer: "Electrolysis is a permanent hair removal method that uses chemical or thermal energy to destroy the hair follicle. It's the only FDA-approved method for permanent hair removal that works on all skin and hair types."
  },
  {
    id: "electrolysis-pain",
    question: "Is electrolysis hair removal painful?",
    answer: "Most people experience a momentary sensation of warmth or a pinch during the procedure. Pain tolerance varies from person to person, but we use techniques to minimize discomfort and can provide numbing solutions for sensitive areas."
  },
  {
    id: "electrolysis-sessions",
    question: "How many sessions will I need?",
    answer: "The number of sessions varies depending on the area being treated, hair type, and other factors. Most clients require multiple sessions to achieve desired results, typically 8-12 treatments for permanent hair removal."
  },
  {
    id: "electrolysis-skintypes",
    question: "Is electrolysis safe for all skin types?",
    answer: "Yes, electrolysis is safe and effective for all skin types and colors. Unlike laser hair removal, electrolysis can treat even blonde, red, or gray hair, making it a universal solution for permanent hair removal."
  },
  {
    id: "electrolysis-areas",
    question: "What areas can be treated with electrolysis?",
    answer: "Electrolysis can treat virtually any area of the body where unwanted hair grows. Common areas include face (eyebrows, chin, upper lip), underarms, bikini line, legs, back, and chest."
  },
  {
    id: "electrolysis-preparation",
    question: "What should I do before my appointment?",
    answer: "Avoid sunbathing or tanning for at least 24-48 hours before treatment. Do not pluck or wax the area for at least 3-5 days before your appointment, as the hair follicle needs to be intact. Shaving is permitted."
  },
  {
    id: "electrolysis-sideeffects",
    question: "Are there any side effects?",
    answer: "Some temporary redness and swelling at the treatment site is normal and typically subsides within a few hours. Rarely, there might be temporary scabbing or discoloration. Following proper aftercare instructions minimizes these effects."
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 bg-secondary/20" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-gray-700 text-lg">
            Find answers to common questions about electrolysis hair removal treatments.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-medium text-lg py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
