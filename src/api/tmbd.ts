import { pages } from "next/dist/build/templates/app-page";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!API_KEY) {
  throw new Error('TMDB API key is missing. Did you set NEXT_PUBLIC_TMDB_API_KEY in your .env.local file?');
}

function tmbdFetch(endpoint: string, params: Record<string, string | number> = {}) {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  url.searchParams.append('api_key', API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });
  
  return fetch(url.toString()).then(response => {
    if (!response.ok) {
      throw new Error(`Error fetching data from TMDB: ${response.statusText}`);
    }
    return response.json();
  });
}

export async function getTrendingMoviesPage1() {
  return tmbdFetch('movie/popular', {
    language: 'en-fr', page:  Math.floor(Math.random() * 30) + 1, region: 'FR'}
  );
}

export async function getTrendingMoviesPage2() {
    return tmbdFetch('movie/popular', {
      language: 'en-fr', page:  Math.floor(Math.random() * 30) + 1, region: 'FR'}
    );
}
