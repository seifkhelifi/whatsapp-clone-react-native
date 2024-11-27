import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListProfile from "./home/ListProfile";
import Group from "./home/Group";
import MyProfile from "./home/MyProfile";

const Tab = createMaterialBottomTabNavigator();

export default function Home(props) {
    const currentId = props.route.params.currentId;
    return (
        <Tab.Navigator>
            <Tab.Screen name="ListProfile" component={ListProfile}></Tab.Screen>
            <Tab.Screen name="Group" component={Group}></Tab.Screen>
            <Tab.Screen
                name="MyProfile"
                component={MyProfile}
                initialParams={currentId}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}
