import Result from "@/components/Result";

export default async function SearchPage({ params }: any) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6da21eadad2ee8b3290e314809b05cc3&query=${params.searchTerm}&language=en-US&include_adult=false`
    );

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const data = await res.json();

    const results = data.results;
    return (
        <div>
            <h1 className="text-center text-[30px] mt-[20px] mb-[20px]">Search Keyword: <span className="text-amber-600 font-[500]">{params.searchTerm}</span></h1>
            {results && results.length === 0 && (
                <h1 className="text-center pt-6">No results found</h1>
            )}

            {results && <Result results={results} />}
        </div>
    );
}