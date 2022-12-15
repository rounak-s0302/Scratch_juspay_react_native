import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Playground from './components/canvas/canvas';
//import Draggable from './components/canvas2/canvas';
import Draggable_func from './components/canvas2/draggable'; 

export default function App() {
  const [position, setPosition] = useState({x: 0, y: 0});

  const showpositions= (e, g)=>{
    setPosition(prevpos => {
      return {x: g.moveX, y: g.moveY };
    });
  };

  return (
    <View style={styles.container}>
    <Header />
    <Draggable_func showpositions= {showpositions} />
    <View style={styles.dashboard}>
      <Text style ={styles.xpos}>x= 
        <View style={styles.xbox}  >
          <Text>{position.x}</Text>
        </View>
      </Text>
      <Text style= {styles.ypos} >y= {position.y}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard : {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    border:'solid 2px black',
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  xpos: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 650
  },
  ypos: {
    justifyContent: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 530
  },
  xbox : {
    borderWidth: 10,
    borderColor: 'blue'
  }
});
