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
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setMovieList: (items: Movie[]) => void;
};

const useStore = create<StoreState>((set) => ({
  movieList: [],
  setMovieList: (items) => set({ movieList: items }),
  modalVisible: false,
  setModalVisible: (value) => set({ modalVisible: value })
}));

export default useStore;
