import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

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
  const pressHandler = id => {
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.key !== id);
    });
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {people.map(person => (
          <View key={person.key}>
            <Text style={styles.item}>{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        numColumns={2}
        keyExtractor={item => item.key}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
    fontSize: 24,
    marginHorizontal: 3
  }
});

export default ListScrollView;
