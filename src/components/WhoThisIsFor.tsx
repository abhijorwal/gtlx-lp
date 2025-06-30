import { GlassCard } from './GlassCard';
import { Users, UserCheck, Camera, RotateCcw, Target } from 'lucide-react';

const personas = [
  {
    icon: Users,
    title: 'Aspiring Creators',
    description: 'Ready to turn your creative dreams into reality with professional guidance and structured learning',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    icon: UserCheck,
    title: 'Coaches / Doctors / Educators',
    description: 'Professionals wanting to amplify their impact and build personal brands through storytelling',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Camera,
    title: 'Filmmakers Without Structure',
    description: 'Independent filmmakers looking for mentorship and systematic skill development',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: RotateCcw,
    title: 'Stuck Professionals Needing Rebirth',
    description: 'Feeling creatively blocked and seeking inspiration through transformative experiences',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    icon: Target,
    title: 'Seekers of Purpose Through Art',
    description: 'Those looking to discover their authentic voice and mission through creative expression',
    gradient: 'from-amber-500 to-orange-500'
  }
];

export const WhoThisIsFor = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-slate-100 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-32 right-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-float-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-display">
            <span className="adventure-text">Is This Expedition for You?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            This expedition is designed for passionate individuals ready to transform their creative potential into powerful stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {personas.slice(0, 3).map((persona, index) => (
            <div key={index} className="group">
              <GlassCard 
                className="p-6 md:p-8 text-center hover:scale-105 transition-all duration-500 bg-white/95 backdrop-blur-xl border-orange-200/50 h-full relative overflow-hidden"
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${persona.gradient.replace('from-', 'from-').replace('to-', 'to-')}/10 blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${persona.gradient}/20 flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg`}>
                    <persona.icon 
                      size={32} 
                      className={`text-transparent bg-gradient-to-r ${persona.gradient} bg-clip-text group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(234, 88, 12, 0.4))',
                      }}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-orange-600 transition-colors duration-300">{persona.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">{persona.description}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
          {personas.slice(3).map((persona, index) => (
            <div key={index + 3} className="group">
              <GlassCard 
                className="p-6 md:p-8 text-center hover:scale-105 transition-all duration-500 bg-white/95 backdrop-blur-xl border-orange-200/50 h-full relative overflow-hidden"
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${persona.gradient.replace('from-', 'from-').replace('to-', 'to-')}/10 blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${persona.gradient}/20 flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg`}>
                    <persona.icon 
                      size={32} 
                      className={`text-transparent bg-gradient-to-r ${persona.gradient} bg-clip-text group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(234, 88, 12, 0.4))',
                      }}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-orange-600 transition-colors duration-300">{persona.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">{persona.description}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
