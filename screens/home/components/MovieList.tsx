import { useMovies } from '../../../hooks';
import React from 'react';
import { FlatList, Text } from 'react-native';
import { Movie } from '../../../types';

const MovieList = () => {
  const { data } = useMovies();

  return (
    <FlatList
      data={data}
      renderItem={({ item }: { item: Movie }) => <Text>{item.title}</Text>}
      keyExtractor={(item) => item.title}
    />
  );
};

export default MovieList;
