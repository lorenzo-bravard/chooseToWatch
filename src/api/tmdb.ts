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

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  adult: boolean;
  genre_ids: number[];
}

export async function getTrendingMoviesByPage(page: number): Promise<Movie[]> {
  // Fetch full response from TMDB
  const data = await tmbdFetch('movie/popular', { language: 'fr-FR', region: 'FR', page });
  // Extract and filter out adult content
  const results: Movie[] = data.results;
  return results.filter(movie => !movie.adult);
}
