import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QuickView from './QuickView';
import useStore from '../../../store';

const MovieCard = ({ movieName, moviePosterUrl, releaseDate }: any) => {
  const { modalVisible, setModalVisible } = useStore();

  return (
    <>
      <TouchableOpacity
        onLongPress={() => setModalVisible(true)}
        activeOpacity={0.75}
      >
        <View style={styles.container}>
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={styles.title}>{movieName}</Text>
            <Text>Year: {(releaseDate ?? 'N/A').slice(0, 4)}</Text>
          </View>
          <Image
            source={{ uri: 'https://image.tmdb.org/t/p/w300' + moviePosterUrl }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <QuickView />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 1 // Offset along the Y-axis
    },
    shadowOpacity: 0.05, // Shadow opacity
    shadowRadius: 3.84 // Shadow radius
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  image: {
    aspectRatio: 1 / 1,
    height: 50,
    flex: 1,
    borderRadius: 8
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
  }
});

export default MovieCard;
