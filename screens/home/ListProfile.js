import { View, Text, ImageBackground, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import firebase from "../../config";
const database = firebase.database();
const ref_les_profils = database.ref("lesprefix");

export default function ListProfile(props) {
    const currentId = props.route.params.currentId;

    const [data, setData] = useState([]);
    useEffect(() => {
        //importer les données
        ref_les_profils.on("value", (snapshot) => {
            const d = [];
            snapshot.forEach((unProfil) => {
                if (unProfil.val.id != currentId) d.push(unProfil.val());
            });
            setData(d);
        });
        return () => {
            ref_les_profils.off();
        };
    }, []);

    return (
        <ImageBackground source={require("../../assets/gfgf.png")} style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.textstyle}>My Account</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <Text
                            onPress={() => {
                                props.navigation.navigate("Chat", { nom: item.nom });
                            }}
                        >
                            {item.nom}
                        </Text>
                    );
                }}
                style={{ backgroundColor: "#fff4", width: "95%" }}
            ></FlatList>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    textinputstyle: {
        fontWeight: "bold",
        backgroundColor: "#0004",
        fontSize: 20,
        color: "#fff",
        width: "75%",
        height: 50,
        borderRadius: 10,
        margin: 5,
    },
    textstyle: {
        fontSize: 40,
        fontFamily: "serif",
        color: "#07f",
        fontWeight: "bold",
    },
    container: {
        color: "blue",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
