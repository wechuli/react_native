import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const { handleSubmitGoal } = props;

  const handleInputChange = enteredText => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal>
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
});

export default GoalInput;
