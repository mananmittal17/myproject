import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './Components/goalitems';
import GoalSetter from './Components/goalSetter';
import UserRegistration from './Components/UserRegistration';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserButton from './Components/UserButtons';
import UserLogin from './Components/userLogin';
export default function App() {
  const [goalInput, setGoalInput] = useState([])



  const goalHandeler = (value) => {

    setGoalInput((currentGoal) => [...currentGoal, { text: value, id: Math.random().toString() }])

    console.log(goalInput, "manan")
  }
  const onDeleteGoalHandler = (id) => {
    console.log("manan")
    setGoalInput(currentCourse => currentCourse.filter(item => item.id != id))
  }

  const Stack = createNativeStackNavigator();
  return (
    // <View style={styles.completeView}>
    //   <GoalSetter onAddGoal = {goalHandeler}/>
    //   <View style={styles.goalContainer}>
    //     <FlatList data={goalInput} renderItem={(itemData) =>{
    //       return <GoalItem text = {itemData.item.text} id ={itemData.item.id} onDeleteItem = {onDeleteGoalHandler}/>
    //     }} 
    //     keyExtractor={(item,index)=>item.id}/>

    //   </View>
    // </View>
    <NavigationContainer >
      <Stack.Navigator >
      <Stack.Screen name="UserButton" component={UserButton} />
      <Stack.Screen name = "UserRegistration" component={UserRegistration}/>
      <Stack.Screen name = "UserLogin" component={UserLogin}/>
      
      </Stack.Navigator>
    </NavigationContainer>
   
    // <View style = {styles.completeView}>
      
    // <UserRegistration />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeView: {
    padding: 30,
    flex: 1
  },

  goalContainer: {
    flex: 5
  },

});
