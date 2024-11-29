"use client";

import Image from "next/image";
import React from "react";

const StakePage: React.FC = () => {
  return (
    <section className="h-screen bg-cover bg-center bg-gray-100">
      <div className="flex flex-col items-center justify-center h-full p-6">
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
    </section>
  );
};

export default StakePage;
