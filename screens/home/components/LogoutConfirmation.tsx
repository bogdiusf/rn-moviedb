import { useNavigation } from '@react-navigation/native';
import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import useStore from '../../../store';
import { boxShadow } from '../../../common/styles';

const LogoutConfirmation = ({
  confirmationVisible,
  setIsConfirmationVisible
}: {
  confirmationVisible: boolean;
  setIsConfirmationVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigation = useNavigation();
  const { setIsLogged } = useStore();
  const handleLogout = () => {
    setIsConfirmationVisible(false);
    setIsLogged(false);
    //@ts-ignore
    navigation.navigate('Login');
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={confirmationVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Are you sure you want to logout?</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Pressable
              style={[styles.button]}
              onPress={() => setIsConfirmationVisible(false)}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={handleLogout}
            >
              <Text style={[styles.textStyle, { color: 'white' }]}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 35,
    alignItems: 'center',
    ...boxShadow,
    elevation: 5,
    height: 200,
    aspectRatio: 1 / 1,
    justifyContent: 'center'
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2
  },
  buttonConfirm: {
    backgroundColor: 'red'
  },

  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  }
});

export default LogoutConfirmation;
