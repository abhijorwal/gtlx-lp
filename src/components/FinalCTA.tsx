import { GlassButton } from './GlassButton';

export const FinalCTA = () => {
  return (
    <section id="apply" className="py-16 md:py-20 flex items-center justify-center parallax-bg relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 md:top-20 left-16 md:left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 md:bottom-20 right-16 md:right-20 w-64 md:w-80 h-64 md:h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-64 md:h-[400px] bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Trekker silhouette effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-t from-white/20 to-transparent rounded-full blur-sm"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
          <span className="glass-text">
            "Some Trips Give You Memories.<br />This One Gives You Meaning."
          </span>
        </blockquote>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 md:mb-8 leading-relaxed">
          Let's create your cinematic legacy. Together.<br />Your story is waiting to be told.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-4 md:mb-6">
          <GlassButton size="lg" className="animate-glass-glow text-base md:text-lg px-8 md:px-12 py-3 md:py-4">
            🚀 Start Your Application
          </GlassButton>
          <GlassButton size="lg" variant="secondary" className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4">
            💬 Chat with Us on WhatsApp
          </GlassButton>
        </div>

        {/* Urgency Text */}
        <div className="space-y-1 md:space-y-2 mb-6 md:mb-8">
          <p className="text-white/60 text-xs md:text-sm">
            Only 10 spots available • Next expedition starts soon
          </p>
          <p className="text-white/60 text-xs md:text-sm">
            Early bird pricing ends soon - Save ₹10,000
          </p>
        </div>

        {/* Scroll to top hint */}
        <div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white/40 hover:text-white/60 transition-colors text-sm md:text-base"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </section>
  );
};
