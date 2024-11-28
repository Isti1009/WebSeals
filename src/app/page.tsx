// src/app/home/page.tsx
import React from "react";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};

export default HomePage;
