import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import ListScrollView from "./components/ListScrollView";

export default function App() {
  const [name, setName] = useState("Paul");
  const [age, setAge] = useState("30");

  const handleButtonPress = () => {
    setName("Wechuli");
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>

      <Text>Enter name</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={val => setName(val)}
      />

      <Text>Enter age: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={val => setAge(val)}
      />

      <Text>
        Name: {name}, age:{age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={handleButtonPress} />
      </View>

      <ListScrollView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 20
  },
  header: {
    backgroundColor: "pink",
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 4,
    padding: 8,
    margin: 10,
    width: 200
  },
  boldText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: "yellow",
    padding: 20
  }
});
