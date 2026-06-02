import { useState } from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
    const [username, setUsername] = useState("");

    const handleSubmit = () => {
        console.log("SEARCH RUNNING");
        if (!username.trim()) return;
        onSearch(username);
    };

    return (
        <div
            className="
      border
      border-lime-400
      rounded-2xl
      bg-[#09111f]
      p-5
      shadow-[0_0_60px_rgba(163,230,53,0.25)]
      flex
      gap-3
      "
        >
            <div className="flex items-center px-4 text-lime-400 font-bold">
                ~/users/
            </div>

            <input
                type="text"
                value={username}
                placeholder="torvalds"
                onChange={(e) => {
                    console.log("typing", e.target.value);
                    setUsername(e.target.value);
                }}
                onKeyDown={(e) => {
                    console.log("key:", e.key);

                    if (e.key === "Enter") {
                        console.log("ENTER PRESSED");
                        handleSubmit();
                    }
                }}
                className="
    flex-1
    bg-transparent
    outline-none
    text-white
    placeholder-gray-500
  "
            />

            <button
                onClick={() => {
                    console.log("BUTTON CLICKED");
                    handleSubmit();
                }}
                className="
    bg-lime-400
    text-black
    px-8
    py-3
    rounded-xl
    font-bold
  "
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;