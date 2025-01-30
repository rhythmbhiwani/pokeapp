import SearchBar from "@/components/search-bar";
import SearchList from "@/components/search-list";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = (await searchParams).query as string;

  return (
    <div>
      <div className="w-full flex items-center justify-center px-2">
        <SearchBar defaultValue={query || ""} />
      </div>
      <SearchList />
    </div>
  );
}
