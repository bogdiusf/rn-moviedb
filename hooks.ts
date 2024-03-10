import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { Animated } from 'react-native';

export const useMovies = () => {
  const fetchMovies = async () => {
    const url = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODc0YjhjYTg2ZTJmM2NkZjMxMWU0OTk2MWZjYWQ1MyIsInN1YiI6IjYyMDk0MzAxMWQ3OGYyMDA5ZTlkNDlmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S_3NsOvA7M4VV3erSkdOhEYJ_1p65WQ6H86G8jHMhc0'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 4000));
    return result.results;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies
  });

  return { data, isLoading, error };
};

export const usePressTransition = () => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.9, // Change this value to adjust the downward movement
      duration: 100, // Adjust duration as needed
      useNativeDriver: true
    }).start();
  };
  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1, // Change this value to adjust the downward movement
      duration: 100, // Adjust duration as needed
      useNativeDriver: true
    }).start();
  };

  return { handlePressIn, handlePressOut, scale };
};
