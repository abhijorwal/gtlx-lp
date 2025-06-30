import { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';

export const TransformationShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) rotate(${scrollY * 0.1}deg)`,
            transition: 'transform 0.6s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) rotate(${scrollY * -0.1}deg)`,
            transition: 'transform 0.6s ease-out'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 font-display"
            style={{
              transform: `perspective(800px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg) translateZ(30px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <span className="text-white drop-shadow-2xl">See the Journey</span>
          </h2>
          <p 
            className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto font-medium drop-shadow-lg"
            style={{
              transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
              transition: 'transform 0.4s ease-out'
            }}
          >
            Real People. Real Journeys. Real Transformations.
          </p>
        </div>

        {/* Main YouTube Documentary Feature */}
        <div className="mb-16 md:mb-20">
          <GlassCard 
            className="p-8 md:p-10 max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border-orange-200/30"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1}deg) translateZ(20px) translateY(${Math.sin(scrollY * 0.001) * 5}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center drop-shadow-lg">Past Expedition Documentary</h3>
            <div className="aspect-video rounded-2xl relative overflow-hidden shadow-2xl border-2 border-orange-300/30">
              <iframe
                src="https://www.youtube.com/embed/XkF3misuxRc?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0"
                title="Expedition Documentary"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </GlassCard>
        </div>

        {/* Instagram Reels in Floating Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            { url: 'https://www.instagram.com/reel/C-PqlB0SYOi/embed/', title: 'Deepak Taal', delay: 0 },
            { url: 'https://www.instagram.com/reel/C-k2M7AyY6s/embed/', title: 'Lahaul', delay: 0.2 },
            { url: 'https://www.instagram.com/reel/C5uibHnPExr/embed/', title: 'Jamahal, Jaipur', delay: 0.4 },
            { url: 'https://www.instagram.com/reel/DHNetL5Rhyr/embed/', title: 'Winter Lahaul', delay: 0.6 }
          ].map((reel, index) => (
            <div
              key={index}
              className="group"
              style={{
                transform: `
                  perspective(600px) 
                  rotateX(${mousePosition.y * (index % 2 === 0 ? 3 : -3)}deg) 
                  rotateY(${mousePosition.x * (index % 2 === 0 ? -2 : 2)}deg) 
                  translateZ(${15 + index * 3}px)
                  translateY(${Math.sin(scrollY * 0.002 + index) * 10}px)
                `,
                transition: 'transform 0.4s ease-out',
                animationDelay: `${reel.delay}s`
              }}
            >
              <GlassCard className="p-4 md:p-6 h-full backdrop-blur-xl bg-white/10 border-orange-200/30 group-hover:bg-white/20 transition-all duration-500 relative overflow-hidden">
                {/* Gradient Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="aspect-[9/16] rounded-xl relative overflow-hidden mb-3 md:mb-4 shadow-lg border border-orange-300/20">
                    <iframe
                      src={reel.url}
                      className="w-full h-full"
                      allow="autoplay; clipboard-write; encrypted-media"
                      allowFullScreen
                      style={{ border: 'none' }}
                    />
                  </div>
                  <p className="text-center font-semibold text-white text-sm md:text-base drop-shadow-lg group-hover:text-orange-200 transition-colors duration-300">{reel.title}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Floating Quote */}
        <div className="text-center">
          <GlassCard 
            className="p-6 md:p-8 inline-block max-w-3xl backdrop-blur-xl bg-white/10 border-orange-200/30"
            style={{
              transform: `
                perspective(800px) 
                rotateX(${mousePosition.y * 0.5}deg) 
                rotateY(${mousePosition.x * 0.5}deg) 
                translateZ(25px)
                translateY(${Math.cos(scrollY * 0.001) * 5}px)
              `,
              transition: 'transform 0.5s ease-out'
            }}
          >
            <blockquote className="text-2xl md:text-3xl font-bold text-white italic mb-4 drop-shadow-lg">
              "This wasn't a trip. It was a mirror."
            </blockquote>
            <p className="text-orange-300 text-lg md:text-xl font-semibold drop-shadow-lg">- Previous Expedition Participant</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
