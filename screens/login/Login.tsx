import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Animated,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import useStore from '../../store';
// @ts-ignore
import AnimatedLoader from 'react-native-animated-loader';
import { boxShadow } from '../../common/styles';
import { usePressTransition } from '../../hooks';
import { FIREBASE_AUTH } from 'firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const { setIsLogged } = useStore();

  const [isLoading, setIsLoading] = useState(false);

  const { handlePressIn, handlePressOut, scale } = usePressTransition();

  const handleLogin = () => {
    setIsLogged(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      //@ts-ignore
      navigation.navigate('MainTabs');
    }, 3000);
  };

  const auth = FIREBASE_AUTH;

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(FIREBASE_AUTH, provider);
      console.log(result.user);
      // You can now handle the signed-in user in your application
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-1" style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://thumbs.dreamstime.com/b/purple-blue-textured-background-wallpaper-app-background-layout-dark-gradient-colors-vintage-distressed-elegant-78118630.jpg'
        }}
        style={styles.image}
      >
        {isLoading ? (
          <AnimatedLoader
            visible={true}
            animationStyle={{ height: 150, width: 150 }}
            speed={1}
            source={require('./animation.json')}
          />
        ) : (
          <View style={styles.contentContainer}>
            <Text style={{ color: 'white', fontSize: 48, fontWeight: '500' }}>
              Welcome!
            </Text>
            <Text
              style={{
                marginTop: 12,
                color: 'white',
                marginBottom: 12,
                fontSize: 18
              }}
            >
              Get started by logging in.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12
              }}
            >
              <Animated.View style={{ transform: [{ scale }] }}>
                <Pressable
                  onPressIn={handlePressIn}
                  onPressOut={() => {
                    handlePressOut();
                    handleLogin();
                  }}
                  style={styles.loginButton}
                >
                  <AntDesign name="google" size={24} color="black" />
                </Pressable>
              </Animated.View>
              <Pressable style={styles.loginButton}>
                <FontAwesome name="facebook" size={24} color="black" />
              </Pressable>
              <Pressable style={styles.loginButton}>
                <FontAwesome name="github" size={24} color="black" />
              </Pressable>
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 24
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  loginButton: {
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    ...boxShadow
  }
});

export default Login;
