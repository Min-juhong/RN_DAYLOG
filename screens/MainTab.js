import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedsScreen from "./FeedsScreen";
import CalendarScreen from "./CalendarScreen";
import SearchScreen from "./SearchScreen";
import SearchHeader from "../components/SearchHeader";
import Icon from "react-native-vector-icons/MaterialIcons"

const Tab = createBottomTabNavigator();

function MainTab() {
    return(
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#009688',
            }}
        >
            <Tab.Screen 
                name="피드" 
                component={FeedsScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="view-stream" size={size} color={color} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="캘린더" 
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="event" size={size} color={color} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="검색" 
                component={SearchScreen} 
                options={{
                    title: '검색',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="search" size={size} color={color} />
                    ),
                    headerTitle: () => <SearchHeader />,
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTab;