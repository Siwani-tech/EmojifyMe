import React from "react";

export default function EmojiPage({ emojis, searchInput }) {
  // Filter emojis based on search input
  const filteredEmojis = emojis.filter(emoji =>
    emoji.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      {/* Emoji display */}
      {filteredEmojis.length > 0 ? (
        filteredEmojis.map((emoj) => (
          <div key={emoj.id} className="w-1/5 p-2">
            <div className="bg-white bg-opacity-50 p-2 rounded-lg mb-4">
              <div className="relative z-10">
                <h1 className="text-4xl">{emoj.emoji}</h1>
                <p className="text-sm">{emoj.name}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center font-bold text-xl w-full ">
          Not found
        </div>
      )}
      
    </>
  );
}
