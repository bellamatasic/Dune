// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Title from "./sections/Title";
import Metrics from "./sections/Metrics";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Media from "./sections/Media";
import Testimonial from "./sections/Testimonial";

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
    </div>
  );
};

export default App;
