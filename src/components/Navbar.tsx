import { cn } from '@/lib/utils';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar = ({ isScrolled }: NavbarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-black/50 backdrop-blur-lg shadow-2xl shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 transition-all duration-500 ease-in-out">
          {/* Logo placeholder on the left */}
          <div className="flex-shrink-0">
            {/* The logo is handled in Index.tsx to manage its complex animation */}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('pricing')}
              className="ml-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </button>
          </div>
          
          {/* Mobile Menu Button (functionality can be added later) */}
          <div className="md:hidden">
            <button className="text-white/80 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
