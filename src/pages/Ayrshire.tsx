import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const Ayrshire = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('ayrshire_page', []);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('ayrshire_page');
    window.location.href = "tel:+447403725998";
  };

  const handleEmailClick = () => {
    trackEmailClick('ayrshire_page');
  };

  const ayrshireTowns = [
    'Ayr', 'Kilmarnock', 'Irvine', 'Troon', 'Prestwick', 'Ardrossan', 
    'Saltcoats', 'Largs', 'Girvan', 'Cumnock', 'Maybole', 'Stewarton',
    'Dalry', 'Beith', 'Kilwinning', 'Stevenston', 'West Kilbride'
  ];

  return (
    <>
      <Helmet>
        <title>Joinery Ayrshire | Building Services Ayr, Kilmarnock, Irvine | RB Joinery</title>
        <meta name="description" content="Expert landscaping services across Ayrshire including Ayr, Kilmarnock, Irvine, Troon, and Prestwick. Garden maintenance, patios, and building services." />
        <meta name="keywords" content="landscaping Ayrshire, garden services Ayrshire, landscaping Ayr, landscaping Kilmarnock, landscaping Irvine, landscaping Troon, landscaping Prestwick, garden maintenance Ayrshire, patio installation Ayrshire, fencing Ayrshire" />
        <link rel="canonical" href="https://dirtworkslandscaping.co.uk/ayrshire" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Joinery Ayrshire | Building Services Ayr, Kilmarnock, Irvine | RB Joinery" />
        <meta property="og:description" content="Expert landscaping services across Ayrshire including Ayr, Kilmarnock, Irvine, Troon, and Prestwick. Garden maintenance, patios, and building services." />
        <meta property="og:url" content="https://dirtworkslandscaping.co.uk/ayrshire" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Joinery Ayrshire | Building Services Ayr, Kilmarnock, Irvine | RB Joinery" />
        <meta name="twitter:description" content="Expert landscaping services across Ayrshire including Ayr, Kilmarnock, Irvine, Troon, and Prestwick. Garden maintenance, patios, and building services." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RB Joinery - Ayrshire Services",
            "description": "Professional landscaping and building services across Ayrshire including Ayr, Kilmarnock, Irvine, Troon, and Prestwick.",
            "url": "https://dirtworkslandscaping.co.uk/ayrshire",
            "telephone": "+447403725998",
            "email": "dirtworkslandscaping@outlook.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ayr",
              "addressRegion": "Ayrshire",
              "addressCountry": "Scotland"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Ayr",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Ayrshire"
                }
              },
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
                "name": "Irvine",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Ayrshire"
                }
              },
              {
                "@type": "City",
                "name": "Troon",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Ayrshire"
                }
              },
              {
                "@type": "City",
                "name": "Prestwick",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Ayrshire"
                }
              }
            ],
            "serviceType": [
              "Landscaping Services",
              "Garden Maintenance",
              "Patio Installation",
              "Fencing Services",
              "Decking Installation",
              "Pressure Washing",
              "Building Services"
            ]
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
                  Landscaping Services in Ayrshire
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Professional landscaping and building services across Ayrshire. From Ayr to Kilmarnock, 
                  Irvine to Troon, we bring expert garden maintenance, patio installation, fencing, and 
                  building services to your doorstep.
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
                    Call 07403 725998
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/Services/dirt Landscaping Hero Background.webp" 
                  alt="Professional landscaping services in Ayrshire"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Ayrshire Overview */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Serving All of Ayrshire
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ayrshire's diverse landscape, from the coastal towns of Ayr and Troon to the inland 
                  communities of Kilmarnock and Irvine, presents unique challenges and opportunities 
                  for landscaping and garden maintenance.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team understands the local climate, soil conditions, and architectural styles 
                  that make Ayrshire special. We work with the natural environment to create beautiful, 
                  sustainable outdoor spaces that thrive in Scotland's weather.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Local Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Climate Knowledge</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Soil Understanding</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Architectural Awareness</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ayrshire Climate & Conditions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Coastal Areas (Ayr, Troon, Prestwick)</h4>
                    <p className="text-gray-600 text-sm">
                      Salt-tolerant plants, wind-resistant landscaping, and materials that withstand 
                      coastal weather conditions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Inland Areas (Kilmarnock, Irvine)</h4>
                    <p className="text-gray-600 text-sm">
                      Clay soil management, drainage solutions, and plants suited to inland 
                      Scottish climate conditions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Hills & Valleys (Cumnock, Maybole)</h4>
                    <p className="text-gray-600 text-sm">
                      Sloping garden solutions, erosion control, and landscaping that works 
                      with natural terrain features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ayrshire Towns & Cities We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide professional landscaping and building services across all major 
                towns and cities in Ayrshire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ayrshireTowns.map((town) => (
                <div key={town} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{town}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Full landscaping and building services available in {town} and surrounding areas.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services in Ayrshire */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Services in Ayrshire
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive landscaping and building services tailored to Ayrshire's 
                unique environment and your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Garden Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Regular garden maintenance including lawn care, hedge trimming, and seasonal 
                  planting across Ayrshire.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Lawn care and maintenance</li>
                  <li>• Hedge trimming and shaping</li>
                  <li>• Seasonal planting</li>
                  <li>• Garden tidying and cleanup</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Landscaping & Groundworks</h3>
                <p className="text-gray-600 mb-4">
                  Complete site preparation and outdoor landscaping solutions for Ayrshire properties.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Site preparation and clearance</li>
                  <li>• Drainage systems</li>
                  <li>• Foundations and excavation</li>
                  <li>• Garden design and planning</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Patios, Fencing & Decking</h3>
                <p className="text-gray-600 mb-4">
                  Quality hardscaping installations built to withstand Ayrshire's weather conditions.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Patio installation and repair</li>
                  <li>• Fencing installation and maintenance</li>
                  <li>• Decking construction</li>
                  <li>• Hardscaping solutions</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pressure Washing</h3>
                <p className="text-gray-600 mb-4">
                  Professional pressure washing to restore and maintain outdoor surfaces in Ayrshire.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Driveway cleaning</li>
                  <li>• Patio restoration</li>
                  <li>• Path and wall cleaning</li>
                  <li>• Stain removal</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Services</h3>
                <p className="text-gray-600 mb-4">
                  General building, repairs, and small extensions for Ayrshire homes and businesses.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Brickwork and repairs</li>
                  <li>• Small extensions</li>
                  <li>• General building work</li>
                  <li>• Property maintenance</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  Urgent repairs and storm damage restoration across Ayrshire when you need us most.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Storm damage repair</li>
                  <li>• Emergency garden clearance</li>
                  <li>• Urgent fence repairs</li>
                  <li>• 24/7 emergency response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Knowledge */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Ayrshire Knowledge
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our deep understanding of Ayrshire's unique characteristics helps us deliver 
                landscaping solutions that work perfectly in your local environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Soil Conditions</h3>
                <p className="text-gray-600">
                  Understanding of Ayrshire's clay soils, coastal conditions, and drainage requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Plant Selection</h3>
                <p className="text-gray-600">
                  Knowledge of plants that thrive in Ayrshire's climate and soil conditions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Patterns</h3>
                <p className="text-gray-600">
                  Experience with Ayrshire's weather patterns and seasonal maintenance requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Access</h3>
                <p className="text-gray-600">
                  Familiarity with Ayrshire's roads, access routes, and local planning requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Ayrshire Garden?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for professional landscaping services in Ayrshire. 
              Our local experts are ready to help you create the perfect outdoor space.
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
                Call 07403 725998
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
                  href="tel:+447403725998" 
                  onClick={handleCallClick}
                  className="text-green-600 hover:text-green-700"
                >
                  07403 725998
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                  href="mailto:dirtworkslandscaping@outlook.com" 
                  onClick={handleEmailClick}
                  className="text-green-600 hover:text-green-700"
                >
                  dirtworkslandscaping@outlook.com
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

export default Ayrshire;
