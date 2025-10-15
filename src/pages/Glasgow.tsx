import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const Glasgow = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('glasgow_page', ['Glasgow Location']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('glasgow_page');
    window.location.href = "tel:+447403725998";
  };

  const handleEmailClick = () => {
    trackEmailClick('glasgow_page');
  };

  return (
    <>
      <Helmet>
        <title>Joinery Services Glasgow | House Extensions & Building Services | RB Joinery</title>
        <meta name="description" content="Professional joinery services in Glasgow. House extensions, loft conversions, garden rooms, kitchens, and home improvements across Glasgow." />
        <meta name="keywords" content="joinery Glasgow, house extensions Glasgow, loft conversions Glasgow, garden rooms Glasgow, kitchen installation Glasgow, home improvements Glasgow, building services Glasgow" />
        <link rel="canonical" href="https://rbjoinery.com/glasgow" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Joinery Services Glasgow | House Extensions & Building Services | RB Joinery" />
        <meta property="og:description" content="Professional joinery services in Glasgow. House extensions, loft conversions, garden rooms, kitchens, and home improvements across Glasgow." />
        <meta property="og:url" content="https://rbjoinery.com/glasgow" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Joinery Services Glasgow | House Extensions & Building Services | RB Joinery" />
        <meta name="twitter:description" content="Professional joinery services in Glasgow. House extensions, loft conversions, garden rooms, kitchens, and home improvements across Glasgow." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RB Joinery - Glasgow",
            "description": "Professional joinery and building services in Glasgow including house extensions, loft conversions, garden rooms, kitchens, and home improvements.",
            "url": "https://rbjoinery.com/glasgow",
            "telephone": "+447927726622",
            "email": "Ryan@rbjoinery.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Glasgow",
              "addressRegion": "Glasgow",
              "addressCountry": "Scotland"
            },
            "areaServed": {
              "@type": "City",
              "name": "Glasgow"
            },
            "serviceType": ["Joinery", "House Extensions", "Loft Conversions", "Garden Rooms", "Kitchens", "Home Improvements", "Building Services"],
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
                  Joinery Services Glasgow
              </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Professional Joinery & Building Services
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Serving Glasgow with comprehensive joinery, house extensions, and building services. 
                  From the city center to the suburbs, we bring professional expertise and quality 
                  craftsmanship to every project across Glasgow.
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
                  src="/Services/joinery-glasgow-hero.webp" 
                  alt="Professional joinery services in Glasgow"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Glasgow Areas Served */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Areas We Serve in Glasgow
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide joinery and building services across all areas of Glasgow, 
                from the city center to the surrounding suburbs and districts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">City Center</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Glasgow City Center</li>
                  <li>• Merchant City</li>
                  <li>• West End</li>
                  <li>• East End</li>
                </ul>
          </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">North Glasgow</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Maryhill</li>
                  <li>• Possilpark</li>
                  <li>• Springburn</li>
                  <li>• Ruchill</li>
                </ul>
            </div>
            
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">South Glasgow</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Govan</li>
                  <li>• Pollokshields</li>
                  <li>• Shawlands</li>
                  <li>• Newlands</li>
                </ul>
                    </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">East Glasgow</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Dennistoun</li>
                  <li>• Bridgeton</li>
                  <li>• Shettleston</li>
                  <li>• Tollcross</li>
                </ul>
                </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">West Glasgow</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Partick</li>
                  <li>• Whiteinch</li>
                  <li>• Scotstoun</li>
                  <li>• Yoker</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Outer Areas</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Bearsden</li>
                  <li>• Milngavie</li>
                  <li>• Bishopbriggs</li>
                  <li>• Kirkintilloch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Glasgow */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Services in Glasgow
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive joinery and building services tailored to Glasgow's 
                unique urban environment and architectural styles.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">House Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Professional house extension services including single and two-storey 
                  extensions with planning permission support.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Single storey extensions</li>
                  <li>• Two storey extensions</li>
                  <li>• Planning permission</li>
                  <li>• Design consultation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Loft Conversions</h3>
                <p className="text-gray-600 mb-4">
                  Transform your loft space into beautiful, functional rooms with 
                  professional conversion services.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Dormer conversions</li>
                  <li>• Velux conversions</li>
                  <li>• Planning permission</li>
                  <li>• Structural work</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Garden Rooms</h3>
                <p className="text-gray-600 mb-4">
                  Create the perfect outdoor living space with bespoke garden rooms 
                  for offices, studios, or entertainment.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Home offices</li>
                  <li>• Garden studios</li>
                  <li>• Garden gyms</li>
                  <li>• Entertainment spaces</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Installation</h3>
                <p className="text-gray-600 mb-4">
                  Professional kitchen design, supply, and installation services 
                  with expert craftsmanship and quality materials.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Kitchen design</li>
                  <li>• Supply & fitting</li>
                  <li>• Bespoke kitchens</li>
                  <li>• Renovation services</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional building and construction services including extensions, 
                  brickwork, and general building work.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Small extensions</li>
                  <li>• Brickwork services</li>
                  <li>• General building</li>
                  <li>• Renovation work</li>
                </ul>
                  </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  Emergency response services for storm damage, urgent repairs, 
                  and immediate assistance needs.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Storm damage repair</li>
                  <li>• Emergency fencing</li>
                  <li>• Urgent maintenance</li>
                  <li>• 24/7 response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Glasgow */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose RB Joinery in Glasgow?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Local expertise, professional service, and commitment to quality make us 
                the preferred choice for landscaping and building services in Glasgow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Knowledge</h3>
                <p className="text-gray-600">
                  Deep understanding of Glasgow's urban environment, soil conditions, 
                  and local building regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Service</h3>
                <p className="text-gray-600">
                  Professional service with attention to detail and commitment to 
                  exceeding customer expectations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Team</h3>
                <p className="text-gray-600">
                  Experienced, skilled professionals who deliver projects on time 
                  and within budget.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Quotes</h3>
                <p className="text-gray-600">
                  No-obligation quotes for all services with transparent pricing 
                  and detailed project specifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Glasgow Property?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for professional landscaping and building services in Glasgow. 
              Our expert team is ready to enhance your property with quality workmanship.
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
                  href="tel:+447403725998" 
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
                  href="mailto:ryan@rbjoinery.com" 
                  onClick={handleEmailClick}
                  className="text-green-600 hover:text-green-700"
                >
                  ryan@rbjoinery.com
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

export default Glasgow;