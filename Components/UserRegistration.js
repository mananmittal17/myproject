import react, { useEffect, useState } from "react";

import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";


const UserRegistration = () => {


    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    const handleSubmit = async (data) => {
        if (userData.name.length == 0) {
            alert("Name cannot be empty")
        } else if (userData.email.length == 0) {
            alert("Email cannot be empty")
        } else if (userData.password.length == 0 || userData.password.length <6 || userData.password.length>12
        ) {
            alert(userData.password.length == 0 ? "Password cannot be empty" : "Password should be of min 6 and max 12 char")
        } else if (!userData.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert("Email is not in right format")
        }
        else {
            console.log("any")
            axios.post('http://10.5.53.17:8447/addUser', userData)
                .then(function (response) {
                    console.log(response.data);
                    alert(response.data.message)
                })
                .catch( (e) =>{
                    console.log(e);
                    alert("Something went wrong")

                });
        }
    }


    const handleChange = (text, field) => {
        // console.log(e)
        if (field == "name") {
            setUserData((previousState) => ({
                ...previousState,
                name: text
            }))
        } else if (field == "email") {
            setUserData((previousState) => ({
                ...previousState,
                email: text
            }))
        }
        else if (field == "password") {
            setUserData((previousState) => ({
                ...previousState,
                password: text
            }))
        }
    }
    useEffect(() => {
        console.log(userData)
    }, [userData])
    return (
        <>

            <SafeAreaView>
                <View >
                    <TextInput placeholder="enter your name" style={styles.input} name="name" onChangeText={(text) => handleChange(text, "name")} />
                    <TextInput placeholder="enter your email" style={styles.input} name="email" onChangeText={(text) => handleChange(text, "email")} />
                    <TextInput placeholder="enter your password" style={styles.input} name="password" onChangeText={(text) => handleChange(text, "password")} />
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                    <Button title='register' onPress={handleSubmit} />

                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "100%",
        marginTop: 15,
        color: "#000",
        borderWidth: 1,
    },

});

export default UserRegistration