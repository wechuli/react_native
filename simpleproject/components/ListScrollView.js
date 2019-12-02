import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ListScrollView = () => {
  const [people, setPeople] = useState([
    { name: "shaun", key: 1 },
    { name: "paul", key: 2 },
    { name: "keenan", key: 3 },
    { name: "jecinta", key: 4 },
    { name: "shally", key: 5 },
    { name: "jess", key: 6 },
    { name: "shaunie", key: 7 }
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(person => (
          <View key={person.key}>
            <Text style={styles.item}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }
});

export default ListScrollView;
