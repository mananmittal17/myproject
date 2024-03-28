import React from "react";
import { Button } from "react-native";
import UserRegistration from "./UserRegistration";

const UserButton =({navigation})=>{
   
    const handleNavigation =(screen)=>{
        navigation.navigate(screen)
    }
   return (
    <>
    <Button title="Signup" onPress={()=>handleNavigation("UserRegistration")}/>
    <Button title = "Login" onPress={()=>handleNavigation("UserLogin")}/>
    </>
   )

}

export default UserButton;