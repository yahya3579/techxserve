import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BrandStorySection from "./components/BrandStorySection";
import ServicesSection from "./components/ServicesSection";
import StandardsSection from "./components/StandardsSection";
import ClientsSection from "./components/ClientsSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import AboutUsPage from "./components/AboutUsPage";
import MediaPage from "./components/MediaPage";
import ServicesPage from "./components/ServicesPage";
import ProductsPage from "./components/ProductsPage";
import BlogPage from "./components/BlogPage";
import CareersPage from "./components/CareersPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  // Force refresh - updated components with navbar fixes, hero improvements, and services animations

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutUsPage />;
      case "services":
        return <ServicesPage />;
      case "products":
        return <ProductsPage />;
      case "blog":
        return <BlogPage />;
      case "careers":
        return <CareersPage />;
      case "contact":
        return <ContactPage />;
      case "media":
        return <MediaPage setCurrentPage={setCurrentPage} />;
      case "home":
      default:
        return (
          <main>
            <HeroSection />
            <BrandStorySection />
            <ServicesSection />
            <StandardsSection />
            <ClientsSection />
            <FinalCTASection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {currentPage !== "media" && <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {renderPage()}
      {currentPage !== "media" && <Footer />}
    </div>
  );
}