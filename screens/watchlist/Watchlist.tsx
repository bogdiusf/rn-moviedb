import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Watchlist = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <View style={{ marginTop: insets.top }}>
        <Text>Watchlist</Text>
      </View>
    </View>
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

export default Watchlist;
