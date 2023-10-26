import React, { useState, useEffect } from "react";

const SearchBar = ({ books, setFilteredBooks }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchQuery = search.toLowerCase();
    if (searchQuery === "") {
      // Vis alle bøger når inputtet er tomt
      setFilteredBooks(books);
    } else {
      // vis kun de bøger der passer med inputtet
      const filteredBooks = books.filter((book) =>
        book.name.toLowerCase().includes(searchQuery)
      );
      setFilteredBooks(filteredBooks);
    }
  }, [search, books, setFilteredBooks]);

  return (
    <div className="fixed top-0 left-0 bg-white w-full">
      <h1 className="font-bold text-3xl pl-6 pt-2 pb-2">Opdag</h1>
      <div className="flex justify-between pr-4 pl-4 pb-4">
        {/* Filter SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
          />
        </svg>

        <div className="relative flex">
          <label for="search" className="absolute left-2 top-1">
            {/* Search SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </label>
          {/* Search bar */}
          <input
            type="text"
            id="search"
            placeholder="Søg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-200 pl-10 h-7 rounded-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;