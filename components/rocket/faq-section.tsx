'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is this course suitable for complete beginners?',
    answer:
      'Yes! We have a dedicated path for beginners that starts from the absolute basics of HTML, CSS, and JavaScript before moving to React and Next.js. No prior experience is required.',
  },
  {
    question: 'How long do I have access to the materials?',
    answer:
      "You have lifetime access to all course materials, including future updates. You can learn at your own pace and revisit lessons whenever you'd like.",
  },
  {
    question: 'Do you offer mentorship or code reviews?',
    answer:
      "Absolutely. Our Pro plan includes weekly group coaching calls and priority code reviews to ensure you're on the right track and following best practices.",
  },
  {
    question: 'What projects will I build?',
    answer:
      'You will build 4 production-ready projects: a personal portfolio, a blog with CMS integration, an e-commerce dashboard, and a full-stack SaaS application.',
  },
  {
    question: 'Can I get a refund if I am not satisfied?',
    answer:
      "We offer a 30-day money-back guarantee. If you feel the course isn't right for you, just reach out to our support team for a full refund, no questions asked.",
  },
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-border/50 first:border-t"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-primary"
      >
        <span className="text-lg font-medium tracking-tight">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-3xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground md:text-lg"
          >
            Everything you need to know about the course and billing.
          </motion.p>
        </div>

        <div className="divide-y divide-border/50">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
