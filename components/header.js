import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title1}>Scratch</Text>
      <Text style={styles.title2}>sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
   // position:'absolute',
    top:'0px',
    width: '100%',
    border:'solid 2px black',
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  title1: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 40
  },
  title2 : {
    justifyContent: 'flex-end',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginleft: 60,
    justifyContent: 'flex-end'
  }
});