import { GlassCard } from './GlassCard';
import { Smartphone, Camera, Scissors, Bot, Mic, Video } from 'lucide-react';

const highlights = [
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'Mobile Filmmaking',
    description: 'Master iPhone & Android cinematography with professional techniques that turn your phone into a movie camera.',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-blue-500'
  },
  {
    icon: Camera,
    emoji: '🚁',
    title: 'Drone & Camera Cinematography',
    description: 'Create breathtaking aerial shots with DJI drones and professional Sony Alpha camera systems.',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-purple-500'
  },
  {
    icon: Scissors,
    emoji: '✂️',
    title: 'Reels Editing',
    description: 'Edit viral-worthy content using VN, CapCut, and other industry-standard mobile editing tools.',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-purple-500'
  },
  {
    icon: Bot,
    emoji: '🤖',
    title: 'AI for Creators',
    description: 'Harness ChatGPT, Canva AI, and Captions to supercharge your creative workflow and content strategy.',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-500'
  },
  {
    icon: Mic,
    emoji: '🎙️',
    title: 'On-Camera Confidence & Branding',
    description: 'Build your personal brand and overcome camera shyness with proven confidence-building techniques.',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-amber-500'
  },
  {
    icon: Video,
    emoji: '📹',
    title: '2-3 Hour Cinematic YouTube Documentary',
    description: 'Create a complete YouTube documentary showcasing your transformation and storytelling journey.',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-500'
  }
];

export const ExperienceHighlights = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-500/40 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-amber-500/40 rounded-full blur-3xl animate-float-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 font-display">
            <span className="adventure-text">More Than Travel. This Is Creative Liberation.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Master the skills that will transform you from a dreamer into a professional creator and storyteller.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <GlassCard 
                className="p-8 md:p-10 text-center animate-fade-in-scale h-full relative overflow-hidden"
              >
                {/* Gradient Glow Effect on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${item.gradientFrom}/10 ${item.gradientTo}/10 blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-r ${item.gradientFrom}/20 ${item.gradientTo}/20 flex items-center justify-center mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg`}>
                    <item.icon 
                      size={40} 
                      className={`text-transparent bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} bg-clip-text filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(234, 88, 12, 0.5))',
                        transform: 'translateZ(20px)'
                      }}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 font-display group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">{item.description}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
