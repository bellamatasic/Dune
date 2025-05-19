// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Title from "./sections/Title";
import Metrics from "./sections/Metrics";
import Services from "./sections/Services";

const App: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <Header />
      <Title/>
      <div className="h-32" /> {/* 128px of space */}
      <Metrics/>
      <Services/>
    </div>
  );
};

export default App;
