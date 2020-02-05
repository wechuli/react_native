import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  d;
  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.screen}>

      {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={{ padding: 10, height: 50 }}>
          <Button title="Add" color="teal" onPress={addGoalHandler} />
        </View>
      </View>
      <View></View> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    padding: 10,
    borderWidth: 1,
    width: "70%",
    borderRadius: 7
  }
});
