import { useState } from "react";
import EmojiPage from "./components/EmojiPage";
import emojis from "./components/EmojiData";

function App() {
 
  const [searchInput, setSearchInput] = useState("");

  ``
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://images.pexels.com/photos/6923745/pexels-photo-6923745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
     
      <div className="form mt-8">
        <input type="text" value={searchInput} onChange={handleSearchInputChange} className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search emoji by name" />
      </div>
      
     
      <div className="w-full max-w-screen-lg overflow-x-auto mt-8">
        <div className="flex flex-wrap justify-start">
          <EmojiPage emojis={emojis} searchInput={searchInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
