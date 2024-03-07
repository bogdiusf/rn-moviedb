import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieList from './components/MovieList';

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          marginTop: insets.top,
          paddingBottom: insets.bottom * 3
        }}
        showsVerticalScrollIndicator={false}
      >
        <MovieList />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F5FF',
    padding: 24,
    gap: 32
  }
});

export default Home;
