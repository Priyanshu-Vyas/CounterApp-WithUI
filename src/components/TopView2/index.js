import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Topview2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pokemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090F0B',
    textAlign: 'left',
    padding: '2%',
  },
  text: {
    color: 'white',
    fontSize: 50,
    margin: 20,
    letterSpacing: 7,
  },
});
