import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ToDoItem = ({ item, pressHandler }) => {
  const { key, text } = item;

  return (
    <TouchableOpacity onPress={() => pressHandler(key)}>
      <Text style={styles.item}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  }
});

export default ToDoItem;
