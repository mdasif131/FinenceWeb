import { Accordion, AccordionItem } from '@heroui/react';
import React, { useState } from 'react';

const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      qestion: 'What credit score do I need to apply for a credit card?',
      ans: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
    {
      qestion: ' How can I apply for a credit card online?',
      ans: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
    {
      qestion: 'Are there any annual fees associated with the credit card?',
      ans: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
    {
      qestion:
        'How long does it take to receive the credit card once approved?',
      ans: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
    {
      qestion: ' How can I check my credit card balance and transactions?',
      ans: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
    {
      qestion: 'Is my credit card information secure?',
      ans: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
  ]);
  return (
    // <section>
    //   <h2 className="font-bold text-2xl lg:text-3xl leading-tight text-center">
    //     FAQs
    //   </h2>

    //   <Accordion>
    //     {faqs.map(({ qestion, ans }, i) => (
    //     <AccordionItem key={i} aria-label={qestion} title={qestion} >
    //       <span className='text-secondary'>{ans}</span>
    //     </AccordionItem>

    //     ))}
    //   </Accordion>
    // </section>

    //Responsive design
    <section className="px-4 lg:px-8 py-8">
      <div className="max-w-screen-md mx-auto">
        <h2 className="font-bold text-2xl lg:text-3xl leading-tight text-center mb-6">
          Frequently Asked Questions
        </h2>

        <Accordion className="w-full">
          {faqs.map(({ qestion, ans }, i) => (
            <AccordionItem
              key={i}
              aria-label={qestion}
              title={qestion}
              className="text-lg"
            >
              <span className="text-gray-600">{ans}</span>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
