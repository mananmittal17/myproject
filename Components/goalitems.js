import { StyleSheet, View , Text, Pressable } from "react-native";

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
       
        borderRadius: 6,
        backgroundColor: "purple",
    
      },
      goalColor: {
        color: "white",
        padding: 8,
        textAlign: 'center'
      }
})

function GoalItem (props){
    return (
      
        <View style={styles.goalItem}>
          <Pressable 
          style = {({pressed})=> pressed }
          android_ripple={{color : "#dddddd"}} 
          onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalColor}>{props.text}</Text>
        </Pressable>
      </View>
     
    )
}

export default GoalItem;

