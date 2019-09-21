import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          placeholder="Course goal"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10
          }}
        />
        <Button title="ADD" />
      </View>

      <View></View>
    </View>
  );
}
