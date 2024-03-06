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
};

const useStore = create<StoreState>((set) => ({
  movieList: [],
  setMovieList: (items) => set({ movieList: items })
}));

export default useStore;
