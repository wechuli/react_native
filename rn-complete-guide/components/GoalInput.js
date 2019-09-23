import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const { handleSubmitGoal, visible, cancelGoal } = props;

  const handleInputChange = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    handleSubmitGoal(enteredGoal);
    setEnteredGoal("");
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
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelGoal} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
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
    padding: 10,
    marginBottom: 10
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  },
  button: {
    width: "60%"
  }
});

export default GoalInput;
