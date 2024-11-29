"use client";

import Leaderboard from "@/components/layout/Leaderboard";
import Image from "next/image";
import React from "react";

const StakePage: React.FC = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#231F17] to-black text-white py-12 px-4 md:px-12 lg:px-24 flex flex-col justify-center items-center text-center">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
      <Image
          src="/images/seals.png"
          alt="Seals NFT Challenge"
          width={150}
          height={150}
          className="object-contain"
        />
      <div className="flex flex-col  justify-between  items-center mb-4 ">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block mb-2">Stake, Win and Chill</span>
          <span className="block">Like Seals</span>
        </h1>
        <span className="block mt-4 text-lg leading-relaxed ">
            Discover the ultimate NFT Staking challange competate
          </span>
          <span className="">
          to see who holds the most stacked NFTs and win prizes. </span>
      </div>
      <Image
          src="/images/seals.png"
          alt="Seals NFT Challenge"
          width={150}
          height={150}
          className="object-contain"
        /></div>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Main Container */}
        <div className="flex flex-col w-full max-w-4xl bg-[#18181B] text-white shadow-lg rounded-3xl p-8 space-y-6">
          {/* Top Section */}
          <div className="flex  items-center space-x-6">
            {/* Image Section */}
            <div className="flex-shrink-0 w-48 h-48 bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/seals.png"
                alt="Seals Avatar"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center ">
              {/* Content Section */}
              <div className="flex flex-grow  space-x-6">
                {/* Description */}
                <div className="flex flex-col  flex-grow  text-white shadow-md rounded-lg p-6">
                  <h2 className="text-xl font-semibold">Seals</h2>
                  <span className="text-sm ">
                    Stake your Seals, rise to the top, and showcase
                  </span>
                  <span className="text-sm mt-4">
                    your collection of these carefree, quirky Seals.
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-4">
                  <button className="flex items-center   font-semibold py-2 px-4 rounded-lg transition duration-200">
                    Trade Collection
                    <div className="ml-3 w-8 h-8  rounded-full overflow-hidden">
                      <Image
                        src="/images/seals.png"
                        alt="Trade Icon"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </button>
                  <button className="flex items-center font-semibold py-2 px-4 rounded-lg transition duration-200">
                    Unstake
                    <div className="ml-3 w-8 h-8  rounded-full overflow-hidden">
                      <Image
                        src="/images/seals.png"
                        alt="Unstake Icon"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="w-[600px] h-[50px] bg-green-600 hover:bg-green-700 text-white font-bold  rounded-lg transition duration-200">
                  Stake Now
                </button>
              </div>
            </div>
          </div>

          {/* Stake Now Button - Centered horizontally but positioned under */}
        </div>
      </div>
      <div className="w-full max-w-3xl space-y-6 mt-6">
        
          <div
            className="flex bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
          >
            {/* Rank Section */}
            <div className="flex items-center justify-center w-24 bg-gradient-to-br from-[#18181B] to-[#a9b1c0] text-white">
              <div className="flex items-center justify-center w-14 h-14 bg-black bg-opacity-20 rounded-full text-3xl">
                1
              </div>
            </div>

            {/* User Info Section */}
            <div className="flex-grow flex items-center justify-between p-4">
              {/* Avatar and Name */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/seals.png"
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl font-bold  text-gray-400">
                    stars...123
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold  text-gray-400">
                  1234.23 $SEALS
                </p>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-xl font-bold  text-gray-400">
                  10 NFT Staked
                </p>
              </div>
            </div>
          </div>
        
      </div>

      <Leaderboard/>
    </section>
  );
};

export default StakePage;
