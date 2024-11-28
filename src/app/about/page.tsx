import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-bl from-black via-[#231F17] to-black text-white py-12 px-4 md:px-12 lg:px-24 flex flex-col justify-center items-center text-center">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
        <Image
          src="/images/seals.png"
          alt="Seals NFT Challenge"
          width={150}
          height={150}
          className="object-contain"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block mb-2">Ok, Let&apos;s start</span>
          <span className="block">from here.</span>
        </h1>
        <Image
          src="/images/seals.png"
          alt="Seals NFT Challenge"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <p className="mb-8 text-lg leading-relaxed">
        We invite you to participate in the Seals NFT Challenge. Seals are
        divided into three tiers: <strong>Gold</strong>, <strong>Silver</strong>
        , and <strong>Bronze</strong>. You can mint them on{" "}
        <strong>December 4, 2024, at 7 PM UTC</strong> only on Stargaze. After
        obtaining your Seals NFT, you can stake them here.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        For your information, each tier will earn different points:
      </h2>

      <ul className="list-disc pl-8 mb-8 space-y-2 text-xl font-bold">
        <li>Gold earns 10 $SEALS per day</li>
        <li>Silver earns 8 $SEALS per day</li>
        <li>Bronze earns 5 $SEALS per day</li>
      </ul>

      <p className="mb-4 text-lg leading-relaxed">
        The challenge will run for one month. We have a leaderboard system that
        you can monitor yourself, so everything is accessible transparently.
        Join the fun with us and win one of the top collections on Stargaze!
      </p>

      <p className="text-lg">
        Snapshot will be taken on <strong>December 4th at 1 PM UTC</strong>.
      </p>
    </div>
  );
};

export default AboutPage;
