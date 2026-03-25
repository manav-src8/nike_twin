"use client";

const SearchBar = () => {
  return (
    <form
      onSubmit={""}
      className="flex items-center border-[1.5px] rounded-full px-2   border-black "
    >
      <input
        type="text"
        placeholder="Search"
        // value={"query"}
        // onChange={""}
        className="outline-none text-sm "
      />
      <button></button>
    </form>
  );
};

export default SearchBar;
