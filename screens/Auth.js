import React from "react";
import {
    BackHandler,
    Button,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import firebase from "../config";

const auth = firebase.auth();

export default function Auth({ navigation }) {
    var email, password;
    return (
        <ImageBackground source={require("../assets/gfgf.png")} style={styles.container}>
            <View style={styles.container2}>
                <Text
                    style={{
                        fontSize: 34,
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "#b7d2e7",
                    }}
                >
                    BienVenue
                </Text>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType="email-address"
                    placeholder="enter your email"
                    onChangeText={(text) => {
                        email = text;
                    }}
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    secureTextEntry
                    placeholder="enter your password"
                    onChangeText={(text) => {
                        password = text;
                    }}
                ></TextInput>
                <View style={styles.buttonContainer}>
                    <Button
                        title="submit"
                        color="#87A878"
                        onPress={() => {
                            // snn replace bech me yarj3ekch ll auth
                            navigation.navigate("Home");
                        }}
                    />
                    <Button
                        title="exit"
                        color="#bb0a21"
                        onPress={() => {
                            BackHandler.exitApp();
                        }}
                    />
                </View>
                <Text
                    style={styles.textStyle}
                    onPress={() => {
                        navigation.navigate("NewUser");
                    }}
                >
                    Create new account ?
                </Text>
            </View>
            <StatusBar style="dark" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        backgroundColor: "#212738",
        alignItems: "center",
        justifyContent: "center",
        height: 350,
        width: "80%",
        borderRadius: 15,
    },
    textInputStyle: {
        height: 45,
        width: "90%",
        paddingLeft: 15,
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 22,
        marginTop: 20,
    },
    textStyle: {
        color: "white",
        marginTop: 10,
    },
});
