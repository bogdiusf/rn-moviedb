import { useMovies } from '../../../hooks';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Movie } from '../../../types';
import SkeletonCard from './SkeletonCard';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [searchText, setSearchText] = useState('');
  const { data, isLoading } = useMovies();
  const filteredData = (data ?? [])?.filter((movie: Movie) =>
    (movie.title ?? '').toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <View style={styles.searchContainer}>
        <Text style={styles.title}>All movies</Text>

        <TextInput
          onChangeText={(e) => setSearchText(e)}
          value={searchText}
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="black"
        />
      </View>

      <View style={{ gap: 12, paddingTop: 24 }}>
        {!isLoading
          ? filteredData.map((item: Movie) => (
              <MovieCard
                movieName={item.title ?? item.name}
                key={item.id}
                moviePosterUrl={item.poster_path}
                releaseDate={item.release_date}
              />
            ))
          : [0, 1, 2].map((item) => <SkeletonCard key={item} />)}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white'
  },
  input: {
    height: 40,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 5,
      height: 10 // Offset along the Y-axis
    },
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 3.84 // Shadow radius
  },
  chipsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32
  }
});

export default MovieList;
