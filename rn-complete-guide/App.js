import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TextInput
          placeholder="Course goal"
          style={{
            width: "80%",
            borderColor: "black",
            borderWidth: 1,
            padding: 10
          }}
        />
        <Button title="ADD" />
      </View>

      <View></View>
    </View>
  );
}
