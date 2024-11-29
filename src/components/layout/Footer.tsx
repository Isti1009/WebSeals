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
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold mb-2">Leaderboard</h1>
      <span className="text-gray-400 text-center">
        Stake your Seals, rise to the top, and show off your
      </span>
      <span className="text-gray-400 text-center mb-6">
        collection of these carefree, quirky Seals.
      </span>
      <div className="w-full max-w-3xl space-y-4">
        {leaderboardData.map((data, index) => (
          <div
            key={data.rank}
            className="flex bg-gray-900 rounded-lg overflow-hidden shadow-md"
          >
            {/* Rank Section */}
            <div className="flex items-center justify-center w-20 bg-gray-800">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full text-2xl">
                {rankEmojis[index] || data.rank}
              </div>
            </div>

            {/* User Info Section */}
            <div className="flex-grow flex items-center justify-between p-4">
              {/* Avatar and Name */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-bold">{data.name}</p>
                </div>
              </div>

              {/* Points and NFT Staked */}
              <div className="flex flex-col items-end space-y-1">
                <p className="text-lg font-semibold">{data.points}</p>
                <p className="text-sm text-gray-400">
                  {data.staked} NFT Staked
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm text-gray-400 hover:text-white">
        Load More ...
      </button>
    </div>
  );
};

export default Leaderboard;
