import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreas from "@/components/ServiceAreas";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1); // Remove the # symbol
        const element = document.getElementById(elementId);
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollDepthTracker />
      <Navigation />
      <Hero />
      <TrustBar />
      <AboutUs />
      <ServicesGrid />
      <Gallery />
      <ServiceAreas />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
