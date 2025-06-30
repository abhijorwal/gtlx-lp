import { useState } from 'react';
import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    expectations: '',
    instagram: '',
    package: 'base'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'hello@gotravlx.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        expectations: formData.expectations,
        instagram: formData.instagram,
        package: formData.package === 'base' ? 'Base Expedition (₹50,000)' : 'Premium Creator Plan (₹94,999)',
        message: `
New Application Received:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Package: ${formData.package === 'base' ? 'Base Expedition (₹50,000)' : 'Premium Creator Plan (₹94,999)'}
Instagram: ${formData.instagram}

Experience Level:
${formData.experience}

Expectations:
${formData.expectations}
        `
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll contact you within 24 hours.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        expectations: '',
        instagram: '',
        package: 'base'
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form" className="section-padding bg-gradient-to-br from-orange-50 to-amber-50 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-float-gentle" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-display">
            <span className="adventure-text">Ready to Transform?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Apply now - Only 10 seats available for this exclusive expedition
          </p>
        </div>

        <GlassCard className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                Select Package *
              </label>
              <select
                id="package"
                name="package"
                value={formData.package}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              >
                <option value="base">Base Expedition - ₹50,000</option>
                <option value="premium">Premium Creator Plan - ₹94,999</option>
              </select>
            </div>

            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
                Instagram Handle (Optional)
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
                placeholder="@yourusername"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Current Experience Level with Content Creation *
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Tell us about your current content creation experience..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            <div>
              <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-2">
                What do you hope to achieve from this expedition? *
              </label>
              <textarea
                id="expectations"
                name="expectations"
                value={formData.expectations}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Share your goals and expectations..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            <div className="text-center pt-4">
              <GlassButton
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="px-12 py-4 text-lg font-semibold"
              >
                {isSubmitting ? 'Submitting...' : '🚀 Submit Application'}
              </GlassButton>
              <p className="text-sm text-gray-600 mt-4">
                We'll review your application and get back to you within 24 hours
              </p>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};
