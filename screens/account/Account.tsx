import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Account = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles({}).container]}>
      <View style={{ marginTop: insets.top }}>
        <Text>Account</Text>
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

export default Account;
