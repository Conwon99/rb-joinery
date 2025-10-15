import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, CheckCircle, Star, ArrowRight, Home, Ruler, Users, Award, TreePine, Sun } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const GardenRooms = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('garden_rooms_page', ['Garden Rooms Service']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('garden_rooms_page');
    window.location.href = "tel:+447927726622";
  };

  const handleEmailClick = () => {
    trackEmailClick('garden_rooms_page');
  };

  return (
    <>
      <Helmet>
        <title>Garden Rooms Ayrshire & Glasgow | Professional Garden Room Construction | RB Joinery</title>
        <meta name="description" content="Professional garden room construction in Ayrshire and Glasgow. Home offices, gyms, studios, and entertainment spaces. Free quotes available." />
        <meta name="keywords" content="garden rooms ayrshire, garden rooms glasgow, garden office, garden room construction, outdoor rooms, garden studio, garden gym" />
        <link rel="canonical" href="https://rbjoinery.com/garden-rooms" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Garden Rooms Ayrshire & Glasgow | Professional Garden Room Construction | RB Joinery" />
        <meta property="og:description" content="Professional garden room construction in Ayrshire and Glasgow. Home offices, gyms, studios, and entertainment spaces. Free quotes available." />
        <meta property="og:url" content="https://rbjoinery.com/garden-rooms" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Garden Rooms Ayrshire & Glasgow | Professional Garden Room Construction | RB Joinery" />
        <meta name="twitter:description" content="Professional garden room construction in Ayrshire and Glasgow. Home offices, gyms, studios, and entertainment spaces. Free quotes available." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RB Joinery - Garden Rooms",
            "description": "Professional garden room construction in Ayrshire and Glasgow including home offices, gyms, studios, and entertainment spaces.",
            "url": "https://rbjoinery.com/garden-rooms",
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
            "serviceType": ["Garden Rooms", "Garden Offices", "Garden Studios", "Garden Gyms", "Outdoor Rooms", "Garden Room Design", "Garden Room Construction"],
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
                  Garden Rooms
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Professional Garden Room Construction in Ayrshire & Glasgow
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Create the perfect outdoor living space with our bespoke garden rooms. 
                  Whether you need a home office, gym, studio, or entertainment space, 
                  we deliver quality construction that enhances your lifestyle.
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
                  src="/Services/garden-room-hero.webp" 
                  alt="Professional garden room construction"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Garden Room Types */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Garden Room Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We design and build garden rooms for a wide variety of purposes, 
                each tailored to your specific needs and preferences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Office</h3>
                <p className="text-gray-600 mb-4">
                  Create a dedicated workspace away from home distractions with proper 
                  insulation, heating, and electrical installations.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Insulated construction</li>
                  <li>• Electrical installations</li>
                  <li>• Heating and cooling</li>
                  <li>• High-speed internet ready</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Garden Studio</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for artists, musicians, or anyone needing a creative space 
                  with natural light and peaceful surroundings.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Large windows for natural light</li>
                  <li>• Soundproofing options</li>
                  <li>• Flexible interior design</li>
                  <li>• Creative workspace features</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Garden Gym</h3>
                <p className="text-gray-600 mb-4">
                  Build your own private fitness space with reinforced flooring, 
                  ventilation, and equipment mounting points.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Reinforced flooring</li>
                  <li>• Proper ventilation</li>
                  <li>• Equipment mounting points</li>
                  <li>• Mirror installations</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Entertainment Room</h3>
                <p className="text-gray-600 mb-4">
                  Create the ultimate entertainment space with built-in seating, 
                  sound systems, and bar areas.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Built-in seating</li>
                  <li>• Sound system installation</li>
                  <li>• Bar area construction</li>
                  <li>• Entertainment features</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Summer House</h3>
                <p className="text-gray-600 mb-4">
                  Traditional summer house for relaxation and enjoying your garden 
                  in comfort throughout the year.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Traditional design</li>
                  <li>• Year-round use</li>
                  <li>• Relaxation features</li>
                  <li>• Garden integration</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bespoke Design</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed garden rooms tailored to your specific requirements 
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

        {/* Features */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Garden Room Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our garden rooms are built with quality materials and modern features 
                to ensure comfort, durability, and energy efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Construction</h3>
                <p className="text-gray-600">
                  Built with high-quality timber frame construction and premium materials 
                  for lasting durability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Insulation & Heating</h3>
                <p className="text-gray-600">
                  Fully insulated with heating options to ensure year-round comfort 
                  in all weather conditions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ruler className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Electrical Installation</h3>
                <p className="text-gray-600">
                  Professional electrical installation with lighting, power sockets, 
                  and internet connectivity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning Permission</h3>
                <p className="text-gray-600">
                  We handle planning permission applications and ensure compliance 
                  with building regulations.
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
                Our Garden Room Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial design consultation to final completion, we guide you through 
                every step of your garden room project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Survey</h3>
                <p className="text-gray-600">
                  Assess your garden space, ground conditions, and access requirements 
                  for your garden room.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Planning</h3>
                <p className="text-gray-600">
                  Create detailed designs and handle planning permission applications 
                  if required.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Construction</h3>
                <p className="text-gray-600">
                  Professional construction with foundation work, frame erection, 
                  and finishing touches.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Completion</h3>
                <p className="text-gray-600">
                  Final installation of electrical work, heating, and handover with 
                  comprehensive warranty.
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
                Benefits of a Garden Room
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover why a garden room is an excellent investment for your home 
                and lifestyle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Space</h3>
                <p className="text-gray-600">
                  Create extra living or working space without the cost and disruption 
                  of a house extension.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Value</h3>
                <p className="text-gray-600">
                  Garden rooms typically add 5-15% to your property value, making 
                  them a sound investment.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">
                  Separate work and home life with a dedicated office space in 
                  your garden.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Setting</h3>
                <p className="text-gray-600">
                  Enjoy the benefits of working or relaxing in a natural garden 
                  environment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Use</h3>
                <p className="text-gray-600">
                  Versatile space that can adapt to changing needs - office today, 
                  gym tomorrow.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
                <p className="text-gray-600">
                  More affordable than house extensions with faster completion times 
                  and minimal disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Garden Room?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for your garden room project. Our expert team is ready 
              to help you create the perfect outdoor space.
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

export default GardenRooms;


