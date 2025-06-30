import { useState } from 'react';
import { GlassCard } from './GlassCard';

const legalSections = [
  {
    title: '📜 Cancellation & Refund Policy',
    content: 'Full refund available up to 30 days before expedition start. 50% refund up to 14 days before. No refunds within 14 days of start date due to advance bookings and arrangements.'
  },
  {
    title: '🛡 Content Ownership & Consent',
    content: 'All content created remains yours. We may use anonymized footage for promotional purposes with consent. Final documentary editing subject to participant approval.'
  },
  {
    title: '🔐 Gear Use & Liability',
    content: 'Professional equipment provided with damage protection coverage. Participants responsible for reasonable care of equipment during use.'
  },
  {
    title: '🚑 Emergency Support Protocols',
    content: 'Comprehensive safety measures in place including local emergency contacts, medical support, and evacuation procedures. Travel insurance strongly recommended.'
  }
];

export const LegalTransparency = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <section className="section-padding parallax-bg relative">
      <div className="absolute inset-0 bg-overlay-dark"></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float-gentle" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glass-text mb-6 text-shadow-strong">
            Clarity is Our Compass
          </h2>
          <p className="text-xl text-white font-medium text-shadow-strong">
            We believe in complete transparency. Here's everything you need to know.
          </p>
        </div>

        <div className="space-y-4">
          {legalSections.map((section, index) => (
            <GlassCard key={index} className="overflow-hidden bg-white/10 backdrop-blur-xl border-white/20">
              <button
                onClick={() => setOpenSection(openSection === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white text-shadow-strong">{section.title}</h3>
                <span className="text-white text-2xl transform transition-transform">
                  {openSection === index ? '−' : '+'}
                </span>
              </button>
              
              {openSection === index && (
                <div className="px-6 pb-6 text-white leading-relaxed border-t border-white/20 pt-4 text-shadow-strong">
                  {section.content}
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="travel-button text-white">
            📄 View Full Legal Policy PDF
          </button>
        </div>
      </div>
    </section>
  );
};
