import { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';

const itinerary = [
  {
    day: 1,
    location: 'Kalgha',
    title: 'Orientation + Smartphone Shooting',
    description: 'Begin your journey with orientation and master smartphone cinematography basics',
    image: '/lovable-uploads/itinerary-1.jpg'
  },
  {
    day: '2-3',
    location: 'Kasol & Chalal Trails',
    title: 'Reel Practice + Interviews',
    description: 'Create your first viral reels and conduct compelling interviews along scenic trails',
    image: '/lovable-uploads/itinerary-2.jpg'
  },
  {
    day: 4,
    location: 'Bijli Mahadev Trek',
    title: 'Storytelling + Voiceovers',
    description: 'Master the art of storytelling while trekking to the ancient temple',
    image: '/lovable-uploads/itinerary-3.jpg'
  },
  {
    day: 5,
    location: 'Manali',
    title: 'Drone + Camera Challenges',
    description: 'Take on advanced drone flying and professional camera techniques',
    image: '/lovable-uploads/itinerary-4.jpg'
  },
  {
    day: 6,
    location: 'Atal Tunnel + Sissu',
    title: 'Mountain Filmmaking',
    description: 'Capture breathtaking mountain footage in some of the most scenic locations',
    image: '/lovable-uploads/itinerary-5.jpg'
  },
  {
    day: 7,
    location: 'Jispa & Keylong',
    title: 'Creator Showcase',
    description: 'Present your work and receive feedback in our creator showcase session',
    image: '/lovable-uploads/itinerary-6.jpg'
  },
  {
    day: 8,
    location: 'Baralacha La',
    title: 'Final Shoot + Reflections',
    description: 'Complete your final cinematic shots and reflect on your transformation',
    image: '/lovable-uploads/itinerary-7.jpg'
  },
  {
    day: 9,
    location: 'Final Location',
    title: 'Final Ceremony + Documentary Wrap',
    description: 'Celebrate your achievement and wrap up your documentary project',
    image: '/lovable-uploads/itinerary-8.jpg'
  }
];

export const ItineraryTimeline = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const items = document.querySelectorAll('.timeline-item');
      const visible: number[] = [];
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
        if (isVisible) {
          visible.push(index);
        }
      });
      
      setVisibleItems(visible);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="itinerary" 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1464822759844-d150baec4263?auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 opacity-15" style={{
        transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
        transition: 'transform 0.6s ease-out'
      }}>
        <div className="timeline-bg-orb timeline-orb-1"></div>
        <div className="timeline-bg-orb timeline-orb-2"></div>
        <div className="timeline-bg-orb timeline-orb-3"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-scale">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white drop-shadow-xl font-display">
            Your 9-Day Expedition Blueprint
          </h2>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto mb-6 md:mb-8 font-medium drop-shadow-lg">
            Each day is carefully crafted to build upon the last, taking you from tentative creator to confident storyteller.
          </p>
        </div>

        {/* Enhanced Professional Roadmap */}
        <div className="enhanced-roadmap-container">
          <div className="enhanced-roadmap-line"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {itinerary.map((item, index) => {
              const isVisible = visibleItems.includes(index);
              
              return (
                <div 
                  key={index} 
                  className={`enhanced-roadmap-item timeline-item timeline-item-${index} transform transition-all duration-700`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isVisible 
                      ? `translateX(0) translateY(0) scale(1) rotateY(0deg)`
                      : `translateX(${index % 2 === 0 ? -100 : 100}px) translateY(50px) scale(0.9) rotateY(${index % 2 === 0 ? -10 : 10}deg)`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <GlassCard className="p-6 md:p-8 enhanced-roadmap-content h-full">
                    <div className="flex items-start gap-4 md:gap-6">
                      {/* Enhanced Image */}
                      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                        <div className="media-placeholder aspect-square rounded-xl overflow-hidden transform hover:scale-110 transition-transform duration-500 shadow-lg">
                          <img 
                            src={item.image}
                            alt={item.location}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to placeholder gradient if image fails to load
                              e.currentTarget.style.background = 'linear-gradient(45deg, #ea580c, #f59e0b)';
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Enhanced Content */}
                      <div className="flex-1">
                        <div className="mb-3">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg">
                              {item.day}
                            </div>
                            <div>
                              <h3 className="text-lg md:text-xl font-bold text-gray-800 transform hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                              <p className="text-orange-600 text-sm font-semibold transform hover:translate-x-1 transition-transform duration-300">{item.location}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16 animate-fade-in-scale">
          <button className="hero-cta-button text-white text-base md:text-lg px-8 md:px-12 py-3 md:py-4 transform hover:scale-105 transition-all duration-300">
            📄 Download Full PDF Itinerary
          </button>
        </div>
      </div>
    </section>
  );
};
