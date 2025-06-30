import { useEffect, useRef, useState } from 'react';

const videos = [
  'https://gotravlx.com/wp-content/uploads/2025/06/Gotravlx-Hero-Page-shot-1.mp4',
  'https://gotravlx.com/wp-content/uploads/2025/06/Gotravlx-Hero-Page-shot-2.mp4',
  'https://gotravlx.com/wp-content/uploads/2025/06/gotravlx-hero-page-shot-3.mp4',
];

export const VideoBackground = () => {
  const player1Ref = useRef<HTMLVideoElement>(null);
  const player2Ref = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayer1Active, setIsPlayer1Active] = useState(true);
  const animationFrameRef = useRef<number | null>(null);

  // Preload the first video
  useEffect(() => {
    if (player1Ref.current && !player1Ref.current.src) {
      player1Ref.current.src = videos[0];
      player1Ref.current.load();
    }
  }, []);

  useEffect(() => {
    const currentVideo = isPlayer1Active ? player1Ref.current : player2Ref.current;
    const nextVideo = isPlayer1Active ? player2Ref.current : player1Ref.current;

    if (!currentVideo || !nextVideo) return;

    const checkTimeAndTransition = () => {
      // Start transition 1.5s before the end for a seamless cross-dissolve
      if (currentVideo.duration && currentVideo.duration - currentVideo.currentTime < 1.5) {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        
        const nextIndex = (currentIndex + 1) % videos.length;

        nextVideo.src = videos[nextIndex];
        nextVideo.load();

        nextVideo.oncanplaythrough = () => {
          nextVideo.play();
          nextVideo.style.opacity = '1';
          currentVideo.style.opacity = '0';

          // After transition, update state and clean up
          setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsPlayer1Active(!isPlayer1Active);
          }, 1500); // Match CSS transition duration

          nextVideo.oncanplaythrough = null;
        };
      } else {
        animationFrameRef.current = requestAnimationFrame(checkTimeAndTransition);
      }
    };

    currentVideo.play().catch(error => console.error("Video play failed:", error));
    currentVideo.style.opacity = '1';
    nextVideo.style.opacity = '0';
    animationFrameRef.current = requestAnimationFrame(checkTimeAndTransition);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (currentVideo) currentVideo.oncanplaythrough = null;
      if (nextVideo) nextVideo.oncanplaythrough = null;
    };
  }, [currentIndex, isPlayer1Active]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <video
        ref={player1Ref}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
        style={{ opacity: isPlayer1Active ? 1 : 0 }}
      />
      <video
        ref={player2Ref}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
        style={{ opacity: isPlayer1Active ? 0 : 1 }}
      />
    </div>
  );
};
