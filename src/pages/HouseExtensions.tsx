import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, CheckCircle, Star, ArrowRight, Home, Ruler, Users, Award } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const HouseExtensions = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('house_extensions_page', ['House Extensions Service']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('house_extensions_page');
    window.location.href = "tel:+447927726622";
  };

  const handleEmailClick = () => {
    trackEmailClick('house_extensions_page');
  };

  return (
    <>
      <Helmet>
        <title>House Extensions Ayrshire & Glasgow | Professional Extension Services | RB Joinery</title>
        <meta name="description" content="Professional house extension services in Ayrshire and Glasgow. Planning, design, and construction of single and two-storey extensions. Free quotes available." />
        <meta name="keywords" content="house extensions ayrshire, house extensions glasgow, extension contractors ayrshire, extension contractors glasgow, single storey extension, two storey extension, home extension design, extension planning permission" />
        <link rel="canonical" href="https://rbjoinery.com/house-extensions" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="House Extensions Ayrshire & Glasgow | Professional Extension Services | RB Joinery" />
        <meta property="og:description" content="Professional house extension services in Ayrshire and Glasgow. Planning, design, and construction of single and two-storey extensions. Free quotes available." />
        <meta property="og:url" content="https://rbjoinery.com/house-extensions" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="House Extensions Ayrshire & Glasgow | Professional Extension Services | RB Joinery" />
        <meta name="twitter:description" content="Professional house extension services in Ayrshire and Glasgow. Planning, design, and construction of single and two-storey extensions. Free quotes available." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RB Joinery - House Extensions",
            "description": "Professional house extension services in Ayrshire and Glasgow including single and two-storey extensions, planning, design, and construction.",
            "url": "https://rbjoinery.com/house-extensions",
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
            "serviceType": ["House Extensions", "Single Storey Extensions", "Two Storey Extensions", "Extension Design", "Extension Planning", "Extension Construction"],
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
                  House Extensions
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Professional Extension Services in Ayrshire & Glasgow
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Transform your home with our professional house extension services. From initial 
                  design and planning permission to complete construction, we deliver quality 
                  extensions that add value and space to your property.
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
                  src="/Services/house-extension-hero.webp" 
                  alt="Professional house extension services"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Extension Types */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Types of House Extensions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of house extension services to meet your 
                specific needs and budget requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Single Storey Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for expanding your ground floor living space with kitchen extensions, 
                  living room additions, or dining areas.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Kitchen extensions</li>
                  <li>• Living room extensions</li>
                  <li>• Dining room additions</li>
                  <li>• Utility room extensions</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Ruler className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Two Storey Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Maximize your space with two-storey extensions adding both ground and 
                  first-floor accommodation.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Additional bedrooms</li>
                  <li>• En-suite bathrooms</li>
                  <li>• Extended living areas</li>
                  <li>• Home office spaces</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rear Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Extend your home backwards to create additional living space while 
                  maintaining your garden area.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Open-plan living</li>
                  <li>• Bi-fold doors</li>
                  <li>• Garden integration</li>
                  <li>• Natural light maximization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Side Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Utilize side space for narrow extensions that can significantly 
                  increase your home's footprint.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Narrow lot extensions</li>
                  <li>• Hallway extensions</li>
                  <li>• Staircase relocation</li>
                  <li>• Utility additions</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wraparound Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Combine rear and side extensions for maximum space creation and 
                  architectural impact.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• L-shaped extensions</li>
                  <li>• Maximum space utilization</li>
                  <li>• Architectural design</li>
                  <li>• Premium finish options</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bespoke Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed extensions tailored to your specific requirements 
                  and architectural preferences.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Custom design solutions</li>
                  <li>• Unique architectural features</li>
                  <li>• Personal consultation</li>
                  <li>• 3D visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Extension Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final completion, we guide you through 
                every step of your house extension journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Consultation</h3>
                <p className="text-gray-600">
                  We visit your property to discuss your requirements, assess feasibility, 
                  and provide initial design concepts.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Planning</h3>
                <p className="text-gray-600">
                  Create detailed architectural drawings and handle planning permission 
                  applications on your behalf.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Construction</h3>
                <p className="text-gray-600">
                  Professional construction with regular updates and minimal disruption 
                  to your daily life.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Completion</h3>
                <p className="text-gray-600">
                  Final inspection, snagging, and handover with comprehensive warranty 
                  and aftercare support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose RB Joinery for Your Extension?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With years of experience in house extensions across Ayrshire and Glasgow, 
                we deliver exceptional results that exceed expectations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Craftsmanship</h3>
                <p className="text-gray-600">
                  Skilled tradespeople with extensive experience in residential construction 
                  and joinery work.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Service</h3>
                <p className="text-gray-600">
                  From initial design to final completion, we handle every aspect of 
                  your extension project.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Materials</h3>
                <p className="text-gray-600">
                  We use only the finest materials and work with trusted suppliers 
                  to ensure lasting quality.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning Expertise</h3>
                <p className="text-gray-600">
                  Expert knowledge of building regulations and planning requirements 
                  to streamline your project.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Service</h3>
                <p className="text-gray-600">
                  Dedicated project management with regular communication and updates 
                  throughout the build.
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
              Ready to Extend Your Home?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for your house extension project. Our expert team is ready 
              to help you create the perfect additional space for your home.
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

export default HouseExtensions;


