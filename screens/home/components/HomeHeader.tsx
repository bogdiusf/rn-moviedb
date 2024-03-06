import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const HomeHeader = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.title}>All movies</Text>
        <TextInput
          onChangeText={(e) => setSearchText(e)}
          value={searchText}
          style={styles.input}
          placeholder="Search"
        />
      </View>
      <View style={styles.chipsContainer}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    fontSize: 32,
    fontWeight: '600'
  },
  input: {
    height: 30,
    width: 120,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10
  },
  chipsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32
  }
});

export default HomeHeader;
