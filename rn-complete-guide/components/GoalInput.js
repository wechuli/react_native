import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {
  const { handleInputChange, handleSubmitGoal, enteredGoal } = props;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText={handleInputChange}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={handleSubmitGoal} />
    </View>
  );
};
const styles = {
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
};

export default GoalInput;