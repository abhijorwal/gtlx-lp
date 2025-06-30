import { GlassCard } from './GlassCard';

export const Footer = () => {
  return (
    <footer className="section-padding mountain-bg relative">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float-gentle" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <GlassCard className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <img 
                  src="https://odrolevdpfpojjdfqczv.supabase.co/storage/v1/object/public/assets//Gotravlx%20Logo.png" 
                  alt="GoTravlx" 
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold adventure-text">GoTravlx</h3>
                  <p className="text-gray-600 text-sm">Create. Explore. Transform.</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                The Content Creation Expedition
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-gray-500 text-sm mr-3">In partnership with</span>
                <img 
                  src="https://odrolevdpfpojjdfqczv.supabase.co/storage/v1/object/public/assets//illusion%20films%20logo.png" 
                  alt="Illusion Films" 
                  className="w-8 h-8"
                />
                <span className="text-gray-600 text-sm ml-2 font-medium">Illusion Films</span>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Get in Touch</h4>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>📧 hello@gotravlx.com</p>
                <p>📱 WhatsApp: Contact Us</p>
                <p>📺 YouTube: Transformation Stories</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Quick Links</h4>
              <div className="space-y-2 text-gray-600">
                <p><a href="#home" className="hover:text-purple-500 transition-colors">Home</a></p>
                <p><a href="#itinerary" className="hover:text-purple-500 transition-colors">Itinerary</a></p>
                <p><a href="#apply" className="hover:text-purple-500 transition-colors">Apply Now</a></p>
                <p><a href="#faq" className="hover:text-purple-500 transition-colors">FAQ</a></p>
                <p><a href="#" className="hover:text-purple-500 transition-colors">Terms &amp; Conditions</a></p>
                <p><a href="#" className="hover:text-purple-500 transition-colors">Refund Policy</a></p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
            <p>© 2025 GoTravlx. All rights reserved. | Crafted with ❤️ for creators worldwide</p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};
