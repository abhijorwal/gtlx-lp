import { useEffect, useRef, useState } from 'react';
import { GlassButton } from './GlassButton';
import { Navbar } from './Navbar';

const videoPlaylist = [
  'https://gotravlx.com/wp-content/uploads/2025/06/Gotravlx-Hero-Page-shot-1.mp4',
  'https://gotravlx.com/wp-content/uploads/2025/06/Gotravlx-Hero-Page-shot-2.mp4',
  'https://gotravlx.com/wp-content/uploads/2025/06/gotravlx-hero-page-shot-3.mp4',
];

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const player1Ref = useRef<HTMLVideoElement>(null);
  const player2Ref = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayer1Active, setIsPlayer1Active] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 7000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (player1Ref.current && !player1Ref.current.src) {
      player1Ref.current.src = videoPlaylist[0];
    }
  }, []);

  useEffect(() => {
    const currentVideo = isPlayer1Active ? player1Ref.current : player2Ref.current;
    const nextVideo = isPlayer1Active ? player2Ref.current : player1Ref.current;

    if (!currentVideo || !nextVideo) return;

    const checkTimeAndTransition = () => {
      if (currentVideo.duration && currentVideo.duration - currentVideo.currentTime < 1.5) {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        
        const nextIndex = (currentIndex + 1) % videoPlaylist.length;

        nextVideo.src = videoPlaylist[nextIndex];
        nextVideo.load();

        nextVideo.oncanplay = () => {
          nextVideo.play();
          nextVideo.style.opacity = '1';
          currentVideo.style.opacity = '0';

          setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsPlayer1Active(!isPlayer1Active);
          }, 1500);

          nextVideo.oncanplay = null;
        };
      } else {
        animationFrameRef.current = requestAnimationFrame(checkTimeAndTransition);
      }
    };

    currentVideo.play();
    currentVideo.style.opacity = '1';
    nextVideo.style.opacity = '0';
    animationFrameRef.current = requestAnimationFrame(checkTimeAndTransition);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (currentVideo) currentVideo.oncanplay = null;
      if (nextVideo) nextVideo.oncanplay = null;
    };
  }, [currentIndex, isPlayer1Active]);

  const handleApplyClick = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black hero-fade-bottom">
      <div className="absolute inset-0 z-0">
        <video
          ref={player1Ref}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: isPlayer1Active ? 1 : 0, zIndex: isPlayer1Active ? 2 : 1, transform: 'scale(1.1)' }}
        />
        <video
          ref={player2Ref}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: !isPlayer1Active ? 1 : 0, zIndex: !isPlayer1Active ? 2 : 1, transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>
      
      <Navbar />
      
      <div className="absolute inset-0 opacity-20 z-5">
        <div className="hero-floating-orb hero-orb-1"></div>
        <div className="hero-floating-orb hero-orb-2"></div>
        <div className="hero-floating-orb hero-orb-3"></div>
        <div className="hero-floating-orb hero-orb-4"></div>
        <div className="hero-floating-orb hero-orb-5"></div>
      </div>

      <div className="relative z-10 flex items-start md:items-center justify-center min-h-screen pt-24 md:pt-0">
        <div className="text-center max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-12 flex flex-col items-center animate-fade-in-scale">
            <img 
              src="https://odrolevdpfpojjdfqczv.supabase.co/storage/v1/object/public/assets//Gotravlx%20Logo.png" 
              alt="Gotravlx" 
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-float-gentle drop-shadow-2xl"
            />
          </div>

          <h1 
            className="text-xl md:text-2xl lg:text-3xl text-white mb-8 md:mb-12 max-w-4xl mx-auto leading-tight font-bold animate-slide-in-left hero-text-shadow-soft"
            style={{
              transform: `perspective(800px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg) translateZ(30px) translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
              transition: 'transform 0.4s ease-out'
            }}
          >
            Join 9-Day Content Creation Expedition in the Himalayas
          </h1>

          <div 
            className="space-y-4 md:space-y-6 animate-slide-in-right"
            style={{
              transform: `translateX(${mousePosition.x * 8}px) translateY(${mousePosition.y * 8}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <GlassButton 
              size="lg" 
              className="hero-cta-button text-lg md:text-xl px-12 md:px-16 py-4 md:py-6"
              onClick={handleApplyClick}
            >
              🚀 Start Your Application
            </GlassButton>
            <p className="text-white/90 text-base md:text-lg hero-text-shadow-soft">
              Limited to 10 seats • Next expedition starts soon
            </p>
          </div>

          <div 
            className="mt-12 md:mt-16 flex flex-col items-center justify-center space-y-3 text-white/80 animate-fade-in-scale"
            style={{
              transform: `translateY(${mousePosition.y * 3}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            <span className="text-sm hero-text-shadow-soft">In partnership with</span>
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="https://odrolevdpfpojjdfqczv.supabase.co/storage/v1/object/public/assets//illusion%20films%20logo.png" 
                alt="Illusion Films" 
                className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg"
              />
              <span className="text-sm font-medium hero-text-shadow-soft">Illusion Films</span>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-x-0 bottom-6 md:bottom-10 z-20 flex justify-center"
        style={{
          transition: 'opacity 1s ease-in-out',
          opacity: showScrollIndicator ? 1 : 0,
          pointerEvents: showScrollIndicator ? 'auto' : 'none',
        }}
      >
        <div
          className="animate-bounce"
          style={{
            transform: `translateY(${mousePosition.y * -5}px)`,
            transition: 'transform 0.4s ease-out',
          }}
        >
          <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/60 rounded-full flex justify-center pt-2 backdrop-blur-sm">
            <div className="w-1.5 h-3 md:w-2 md:h-4 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
