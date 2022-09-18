import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ChildScreen from "../screens/ChildScreen";
import AddRewardScreen from "../screens/AddRewardScreen";
import RewardsScreen from "../screens/RewardsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}></Stack.Screen>
                <Stack.Screen name="Child" component={ChildScreen} options={{title: "Ребенок"}}></Stack.Screen>
                <Stack.Screen name="Rewards" component={RewardsScreen} options={{title: "Награды"}}></Stack.Screen>
                <Stack.Screen name="AddReward" component={AddRewardScreen} options={{title: "Добавить награду"}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;