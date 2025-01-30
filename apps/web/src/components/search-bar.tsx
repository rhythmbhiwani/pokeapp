"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  defaultValue?: string;
}

function SearchBar({ defaultValue = "" }: Props) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        router.push(`/search?query=${encodeURIComponent(query)}`);
      }
    }, 2000);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative max-w-2xl mx-auto w-full">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search Pokemon"
          className="flex h-10 w-full  border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 rounded-full border shadow-sm focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-shadow"
          onKeyDown={handleKeyPress}
        />
        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </div>
  );
}

export default SearchBar;
