"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar() {
  const handleConnectWallet = () => {
    console.log("Connecting Wallet...");
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-transparent z-50">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-md"
          />
        </Link>
        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/gallery" className="hover:text-blue-400">
          Gallery
        </Link>
        <Link href="/stake" className="hover:text-blue-400">
          Stake
        </Link>
      </div>

      <div>
        <Button text="Connect Wallet" onClick={handleConnectWallet} />
      </div>
    </nav>
  );
}
