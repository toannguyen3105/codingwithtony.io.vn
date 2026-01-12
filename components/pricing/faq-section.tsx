export const faqs = [
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes, I offer monthly retainer packages for ongoing updates, security patches, and minor feature additions.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer:
      'For small tasks (Starter), usually 2-3 days. For full projects (Pro), it typically takes 2-4 weeks depending on complexity.',
  },
  {
    question: 'Do you provide design services?',
    answer:
      "I specialize in Frontend Development. I can implement existing designs (Figma) perfectly, or use professional UI kits if you don't have a design.",
  },
  {
    question: 'How do we communicate during the project?',
    answer:
      "We can use Email, Slack, or Discord. For Pro projects, we'll have weekly update calls.",
  },
];

export function FAQSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about working with me.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
