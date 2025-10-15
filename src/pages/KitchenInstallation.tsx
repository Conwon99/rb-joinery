import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, CheckCircle, Star, ArrowRight, Home, Ruler, Users, Award, ChefHat, Wrench } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const KitchenInstallation = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('kitchen_installation_page', ['Kitchen Installation Service']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('kitchen_installation_page');
    window.location.href = "tel:+447927726622";
  };

  const handleEmailClick = () => {
    trackEmailClick('kitchen_installation_page');
  };

  return (
    <>
      <Helmet>
        <title>Kitchen Installation Ayrshire & Glasgow | Professional Kitchen Fitting | RB Joinery</title>
        <meta name="description" content="Professional kitchen installation services in Ayrshire and Glasgow. Design, supply, and fit kitchens with expert craftsmanship. Free quotes available." />
        <meta name="keywords" content="kitchen installation ayrshire, kitchen installation glasgow, kitchen fitting, kitchen design, kitchen supply, bespoke kitchens, kitchen renovation" />
        <link rel="canonical" href="https://rbjoinery.com/kitchen-installation" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Kitchen Installation Ayrshire & Glasgow | Professional Kitchen Fitting | RB Joinery" />
        <meta property="og:description" content="Professional kitchen installation services in Ayrshire and Glasgow. Design, supply, and fit kitchens with expert craftsmanship. Free quotes available." />
        <meta property="og:url" content="https://rbjoinery.com/kitchen-installation" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Kitchen Installation Ayrshire & Glasgow | Professional Kitchen Fitting | RB Joinery" />
        <meta name="twitter:description" content="Professional kitchen installation services in Ayrshire and Glasgow. Design, supply, and fit kitchens with expert craftsmanship. Free quotes available." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RB Joinery - Kitchen Installation",
            "description": "Professional kitchen installation services in Ayrshire and Glasgow including design, supply, and fitting of bespoke and standard kitchens.",
            "url": "https://rbjoinery.com/kitchen-installation",
            "telephone": "+447927726622",
            "email": "Ryan@rbjoinery.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kilmarnock",
              "addressRegion": "Ayrshire",
              "addressCountry": "Scotland"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Kilmarnock",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Ayrshire"
                }
              },
              {
                "@type": "City",
                "name": "Glasgow",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Scotland"
                }
              }
            ],
            "serviceType": ["Kitchen Installation", "Kitchen Design", "Kitchen Supply", "Kitchen Fitting", "Bespoke Kitchens", "Kitchen Renovation"],
            "openingHours": "Mo-Fr 08:00-18:00,Sa 09:00-16:00",
            "priceRange": "Quote on request"
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Kitchen Installation
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Professional Kitchen Design & Installation in Ayrshire & Glasgow
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Transform your kitchen with our expert design, supply, and installation services. 
                  From bespoke handcrafted kitchens to modern fitted solutions, we deliver 
                  quality craftsmanship that exceeds expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleQuoteClick}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                  >
                    Get Free Quote
                  </Button>
                  <Button 
                    onClick={handleCallClick}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 07927 726622
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/Services/kitchen-installation-hero.webp" 
                  alt="Professional kitchen installation services"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Kitchen Types */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kitchen Installation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive kitchen services from initial design through to 
                final installation and finishing touches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <ChefHat className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Design</h3>
                <p className="text-gray-600 mb-4">
                  Professional kitchen design service with 3D visualization to help you 
                  visualize your dream kitchen before installation.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 3D design visualization</li>
                  <li>• Space optimization</li>
                  <li>• Style consultation</li>
                  <li>• Material selection</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Supply</h3>
                <p className="text-gray-600 mb-4">
                  Source quality kitchen units, appliances, and accessories from trusted 
                  suppliers at competitive prices.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Quality kitchen units</li>
                  <li>• Premium appliances</li>
                  <li>• Worktop materials</li>
                  <li>• Hardware and accessories</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Installation</h3>
                <p className="text-gray-600 mb-4">
                  Expert installation service with attention to detail and professional 
                  finishing touches throughout.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Precise fitting</li>
                  <li>• Electrical connections</li>
                  <li>• Plumbing installation</li>
                  <li>• Final finishing</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bespoke Kitchens</h3>
                <p className="text-gray-600 mb-4">
                  Handcrafted bespoke kitchens designed and built to your exact specifications 
                  and requirements.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Custom design solutions</li>
                  <li>• Handcrafted construction</li>
                  <li>• Unique features</li>
                  <li>• Premium finishes</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Ruler className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Renovation</h3>
                <p className="text-gray-600 mb-4">
                  Complete kitchen renovation service including structural work, 
                  plumbing, and electrical updates.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Structural modifications</li>
                  <li>• Plumbing updates</li>
                  <li>• Electrical rewiring</li>
                  <li>• Complete transformation</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Aftercare Service</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive aftercare service with warranty support and maintenance 
                  advice for your new kitchen.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Warranty support</li>
                  <li>• Maintenance advice</li>
                  <li>• Repair services</li>
                  <li>• Ongoing support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Kitchen Styles */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kitchen Styles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We design and install kitchens in a wide variety of styles to suit 
                your home and personal preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Kitchens</h3>
                <p className="text-gray-600">
                  Sleek, contemporary designs with clean lines and minimalist aesthetics.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Traditional Kitchens</h3>
                <p className="text-gray-600">
                  Classic designs with timeless appeal and traditional craftsmanship.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Country Kitchens</h3>
                <p className="text-gray-600">
                  Warm, welcoming designs with rustic charm and natural materials.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Shaker Kitchens</h3>
                <p className="text-gray-600">
                  Versatile shaker-style designs that work in both traditional and modern homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Kitchen Installation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final handover, we guide you through 
                every step of your kitchen installation journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation</h3>
                <p className="text-gray-600">
                  Initial consultation to understand your requirements, style preferences, 
                  and budget considerations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
                <p className="text-gray-600">
                  Create detailed kitchen designs with 3D visualization and material 
                  selection guidance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation</h3>
                <p className="text-gray-600">
                  Professional installation with minimal disruption to your daily routine 
                  and home life.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Handover</h3>
                <p className="text-gray-600">
                  Final inspection, demonstration of features, and handover with 
                  comprehensive warranty and aftercare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose RB Joinery for Your Kitchen?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With years of experience in kitchen design and installation, we deliver 
                exceptional results that transform your home.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Craftsmanship</h3>
                <p className="text-gray-600">
                  Skilled craftspeople with extensive experience in kitchen installation 
                  and joinery work.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Service</h3>
                <p className="text-gray-600">
                  Complete service from design through to installation and aftercare 
                  support.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Materials</h3>
                <p className="text-gray-600">
                  We work with trusted suppliers to ensure only the highest quality 
                  materials and components.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Installation</h3>
                <p className="text-gray-600">
                  Expert installation with attention to detail and professional 
                  finishing throughout.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Service</h3>
                <p className="text-gray-600">
                  Dedicated project management with regular communication and updates 
                  throughout the process.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Warranty Included</h3>
                <p className="text-gray-600">
                  Comprehensive warranty on all work with ongoing support and 
                  maintenance services available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for your kitchen installation project. Our expert team is ready 
              to help you create the perfect kitchen for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleQuoteClick}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 07927 726622
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a 
                  href="tel:+447927726622" 
                  onClick={handleCallClick}
                  className="text-green-600 hover:text-green-700"
                >
                  07927 726622
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                  href="mailto:Ryan@rbjoinery.com" 
                  onClick={handleEmailClick}
                  className="text-green-600 hover:text-green-700"
                >
                  Ryan@rbjoinery.com
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default KitchenInstallation;


