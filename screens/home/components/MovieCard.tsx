import React, { useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import QuickView from './QuickView';
import { usePressTransition } from '@/hooks';
import { boxShadow } from '../../../common/styles';

const MovieCard = ({ movieName, moviePosterUrl, releaseDate }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { handlePressIn, handlePressOut, scale } = usePressTransition();

  return (
    <>
      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onLongPress={() => setModalVisible(true)}
          activeOpacity={0.75}
        >
          <View style={styles.container}>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={styles.title}>{movieName}</Text>
              <Text>Year: {(releaseDate ?? 'N/A').slice(0, 4)}</Text>
            </View>
            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/original' + moviePosterUrl
              }}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>

      <QuickView
        movieTitle={movieName}
        moviePosterUrl={moviePosterUrl}
        releaseDate={releaseDate}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    backgroundColor: '#FFFACD',
    borderRadius: 12,
    ...boxShadow
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
  }
});

export default MovieCard;
