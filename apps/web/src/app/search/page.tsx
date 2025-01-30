"use client";

import SearchBar from "@/components/search-bar";
import SearchList from "@/components/search-list";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  return (
    <div>
      <div className="w-full flex items-center justify-center px-2">
        <SearchBar defaultValue={query || ""} />
      </div>
      <SearchList />
    </div>
  );
}
