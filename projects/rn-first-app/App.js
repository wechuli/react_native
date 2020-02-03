import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  DatePickerAndroid
} from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("");
  const toggleTextInput = () => {
    if (outputText == "Hi there just some fake text") {
      setOutputText("The text changed");
    } else {
      setOutputText("Hi there just some fake text");
    }
  };
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={toggleTextInput} color="teal" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
