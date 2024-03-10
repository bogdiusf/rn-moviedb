import React, { Dispatch, SetStateAction } from 'react';
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  Animated,
  Image,
  Text
} from 'react-native';
import { boxShadow } from '../../../common/styles';
import { AntDesign } from '@expo/vector-icons';
import { usePressTransition } from '@/hooks';

type QuickViewProps = {
  movieTitle: string;
  releaseDate: string;
  moviePosterUrl: string;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const QuickView = ({
  movieTitle,
  releaseDate,
  moviePosterUrl,
  modalVisible,
  setModalVisible
}: QuickViewProps) => {
  const { handlePressIn, handlePressOut, scale } = usePressTransition();

  // console.log(movieTitle);

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/original' + moviePosterUrl
              }}
              style={styles.image}
            />
            <View style={{ width: '100%', gap: 4, flex: 1 }}>
              <Text style={styles.title}>{movieTitle}</Text>
              <Text>Year: {(releaseDate ?? 'N/A').slice(0, 4)}</Text>
            </View>
          </View>
        </View>
        <Animated.View style={{ transform: [{ scale }] }}>
          <Pressable
            style={[styles.button]}
            onPressIn={handlePressIn}
            onPressOut={() => {
              handlePressOut();
              setModalVisible(false);
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </Pressable>
        </Animated.View>
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
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    height: 500,
    // aspectRatio: 1 / 1.5,
    ...boxShadow
  },
  button: {
    borderRadius: 12,
    padding: 10,

    backgroundColor: 'white',
    ...boxShadow
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  container: {
    gap: 12,

    backgroundColor: 'white',
    borderRadius: 12
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  image: {
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
    height: 100,
    flex: 1,
    borderRadius: 8
  }
});

export default QuickView;
