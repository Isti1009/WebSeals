// src/app/home/page.tsx
import React from "react";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

const HomePage: React.FC = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
};

export default HomePage;
