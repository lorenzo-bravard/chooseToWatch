"use client";

import { useEffect, useState } from "react";
import { getTrendingMoviesPage1, getTrendingMoviesPage2 } from "@/src/api/tmbd";
import { Input } from "@/src/components/ui/input";

function Hero() {
  const [movies, setMovies1,] = useState([]);
  const [movies2, setMovies2] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data_page1 = await getTrendingMoviesPage1();
        setMovies1(data_page1.results);
        const data_page2 = await getTrendingMoviesPage2();
        setMovies2(data_page2.results);
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="relative hero h-[100vh] w-full flex flex-col items-center justify-center text-center bg-[var(--color-base-300)] overflow-hidden">
      
      {/* FOND défilant */}
      <div className="absolute inset-0 bg-black z-0 flex flex-col">
        {/* Ligne 1 */}
        <div className="h-1/2 w-full overflow-hidden">
          <div className="flex whitespace-nowrap min-w-max animate-scroll gap-4 h-full py-7">
            {[...movies, ...movies].map((movie, i) => (
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
          <div className="flex whitespace-nowrap min-w-max animate-scroll-reverse gap-4 h-full py-7">
            {[...movies2, ...movies2].map((movie, i) => (
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
