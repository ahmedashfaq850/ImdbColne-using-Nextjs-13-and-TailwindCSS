import Result from "@/components/Result";


export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=6da21eadad2ee8b3290e314809b05cc3&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Result results={results} />
    </div>
  );
}