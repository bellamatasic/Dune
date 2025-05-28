// src/App.tsx
import React, { useState } from "react";
import ResponsiveWrapper from "./components/ResponsiveWrapper";
import TitleSection from "./pages/Title";
import TitleMobile from "./pages/mobile/TitleMobile";
import Services from "./pages/Services";
import ServicesMobile from "./pages/mobile/ServicesMobile";
import PortfolioSection from "./pages/Portfolio";
import PortfolioMobile from "./pages/mobile/PortfolioMobile";
import MetricsSection from "./pages/Metrics";
import MetricsMobile from "./pages/mobile/MetricsMobile";
import Testimonial from "./pages/Testimonial";
import TestimonialMobile from "./pages/mobile/TestimonialMobile";
import Contact from "./pages/Contact";
import ContactMobile from "./pages/mobile/ContactMobile";
import Media from "./pages/Media";
import MediaMobile from "./pages/mobile/MediaMobile";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {isMobile ? (
        <>
          <MobileNav onMenuClick={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
      ) : (
        <Header />
      )}
      <ResponsiveWrapper
        mobileComponent={TitleMobile}
        desktopComponent={TitleSection}
      />
      <ResponsiveWrapper
        mobileComponent={MetricsMobile}
        desktopComponent={MetricsSection}
      />
      <ResponsiveWrapper
        mobileComponent={ServicesMobile}
        desktopComponent={Services}
      />
      <ResponsiveWrapper
        mobileComponent={PortfolioMobile}
        desktopComponent={PortfolioSection}
      />
      <ResponsiveWrapper
        mobileComponent={MediaMobile}
        desktopComponent={Media}
      />
      <ResponsiveWrapper
        mobileComponent={TestimonialMobile}
        desktopComponent={Testimonial}
      />
      <ResponsiveWrapper
        mobileComponent={ContactMobile}
        desktopComponent={Contact}
      />
    </div>
  );
}

export default App;
