import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const OnboardingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useNavigation();

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleRedirect = () => {
    // Redirect logic to the home screen
    //@ts-ignore
    navigation.navigate('TabNav');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Depending on the currentPage, render different screens */}
      {currentPage === 1 && (
        <View>
          <Image source={{ uri: '' }} />
          <Image
            source={{ uri: '' }}
            style={{ transform: [{ rotate: '45deg' }] }}
          />
          <Text>Welcome to MovieDB</Text>
          <TouchableOpacity onPress={handleNext}>
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentPage === 2 && (
        <View>
          <Image source={{ uri: '' }} />
          <Text>Explore Thousands of Movies</Text>
          <TouchableOpacity onPress={handleRedirect}>
            <Text>Start Exploring</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            <Text>Continue to Home</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Bottom Section with dots */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: currentPage === 1 ? 'blue' : 'gray',
            borderRadius: 5,
            marginHorizontal: 5
          }}
        />
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: currentPage === 2 ? 'blue' : 'gray',
            borderRadius: 5,
            marginHorizontal: 5
          }}
        />
      </View>
    </View>
  );
};

export default OnboardingPage;
