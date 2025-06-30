import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';

const plans = [
  {
    name: 'Base Expedition',
    price: '₹50,000',
    originalPrice: '₹79,999',
    description: 'All trip inclusions for the complete experience',
    features: [
      'Premium Stay (3-5 star properties)',
      'All meals included',
      'Professional mentorship',
      'Equipment access (drones, cameras)',
      'Group reels + raw content',
      'Cinematic YouTube documentary',
      'Participation certificate',
      'Private creator community access'
    ],
    popular: true,
    discount: true
  },
  {
    name: 'Premium Creator Plan',
    price: '₹94,999',
    description: 'Everything in Base + exclusive creator benefits',
    features: [
      'Everything in Base Expedition',
      '1-on-1 Brand Review Call',
      '1 Custom Edited Reel',
      'Post-trip Mentorship Session',
      'Priority equipment access',
      'Extended community benefits',
      'Personal brand consultation',
      'Advanced editing tutorials'
    ],
    popular: false
  }
];

export const PricingPlans = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-100 to-gray-100 relative">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-float-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-display">
            <span className="adventure-text">Choose Your Path</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Select the package that aligns with your creative ambitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <GlassCard 
              key={index} 
              className={`p-6 md:p-8 relative bg-white/95 backdrop-blur-xl border-orange-200/50 flex flex-col h-full ${plan.popular ? 'border-2 border-orange-400/70 md:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              
              {plan.discount && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold rotate-12 shadow-lg">
                  Limited Time!
                </div>
              )}
              
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  {plan.originalPrice && (
                    <div className="text-lg md:text-xl text-gray-500 line-through mb-1">{plan.originalPrice}</div>
                  )}
                  <div className="text-3xl md:text-4xl font-bold adventure-text">{plan.price}</div>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{plan.description}</p>
              </div>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start text-sm md:text-base">
                    <span className="text-green-500 mr-2 md:mr-3 font-bold text-base">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <GlassButton 
                  className="w-full justify-center travel-button text-sm md:text-base py-3 md:py-4" 
                  variant={plan.popular ? 'primary' : 'secondary'}
                >
                  Apply Now - Limited to 10 Seats
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-orange-600 text-sm md:text-base font-medium">
            Early Bird Offer: Save ₹29,999 on Base Expedition - Limited Time Only!
          </p>
        </div>
      </div>
    </section>
  );
};
