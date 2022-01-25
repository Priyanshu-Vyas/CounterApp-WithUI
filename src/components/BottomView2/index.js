import React, { useState } from 'react';
import { StyleSheet, Text, View, Button , Image, Alert, TouchableOpacity} from 'react-native';

export default function Bottomview2({ navigation }) {

  const [Count,SetCount] = useState(0) 
  function Inc() {
    if (Count<99) {
      return(SetCount(Count+1));
    } else {
      return(Alert.alert("Max Level Reached!!"));
    }
  }
  function Dec() {
    if (Count>0) {
      return(SetCount(Count-1));
    } else {
      return(Alert.alert("Level Can't be less than ZERO(0)!!"));
    }
  }
  function Release() {
    return([Alert.alert("Hurray, Level "+String(Count)+" Pikachu Released!!"),SetCount(0)]);
  }
  return (
    <View style={styles.container}>
        <Image source={{uri: 'data:image/jpeg;base64,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'}}
       style={styles.image} />
        <Text style={{fontSize: 40 , color: "yellow" , fontWeight: "bold" , textShadowColor: 'black' , textShadowRadius:14}}>PIKACHU</Text>
        <Text style={styles.ltext}>Level:</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => Inc()}>
            <Text style={{fontSize: 60 , color: "#000"}}>+</Text>
          </TouchableOpacity>
          <Text style={styles.btext}>{Count}</Text>
          <TouchableOpacity onPress={() => Dec()}>
            <Text style={{fontSize: 60 , color: "#000"}}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => Release()}>
            <Text style={{fontSize: 35 , color: "blue"}}>RELEASE</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  ltext: {
    color: '#000',
    fontSize: 40,
    padding: 10,
    alignSelf: 'flex-start',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 24,
  },
  button: {
    color: 'crimson',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingBottom: 10,
  },
  btext: {
    color: 'blue',
    fontSize: 60,
    fontWeight: 'bold',
    paddingLeft: 70,
    paddingRight: 70,
  }
});
