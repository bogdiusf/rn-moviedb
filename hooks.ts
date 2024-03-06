import { useQuery } from '@tanstack/react-query';
import { Movie } from './types';

export const useMovies = () => {
  const fetchMovies = async () => {
    const url = 'https://moviesverse1.p.rapidapi.com/get-trending-trailers';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'eb1683ad4fmsh1e5f7ef02531e65p1d7308jsn05457098d291',
        'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result.trailers as Movie[];
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies
  });

  return { data, isLoading, error };
};
