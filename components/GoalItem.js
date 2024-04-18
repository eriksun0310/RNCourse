import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        //click delete
        onPress={() => props.onDeleteItem(props.id)}
        android_ripple={{ color: "#210644" }}
        // for ios
        style={({ pressed }) => pressed && styles.pressesItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#feffc7",
  },
  pressesItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#000",
    padding: 8,
  },
});
