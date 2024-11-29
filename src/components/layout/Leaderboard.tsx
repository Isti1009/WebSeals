import Image from "next/image";
import React from "react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "Stars123...1234", points: "376.333 $SEALS", staked: 300 },
    { rank: 2, name: "Stars123...1234", points: "176.333 $SEALS", staked: 400 },
    { rank: 3, name: "Stars123...1234", points: "96.333 $SEALS", staked: 90 },
    { rank: 4, name: "Stars123...1234", points: "88.333 $SEALS", staked: 122 },
  ];

  const rankEmojis = ["🥇", "🥈", "🥉"];

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-400">
        Leaderboard
      </h1>
      <p className="text-gray-400 text-center mb-8 max-w-lg">
        Stake your Seals, climb the leaderboard, and showcase your quirky Seal
        collection!
      </p>
      <div className="w-full max-w-3xl space-y-6">
        {leaderboardData.map((data, index) => (
          <div
            key={data.rank}
            className="flex bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
          >
            {/* Rank Section */}
            <div className="flex items-center justify-center w-24 bg-gradient-to-br from-[#18181B] to-[#a9b1c0] text-white">
              <div className="flex items-center justify-center w-14 h-14 bg-black bg-opacity-20 rounded-full text-3xl">
                {rankEmojis[index] || data.rank}
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
                    {data.name}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold  text-gray-400">
                  {data.points}
                </p>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-xl font-bold  text-gray-400">
                  {data.staked} NFT Staked
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 text-xl font-semibold  text-gray-400 hover:text-white">
        Load More ...
      </button>
    </div>
  );
};

export default Leaderboard;
