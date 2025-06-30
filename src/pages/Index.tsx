import { useEffect, useState, useRef } from 'react';
import { VideoBackground } from '@/components/VideoBackground';
import { Navbar } from '@/components/Navbar';
import { GlassButton } from '@/components/GlassButton';
import { cn } from '@/lib/utils';

// Import other sections to be displayed
import { FounderStory } from '@/components/FounderStory';
import { ExperienceHighlights } from '@/components/ExperienceHighlights';
import { ItineraryTimeline } from '@/components/ItineraryTimeline';
import { WhoThisIsFor } from '@/components/WhoThisIsFor';
import { TransformationShowcase } from '@/components/TransformationShowcase';
import { WhatsIncluded } from '@/components/WhatsIncluded';
import { LegalTransparency } from '@/components/LegalTransparency';
import { PricingPlans } from '@/components/PricingPlans';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scrolled state slightly before the top for a smoother effect
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleApplyClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={mainContainerRef} className="bg-black">
      {/* Background Container: Handles fixed/absolute positioning */}
      <div
        className={cn(
          'w-full h-screen top-0 left-0 transition-all duration-500 ease-in-out',
          isFooterVisible ? 'absolute' : 'fixed'
        )}
        style={{
          // When footer is visible, position becomes absolute relative to the main container
          // We calculate the top position to ensure it scrolls up from the correct spot
          top: isFooterVisible && mainContainerRef.current
            ? `${mainContainerRef.current.offsetHeight - window.innerHeight}px`
            : '0px',
        }}
      >
        <VideoBackground />
        <div
          className={cn(
            'absolute inset-0 bg-black/60 transition-opacity duration-1000 pointer-events-none',
            isScrolled ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>

      {/* Navigation Bar */}
      <Navbar isScrolled={isScrolled} />

      {/* All content scrolls over the background */}
      <div className="relative z-10">
        {/* Hero Content Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-white text-center p-4">
          <div className="flex flex-col items-center">
            <img
              src="https://odrolevdpfpojjdfqczv.supabase.co/storage/v1/object/public/assets//Gotravlx%20Logo.png"
              alt="Gotravlx Logo"
              className={cn(
                'transition-all duration-700 ease-in-out z-50',
                isScrolled
                  ? 'w-16 fixed top-4 left-4 sm:left-6 lg:left-8'
                  : 'w-32 mb-6'
              )}
            />
            <div className={cn('transition-opacity duration-700', isScrolled ? 'opacity-0' : 'opacity-100')}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-strong">
                Join the 9-Day
                <br />
                <span className="adventure-text">Creator Expedition</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Forge your story in the heart of the Himalayas. A journey of creation, connection, and transformation.
              </p>
              <GlassButton
                onClick={handleApplyClick}
                className="mt-8 text-lg px-10 py-4"
              >
                🚀 Start Your Application
              </GlassButton>
            </div>
          </div>
        </section>

        {/* Other Page Sections */}
        <FounderStory />
        <ExperienceHighlights />
        <ItineraryTimeline />
        <WhoThisIsFor />
        <TransformationShowcase />
        <WhatsIncluded />
        <LegalTransparency />
        <PricingPlans />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </div>
      
      {/* Footer Trigger to unstick video */}
      <footer ref={footerRef} className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
