
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Alert
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Мій перший мобільний застосунок
      </Text>

      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
        style={styles.image}
      />

      <Text style={styles.name}>
        Тарасюк Олександр
      </Text>

      <Text style={styles.group}>
        Група: ІТ-32
      </Text>

      <Text style={styles.description}>
        Це мій перший мобільний застосунок,
        створений за допомогою React Native та Expo.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          Alert.alert(
            'Вітаю!',
            'Ви створили свій перший застосунок!'
          )
        }
      >
        <Text style={styles.buttonText}>
          Привітатися
        </Text>
      </Pressable>

      <Pressable
        style={styles.secondButton}
        onPress={() =>
          Alert.alert(
            'Про застосунок',
            'Цей застосунок створений у рамках практичної роботи №1 з React Native.'
          )
        }
      >
        <Text style={styles.buttonText}>
          Про застосунок
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A5276',
    textAlign: 'center',
    marginBottom: 25,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginBottom: 20,
  },

  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#154360',
    marginBottom: 8,
  },

  group: {
    fontSize: 19,
    color: '#2874A6',
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#2874A6',
    padding: 15,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    marginBottom: 12,
  },

  secondButton: {
    backgroundColor: '#239B56',
    padding: 15,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
