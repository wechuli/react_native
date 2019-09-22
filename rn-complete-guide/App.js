import React, { useState } from "react";
import uuid from "uuid/v4";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const handleSubmitGoal = (newGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: uuid(), value: newGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput    
        handleSubmitGoal={handleSubmitGoal}
      />

      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => <GoalItem title={itemData.item.value} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
