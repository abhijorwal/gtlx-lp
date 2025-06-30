import { GlassCard } from './GlassCard';

const included = [
  'Premium Stay (3-5 star properties)',
  'All Meals (Soul-healing cuisine)',
  'Road Travel + Permits',
  'Hands-on Gear Access (Drones, Cameras)',
  'Group Reels + Raw Content',
  'Cinematic YouTube Documentary',
  'Participation Certificate',
  'Private Creator Community'
];

const notIncluded = [
  'Flights to Himachal',
  'Travel Insurance',
  'Personal Shopping',
  'Paid Reel Editing (Add-on)',
  'Individual gear purchases',
  'Extended stay costs'
];

export const WhatsIncluded = () => {
  return (
    <section className="section-padding parallax-bg relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-1/3 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-float-gentle"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glass-text mb-6">
            What You Get vs. What You Don't
          </h2>
          <p className="text-xl text-white/90 font-medium">
            Complete transparency on what your investment covers
          </p>
        </div>

        <GlassCard className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Included */}
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Included
              </h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-center text-lg">
                    <span className="text-green-500 mr-3 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                Not Included
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-center text-lg">
                    <span className="text-red-500 mr-3 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
