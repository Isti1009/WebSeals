// src/components/Navbar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "10px", display: "flex", margin: "20px" }}>
      <Image src="/images/logo.png" alt="Logo" width={50} height={50} />

      <ul style={{ display: "flex", listStyle: "none", margin: "10px" }}>
        <li style={{ margin: "0 10px" }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a href="/gallery">Gallery</a>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a href="/stake">Stake</a>
        </li>
      </ul>

      <button
        style={{
          marginLeft: "auto",
          background: "#4c3228",
          borderRadius: "15px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
