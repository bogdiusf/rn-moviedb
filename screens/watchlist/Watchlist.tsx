import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Watchlist = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={{
          uri: 'https://thumbs.dreamstime.com/b/purple-blue-textured-background-wallpaper-app-background-layout-dark-gradient-colors-vintage-distressed-elegant-78118630.jpg'
        }}
        style={styles.image}
      >
        <View style={{ marginTop: insets.top, padding: 24 }}>
          <Text style={{ color: 'white' }}>Watchlist</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F5FF',
    gap: 32
  },
  image: {
    flex: 1
  }
});

export default Watchlist;
