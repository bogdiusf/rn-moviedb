import React, { useState } from 'react';
import {
  Animated,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieList from './components/MovieList';
import { SimpleLineIcons } from '@expo/vector-icons';
import LogoutConfirmation from './components/LogoutConfirmation';
import useStore from '../../store';
import { usePressTransition } from '@/hooks';

const Home = () => {
  const insets = useSafeAreaInsets();
  const [confirmationVisible, setIsConfirmationVisible] = useState(false);
  const { modalVisible } = useStore();
  const { handlePressIn, handlePressOut, scale } = usePressTransition();

  return (
    <>
      <ImageBackground
        source={{
          uri: 'https://thumbs.dreamstime.com/b/purple-blue-textured-background-wallpaper-app-background-layout-dark-gradient-colors-vintage-distressed-elegant-78118630.jpg'
        }}
        style={styles({ confirmationVisible, modalVisible }).image}
      >
        <ScrollView
          style={styles({}).container}
          contentContainerStyle={{
            marginTop: insets.top,
            paddingBottom: insets.bottom * 3
          }}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={{ transform: [{ scale }], alignSelf: 'flex-end' }}
          >
            <Pressable
              style={styles({}).logout}
              onPressIn={() => {
                handlePressIn();
                setIsConfirmationVisible(true);
              }}
              onPressOut={handlePressOut}
            >
              <SimpleLineIcons name="logout" size={20} color="black" />
            </Pressable>
          </Animated.View>
          <MovieList />

          <LogoutConfirmation
            confirmationVisible={confirmationVisible}
            setIsConfirmationVisible={setIsConfirmationVisible}
          />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,

      padding: 24,
      gap: 32
    },
    logout: {
      marginBottom: 8,
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 10 // Offset along the Y-axis
      },
      shadowOpacity: 0.5, // Shadow opacity
      shadowRadius: 3.84
    },
    image: {
      flex: 1,
      justifyContent: 'center'
    }
  });

export default Home;
