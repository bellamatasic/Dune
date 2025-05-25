// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Title from "./pages/Title";
import Metrics from "./pages/Metrics";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Media from "./pages/Media";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <Header />
      <Title/>
      <div className="h-32" /> {/* 128px of space */}
      <Metrics/>
      <div className="h-32" /> {/* 128px of space */}
      <Services/>
      <div className="h-32" /> {/* 128px of space */}
      <Portfolio/>
      <div className="h-32" /> {/* 128px of space */}
      <Media/>
      <div className="h-32" /> {/* 128px of space */}
      <Testimonial/>
      <div className="h-32" /> {/* 128px of space */}
      <Contact/>
    </div>
  );
};

export default App;
