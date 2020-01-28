import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const AddToDo = props => {
  const { submitHandler } = props;
  const [text, setText] = useState("");
  const changeHandler = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="new todo.."
        onChangeText={changeHandler}
        style={styles.input}
      />

      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="teal"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});

export default AddToDo;
