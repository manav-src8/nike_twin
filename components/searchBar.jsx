"use client";
import { Search } from "lucide-react";

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault;
  };
  return (
    <div className=" h-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-[1.5px] h-full rounded-full px-2 border-transparent bg-slate-500"
      >
        <button>
          <Search />
        </button>
        <input
          type="text"
          placeholder="Search"
          // value={"query"}
          // onChange={""}
          className="outline-none text-[16px] w-40 h-full bg-transparent  "
        />
      </form>
    </div>
  );
};

export default SearchBar;
