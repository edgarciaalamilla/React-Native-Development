import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // alignItems: "center",
    // justifyContent: "space-between",
    // flexDirection: "column",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: `rgb(200,0,0)`,
  },
  boxTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: `rgb(0,200,0)`,
    top: 100,
  },
  boxThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: `rgb(0,0,200)`,
  },
});

export default BoxScreen;
