"use client";

import { getTrendingMoviesByPage, Movie } from "@/src/api/tmdb";
import { Input } from "@/src/components/ui/input";
import useSWR from "swr";

function Hero() {

  // Generate two independent random pages for each line
  const page1 = Math.floor(Math.random() * 30) + 1;
  const page2 = Math.floor(Math.random() * 30) + 1;
  
  const { data: line1 = [] as Movie[] } = useSWR<Movie[]>(
    ["popular", page1],
    () => getTrendingMoviesByPage(page1)
  );  
  const { data: line2 = [] as Movie[] } = useSWR<Movie[]>(
    ["popular", page2],
    () => getTrendingMoviesByPage(page2)
  );
  
  return (
    <div className="relative hero h-[100vh] w-full flex flex-col items-center justify-center text-center bg-[var(--color-base-300)] overflow-hidden">
      
      {/* FOND défilant */}
      <div className="absolute inset-0 bg-black z-0 flex flex-col">
        {/* Ligne 1 */}
        <div className="h-1/2 w-full overflow-hidden">
          <div className="flex whitespace-nowrap min-w-max animate-scroll gap-4 h-full pt-3 pb-2">
            {(Array.isArray(line1) ? line1 : line1.results || []).map((movie, i) => (
              <img
                key={`line1-${i}`}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-auto object-cover rounded"
              />
            ))}
          </div>
        </div>
  
        {/* Ligne 2 (inverse) */}
        <div className="h-1/2 w-full overflow-hidden">
          <div className="flex whitespace-nowrap min-w-max animate-scroll-reverse gap-4 h-full pt-2 pb-3">
          {(Array.isArray(line2) ? line2 : line2.results || []).map((movie, i) => (
            <img
              key={`line2-${i}`}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-auto object-cover rounded"
            />
          ))}
          </div>
        </div>
      </div>
  
      {/* CONTENU au premier plan */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full bg-black/40 text-[var(--color-base-100)]">
        <h1 className="text-8xl font-extrabold">Choose To Watch</h1>
        <p className="text-base pt-4">Discover amazing content and connect with our community.</p>
        <Input className="mt-6 w-auto text-gray-500" placeholder="Search" />
      </div>
    </div>
  );
}

export default Hero;
