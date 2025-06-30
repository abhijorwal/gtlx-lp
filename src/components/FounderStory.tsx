import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const FounderStory = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * 20, y: y * 20 });
  };

  return (
    <section 
      id="founder-story" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://gotravlx.com/wp-content/uploads/2025/06/gotravlx-founder-msg-page-shot-1.mp4"
        poster="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      {/* Transparent Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-1"></div>

      {/* Main Content Container */}
      <div ref={sectionRef} className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}>
          
          {/* Circular Founder Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div 
              className="relative w-80 h-80"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-500"
                style={{
                  transform: `perspective(800px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(${isHovered ? 30 : 0}px)`,
                  boxShadow: isHovered 
                    ? `${mousePosition.x}px ${mousePosition.y + 20}px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(234, 88, 12, 0.3)` 
                    : '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img 
                  src="https://odrolevdpfpojjdfqczv.supabase.co/storage/v1/object/public/assets//Abhisehk%20Jorwal%20Founder%20Gotravlx.jpg"
                  alt="Founder in the Himalayas"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                From Dreamer to Documentary Filmmaker
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-8 animate-pulse-glow"></div>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/90">
              <p className="drop-shadow-lg">
                "Three years ago, I was just another content creator struggling to find my voice. 
                The mountains changed everything. They taught me that every story worth telling 
                requires courage, patience, and the willingness to step into the unknown."
              </p>
              
              <p className="drop-shadow-lg">
                "This expedition isn't just about creating content—it's about discovering who 
                you become when you push beyond your comfort zone. The Himalayas don't just 
                provide a backdrop; they become your teacher, your challenge, and your transformation."
              </p>
              
              <div className="pt-6">
                <p className="font-semibold text-orange-300 text-lg md:text-xl drop-shadow-lg">
                  Founder, Gotravlx
                </p>
                <p className="text-white/70 italic">
                  Documentary Filmmaker &amp; Content Strategist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
