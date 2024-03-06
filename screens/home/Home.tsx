import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieList from './components/MovieList';
import HomeHeader from './components/HomeHeader';

const Home = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles({}).container} className="h-4 w-4 bg-black">
      <View style={{ marginTop: insets.top }}>
        <HomeHeader />
        <MovieList />
      </View>
    </View>
  );
};

const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E7F5FF',
      padding: 24,
      gap: 32
    }
  });

export default Home;
