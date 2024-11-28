// src/app/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';  // Memanggil komponen Navbar
// import Footer from '../components/Footer';  // Memanggil komponen Footer

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to Intan Snack & Catering</h1>
        <p>Your perfect catering partner for every occasion</p>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
