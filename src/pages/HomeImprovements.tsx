import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, CheckCircle, Star, ArrowRight, Home, Ruler, Users, Award, Hammer, Paintbrush } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const HomeImprovements = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('home_improvements_page', ['Home Improvements Service']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('home_improvements_page');
    window.location.href = "tel:+447927726622";
  };

  const handleEmailClick = () => {
    trackEmailClick('home_improvements_page');
  };

  return (
    <>
      <Helmet>
        <title>Home Improvements Ayrshire & Glasgow | Professional Renovation Services | RB Joinery</title>
        <meta name="description" content="Professional home improvement services in Ayrshire and Glasgow. Renovations, repairs, and upgrades to enhance your property. Free quotes available." />
        <meta name="keywords" content="home improvements ayrshire, home improvements glasgow, home renovation, property renovation, house repairs, home upgrades, renovation contractors" />
        <link rel="canonical" href="https://rbjoinery.com/home-improvements" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Home Improvements Ayrshire & Glasgow | Professional Renovation Services | RB Joinery" />
        <meta property="og:description" content="Professional home improvement services in Ayrshire and Glasgow. Renovations, repairs, and upgrades to enhance your property. Free quotes available." />
        <meta property="og:url" content="https://rbjoinery.com/home-improvements" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Home Improvements Ayrshire & Glasgow | Professional Renovation Services | RB Joinery" />
        <meta name="twitter:description" content="Professional home improvement services in Ayrshire and Glasgow. Renovations, repairs, and upgrades to enhance your property. Free quotes available." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RB Joinery - Home Improvements",
            "description": "Professional home improvement services in Ayrshire and Glasgow including renovations, repairs, and upgrades to enhance your property.",
            "url": "https://rbjoinery.com/home-improvements",
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
            "serviceType": ["Home Improvements", "Home Renovation", "Property Renovation", "House Repairs", "Home Upgrades", "Renovation Services"],
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
                  Home Improvements
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Professional Renovation Services in Ayrshire & Glasgow
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Transform your property with our comprehensive home improvement services. 
                  From complete renovations to specific upgrades, we deliver quality 
                  craftsmanship that enhances your home's value and comfort.
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
                  src="/Services/home-improvements-hero.webp" 
                  alt="Professional home improvement services"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Home Improvement Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of home improvement services to enhance 
                your property's functionality, appearance, and value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Renovations</h3>
                <p className="text-gray-600 mb-4">
                  Full property renovations including structural work, plumbing, 
                  electrical, and finishing touches.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Structural modifications</li>
                  <li>• Plumbing and electrical</li>
                  <li>• Flooring and decorating</li>
                  <li>• Complete transformation</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Structural Work</h3>
                <p className="text-gray-600 mb-4">
                  Structural improvements including wall removal, beam installation, 
                  and foundation work.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Wall removal and support</li>
                  <li>• Beam installation</li>
                  <li>• Foundation repairs</li>
                  <li>• Structural surveys</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Paintbrush className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interior Upgrades</h3>
                <p className="text-gray-600 mb-4">
                  Interior improvements including flooring, painting, tiling, and 
                  decorative finishes.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Flooring installation</li>
                  <li>• Painting and decorating</li>
                  <li>• Tiling and wall finishes</li>
                  <li>• Interior design</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Ruler className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bathroom Renovations</h3>
                <p className="text-gray-600 mb-4">
                  Complete bathroom renovations including design, installation, 
                  and finishing touches.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Bathroom design</li>
                  <li>• Plumbing installation</li>
                  <li>• Tiling and fixtures</li>
                  <li>• Electrical work</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Ongoing property maintenance services to keep your home in 
                  excellent condition.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Regular maintenance</li>
                  <li>• Repair services</li>
                  <li>• Preventative care</li>
                  <li>• Emergency repairs</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bespoke Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Custom home improvement solutions tailored to your specific 
                  requirements and preferences.
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

        {/* Popular Projects */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Popular Home Improvement Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the most popular home improvement projects we undertake 
                to enhance your property.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Open Plan Living</h3>
                <p className="text-gray-600">
                  Create modern open-plan living spaces by removing walls and 
                  reconfiguring layouts.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Basement Conversions</h3>
                <p className="text-gray-600">
                  Transform unused basement space into functional living areas 
                  and storage solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Paintbrush className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Period Property Restoration</h3>
                <p className="text-gray-600">
                  Restore period properties while maintaining their character 
                  and historical features.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ruler className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility Improvements</h3>
                <p className="text-gray-600">
                  Make your home more accessible with ramps, lifts, and 
                  bathroom modifications.
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
                Our Home Improvement Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final completion, we guide you through 
                every step of your home improvement journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive assessment of your property and discussion of 
                  your improvement goals and budget.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning</h3>
                <p className="text-gray-600">
                  Detailed planning including design, materials selection, and 
                  project timeline development.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Construction</h3>
                <p className="text-gray-600">
                  Professional construction with regular updates and minimal 
                  disruption to your daily life.
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
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose RB Joinery for Your Home Improvements?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With extensive experience in home improvements across Ayrshire and Glasgow, 
                we deliver exceptional results that enhance your property.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Craftsmanship</h3>
                <p className="text-gray-600">
                  Skilled tradespeople with extensive experience in all aspects of 
                  home improvement and renovation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Service</h3>
                <p className="text-gray-600">
                  Complete service from initial consultation through to final 
                  completion and aftercare.
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
                  throughout the project.
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
              Ready to Improve Your Home?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for your home improvement project. Our expert team is ready 
              to help you transform your property.
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

export default HomeImprovements;


