import React, { useState } from "react";
import uuid from "uuid/v4";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleSubmitGoal = newGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: uuid(), value: newGoal }
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} handleSubmitGoal={handleSubmitGoal} cancelGoal={cancelGoalAdditionHandler}/>

      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              onDelete={removeGoalHandler}
              id={itemData.item.id}
              title={itemData.item.value}
            />
          )}
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