import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const SkeletonCard = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
        })
      ])
    ).start();
  }, [animatedValue]);

  const background = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#652595']
  });

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, gap: 4 }}>
        <Animated.View
          style={[styles.title, { backgroundColor: background }]}
        />
        <Animated.View style={[styles.text, { backgroundColor: background }]} />
      </View>
      <Animated.View style={[styles.image, { backgroundColor: background }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    backgroundColor: '#FFFACD',
    borderRadius: 12
  },
  title: {
    height: 24,

    borderRadius: 4
  },
  text: {
    height: 16,
    width: 100,
    borderRadius: 4
  },
  image: {
    height: 50,
    aspectRatio: 1 / 1,
    borderRadius: 8,

    flex: 1
  }
});

export default SkeletonCard;
