import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            borderColor: "black",
            padding: 10,
            borderWidth: 1,
            width: "70%",
            borderRadius: 7
          }}
        />
        <View style={{padding:10,height:50}}>
          <Button title="Add" color="teal" />
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
