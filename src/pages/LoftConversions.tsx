import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, CheckCircle, Star, ArrowRight, Home, Ruler, Users, Award, Bed, Bath } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const LoftConversions = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('loft_conversions_page', ['Loft Conversions Service']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('loft_conversions_page');
    window.location.href = "tel:+447927726622";
  };

  const handleEmailClick = () => {
    trackEmailClick('loft_conversions_page');
  };

  return (
    <>
      <Helmet>
        <title>Loft Conversions Ayrshire & Glasgow | Professional Loft Conversion Services | RB Joinery</title>
        <meta name="description" content="Professional loft conversion services in Ayrshire and Glasgow. Transform your loft into bedrooms, bathrooms, or home offices. Free quotes available." />
        <meta name="keywords" content="loft conversions ayrshire, loft conversions glasgow, loft conversion contractors, loft conversion design, dormer loft conversion, velux loft conversion, loft conversion planning permission" />
        <link rel="canonical" href="https://rbjoinery.com/loft-conversions" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Loft Conversions Ayrshire & Glasgow | Professional Loft Conversion Services | RB Joinery" />
        <meta property="og:description" content="Professional loft conversion services in Ayrshire and Glasgow. Transform your loft into bedrooms, bathrooms, or home offices. Free quotes available." />
        <meta property="og:url" content="https://rbjoinery.com/loft-conversions" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Loft Conversions Ayrshire & Glasgow | Professional Loft Conversion Services | RB Joinery" />
        <meta name="twitter:description" content="Professional loft conversion services in Ayrshire and Glasgow. Transform your loft into bedrooms, bathrooms, or home offices. Free quotes available." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RB Joinery - Loft Conversions",
            "description": "Professional loft conversion services in Ayrshire and Glasgow including dormer conversions, velux conversions, and bespoke loft designs.",
            "url": "https://rbjoinery.com/loft-conversions",
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
            "serviceType": ["Loft Conversions", "Dormer Conversions", "Velux Conversions", "Loft Design", "Loft Planning", "Loft Construction"],
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
                  Loft Conversions
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Professional Loft Conversion Services in Ayrshire & Glasgow
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Transform your unused loft space into beautiful, functional rooms. Our expert 
                  team delivers high-quality loft conversions that add significant value and 
                  living space to your home.
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
                  src="/Services/loft-conversion-hero.webp" 
                  alt="Professional loft conversion services"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Types */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Types of Loft Conversions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various loft conversion options to suit different properties, 
                budgets, and requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Velux Loft Conversion</h3>
                <p className="text-gray-600 mb-4">
                  The most cost-effective option using roof windows to bring natural light 
                  into your new loft space.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Roof windows installation</li>
                  <li>• Minimal structural changes</li>
                  <li>• Cost-effective solution</li>
                  <li>• Quick completion time</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Ruler className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dormer Loft Conversion</h3>
                <p className="text-gray-600 mb-4">
                  Extend your roof vertically to create additional headroom and floor space 
                  in your loft conversion.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Increased headroom</li>
                  <li>• Additional floor space</li>
                  <li>• Standard windows</li>
                  <li>• Versatile room options</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hip-to-Gable Conversion</h3>
                <p className="text-gray-600 mb-4">
                  Ideal for end-of-terrace and detached properties, extending the hip roof 
                  to create more space.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Maximum space creation</li>
                  <li>• Full-height rooms</li>
                  <li>• Multiple room options</li>
                  <li>• Enhanced property value</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mansard Loft Conversion</h3>
                <p className="text-gray-600 mb-4">
                  The most extensive conversion type, creating the maximum amount of usable 
                  space in your loft.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Maximum usable space</li>
                  <li>• Full-height rooms</li>
                  <li>• Multiple bedrooms</li>
                  <li>• En-suite bathrooms</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Bed className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">L-Shaped Loft Conversion</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for properties with rear extensions, creating an L-shaped loft 
                  space for multiple rooms.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Multiple room layout</li>
                  <li>• Flexible design</li>
                  <li>• Master suite potential</li>
                  <li>• Unique architectural features</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bespoke Loft Conversion</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed loft conversions tailored to your specific requirements 
                  and architectural preferences.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Custom design solutions</li>
                  <li>• Unique features</li>
                  <li>• Personal consultation</li>
                  <li>• 3D visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Room Options */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Popular Loft Conversion Uses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the endless possibilities for your new loft space with our 
                versatile conversion options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bed className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Master Bedroom</h3>
                <p className="text-gray-600">
                  Create a luxurious master suite with en-suite bathroom and walk-in wardrobe.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bath className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">En-Suite Bathroom</h3>
                <p className="text-gray-600">
                  Add a modern bathroom with contemporary fixtures and fittings.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Office</h3>
                <p className="text-gray-600">
                  Dedicated workspace with built-in storage and professional lighting.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Guest Suite</h3>
                <p className="text-gray-600">
                  Self-contained guest accommodation with bedroom and bathroom facilities.
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
                Our Loft Conversion Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial feasibility assessment to final completion, we guide you through 
                every step of your loft conversion journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Feasibility Survey</h3>
                <p className="text-gray-600">
                  Assess your loft's potential, structural requirements, and planning 
                  considerations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Planning</h3>
                <p className="text-gray-600">
                  Create detailed architectural drawings and handle planning permission 
                  applications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Construction</h3>
                <p className="text-gray-600">
                  Professional construction with structural work, insulation, and 
                  finishing touches.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Completion</h3>
                <p className="text-gray-600">
                  Final inspection, snagging, and handover with comprehensive warranty 
                  and aftercare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of a Loft Conversion
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover why a loft conversion is one of the best investments you can 
                make for your home.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Increased Property Value</h3>
                <p className="text-gray-600">
                  Loft conversions typically add 15-20% to your property value, making 
                  them an excellent investment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Living Space</h3>
                <p className="text-gray-600">
                  Create extra bedrooms, bathrooms, or living areas without extending 
                  your property's footprint.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective Solution</h3>
                <p className="text-gray-600">
                  More affordable than moving house or building extensions, with faster 
                  completion times.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Minimal Disruption</h3>
                <p className="text-gray-600">
                  Less disruptive than other home improvement projects, allowing you 
                  to continue living normally.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Versatile Space</h3>
                <p className="text-gray-600">
                  Adaptable space that can evolve with your family's changing needs 
                  over time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Energy Efficiency</h3>
                <p className="text-gray-600">
                  Modern insulation and energy-efficient features reduce heating costs 
                  and environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Convert Your Loft?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for your loft conversion project. Our expert team is ready 
              to help you maximize your home's potential.
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

export default LoftConversions;


