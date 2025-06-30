import { useState } from 'react';
import { GlassCard } from './GlassCard';

const faqs = [
  {
    question: 'Can I join with just an iPhone?',
    answer: 'Absolutely! We provide professional cameras and drones, but smartphone filmmaking is a core part of our curriculum. You\'ll master both professional and mobile techniques using your iPhone or Android device.'
  },
  {
    question: 'Do I need editing experience?',
    answer: 'No previous editing experience required! We start from the basics and teach you using user-friendly apps like VN and CapCut. Our mentors guide you through every step of the editing process.'
  },
  {
    question: 'Are drones provided?',
    answer: 'Yes! We provide DJI drones and professional camera equipment. We start with basics and gradually build to advanced techniques with certified instructors for safe, legal operation.'
  },
  {
    question: 'What if I cancel?',
    answer: 'Full refund available up to 30 days before expedition start. 50% refund up to 14 days before. No refunds within 14 days due to advance bookings and arrangements.'
  },
  {
    question: 'Can I monetize the content?',
    answer: 'Yes! All content you create is yours to keep and monetize. We also teach you strategies for building your personal brand and monetizing your content creation skills.'
  },
  {
    question: 'How many people join per trip?',
    answer: 'We limit each expedition to maximum 8 participants to ensure personalized mentorship and attention. This small group size allows for meaningful connections and focused learning.'
  }
];

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding parallax-bg relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glass-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/90 font-medium">
            Everything you need to know about your upcoming adventure
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                <span className="text-gray-600 text-2xl transform transition-transform flex-shrink-0">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
