import Carousel from "@/components/ui/Carausel";
import Image from "next/image";
const imageList = [
  { src: "/images/Prize/BytePets 12th.jpg", alt: "Image 1" },
  { src: "/images/Prize/Celothiraptop 5th.jpg", alt: "Image 2" },
  { src: "/images/Prize/Digitz 4th.jpg", alt: "Image 3" },
  { src: "/images/Prize/Drama Queens 2nd.jpg", alt: "Image 4" },
  { src: "/images/Prize/Elysian Horde 3rd.jpg", alt: "Image 5" },
  { src: "/images/Prize/Expedition 1st.jpg", alt: "Image 6" },
  { src: "/images/Prize/Pixel Plebs 8th.jpg", alt: "Image 7" },
  { src: "/images/Prize/RarityBotz 7th.jpg", alt: "Image 8" },
  { src: "/images/Prize/Rebbits 6th.jpg", alt: "Image 9" },
  { src: "/images/Prize/Stamp 11th.jpg", alt: "Image 10" },
  { src: "/images/Prize/Steamland 10th.jpg", alt: "Image 11" },
  { src: "/images/Prize/The Watchers 9th.jpg", alt: "Image 12" },
];

const AboutPage: React.FC = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#231F17] to-black text-white py-12 px-4 md:px-12 lg:px-24 flex flex-col justify-center items-center text-center">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
        <Image
          src="/icon/About 1.png"
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
          src="/icon/About 2.png"
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
      <div>
        <h1 className="  mb-2 mt-12  ">
          <span className=" block text-4xl md:text-5xl font-bold ">
            The Prize
          </span>
          <span className="block mb-4 mt-4 text-lg leading-relaxed ">
            Rewards for challange leaders, it cloud be you.
          </span>{" "}
        </h1>
      </div>
      <Carousel images={imageList} interval={5000} />
      <div>
        <h1 className="  mb-2 mt-5  ">
          <span className=" block text-4xl md:text-5xl font-bold ">
            Expedition
          </span>
          <span className="block mb-4 mt-4 text-lg leading-relaxed ">
            For 1st winners
          </span>{" "}
        </h1>
      </div>
    </section>
  );
};

export default AboutPage;
