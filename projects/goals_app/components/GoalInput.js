import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalInput = props => {
  const {addGoal} = props;
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = ()=>{
      addGoal(enteredGoal);
  }

  const 
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />

      <Button title="Add" color="teal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;
