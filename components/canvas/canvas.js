import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import logo from "./logo.svg";
import "./App.css";
import DragMove from "./DragMove";

function playground() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  return (
    <View className="App">
      <View className="App-header">
        <DragMove onDragMove={handleDragMove}>
          <View
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
            }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </View>
        </DragMove>
      </View>
    </View>
  );
}

export default playground;
