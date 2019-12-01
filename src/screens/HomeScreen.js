import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <TextInput placeholder="Where to?" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    width: "60%"
  }
});

export default HomeScreen;
