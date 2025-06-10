"use client"

import { useEffect, useState } from "react";
import { getTrendingMovies } from "@/src/api/tmbd";

type Props = {
    movie: {id : number; title: string; overview: string; poster_path: string};
};

function VoteTabs({ movie }: Props) {
    
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await getTrendingMovies();
                setMovies(data.results);
            } catch (error) {
                console.error("Failed to fetch trending movies:", error);
            }
        }
        fetchMovies();
    }, []);

    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
               <div className="bg-white rounded-sm shadow-md">
                        <img
                            src={movie.poster_path}
                            alt={movie.title}
                            className="w-full h-auto rounded-t-sm mb-4"
                        />
                        <h2 className="text-lg font-semibold mb-2 p-3">{movie.title}</h2>
                        <p className="text-sm text-gray-600 mb-4 p-3">{movie.overview}</p>
                        <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-3">
                            Vote
                        </button>
                    </div>

            </div>
    );
}

// src/components/VoteTabs.tsx

export default VoteTabs;