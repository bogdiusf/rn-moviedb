import { create } from 'zustand';

export type Movie = {
  image: string;
  trailerLength: string;
  title: string;
  releaseDate: string;
  videoLink: string;
};

type StoreState = {
  movieList: Movie[];
  setMovieList: (items: Movie[]) => void;
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};

const useStore = create<StoreState>((set) => ({
  movieList: [],
  setMovieList: (items) => set({ movieList: items }),
  isLogged: false,
  setIsLogged: (value) => set({ isLogged: value })
}));

export default useStore;
