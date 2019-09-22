import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const { handleSubmitGoal, visible } = props;

  const handleInputChange = enteredText => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          onChangeText={handleInputChange}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={() => handleSubmitGoal(enteredGoal)} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});

export default GoalInput;
