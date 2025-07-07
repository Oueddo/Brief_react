import React from "react";
import MainLayout from "./layouts/MainLayout.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";

const App = () => {
  return (
    <MainLayout>
      <div className="overflow-x-hidden">
        <Hero />
        <Features />
      </div>
    </MainLayout>
  );
};

export default App;
