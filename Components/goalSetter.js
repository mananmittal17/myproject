import { Button, Modal, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";


function GoalSetter(props) {
  const [goal, setGoal] = useState("")

  const goalInputhandeler = (value) => {
    console.log(value)
    setGoal(value)
  }

  const onAddGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("")
  }
  return (
    <Modal>
    <View style={styles.inputView}>
      <TextInput style={styles.inputArea} placeholder='Please type here' 
      value={goal}
      onChangeText={goalInputhandeler} />
      <Button title='Add goal' onPress={onAddGoalHandler} />
    </View>
    </Modal>
  )
}

export default GoalSetter;

const styles = StyleSheet.create({
  inputView: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    alignItems: "center"
  },
  inputArea: {
    flex: 3,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 5,
    padding: 8

  },
})